import React, { useEffect, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker } from "react-map-gl";
import { CatMarker } from "../../pages/Cats/CatMap/cat-marker";
import axios from "axios";
import {
  ContainerDiv,
  RadioLabel,
  RadioInput,
  AddressForm,
  AddressInput,
  SuggestionsUl,
  SuggestionsLi,
  FirstRowDiv,
  CurrentAddressDiv,
  HeaderDiv,
  SecondRowDiv,
} from "./map-styles";

const UserLocationMap = ({
  onLocationSelect,
  height = "100vh",
  width = "100%",
  newCatCoordinates = {},
  showObservedCats = false,
  observedCats = [],
  getSymbolForStatus,
}) => {
  const { newCatLatitude = null, newCatLongitude = null } = newCatCoordinates;

  // Map view state
  const [viewState, setViewState] = useState({
    longitude: 18.0686,
    latitude: 59.3293,
    zoom: 12,
  });

  // User's current location state
  const [userLocation, setUserLocation] = useState(null);
  const [userAddress, setUserAddress] = useState("");

  // Selected location state (from either map click or input)
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState("");

  // UI state
  const [useCurrentLocation, setUseCurrentLocation] = useState(true);
  const [inputAddress, setInputAddress] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Get user's current location on component mount
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { longitude, latitude } = position.coords;
          const location = { longitude, latitude };
          setUserLocation(location);
          setSelectedLocation(location); // Initialize selected location with current location
          setViewState({ longitude, latitude, zoom: 12 });
          reverseGeocode(longitude, latitude, (address) => {
            setUserAddress(address);
            setSelectedAddress(address); // Initialize selected address with current address
            setInputAddress(address); // Initialize input field with current address
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  }, []);

  // Generic reverse geocoding function
  const reverseGeocode = async (longitude, latitude, setter) => {
    try {
      const response = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
      );
      const address = response.data.features[0]?.place_name;
      if (address) {
        setter(address);
        onLocationSelect({
          address,
          coordinates: { longitude, latitude },
        });
      }
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };

  const handleMapClick = (event) => {
    if (!useCurrentLocation) {
      const { lngLat } = event;
      const location = { longitude: lngLat.lng, latitude: lngLat.lat };
      setSelectedLocation(location);
      setViewState((prev) => ({ ...prev, ...location }));
      reverseGeocode(location.longitude, location.latitude, (address) => {
        setSelectedAddress(address);
        setInputAddress(address);
      });
    }
  };

  const handleMapMove = (evt) => {
    setViewState(evt.viewState);
  };

  const handleAddressChange = async (event) => {
    const value = event.target.value;
    setInputAddress(value);

    if (value) {
      try {
        const response = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
            value
          )}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
        );
        setSuggestions(
          response.data.features.map((feature) => feature.place_name)
        );
      } catch (error) {
        console.error("Error fetching address suggestions:", error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = async (suggestion) => {
    setInputAddress(suggestion);
    setSuggestions([]);

    try {
      const response = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          suggestion
        )}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
      );
      const { center } = response.data.features[0];
      const [longitude, latitude] = center;
      const location = { longitude, latitude };

      setSelectedLocation(location);
      setSelectedAddress(suggestion);
      setViewState((prev) => ({ ...prev, ...location }));
      onLocationSelect({
        address: suggestion,
        coordinates: location,
      });
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };

  const handleRadioChange = (event) => {
    const useCurrentLoc = event.target.value === "current";
    setUseCurrentLocation(useCurrentLoc);

    if (useCurrentLoc && userLocation) {
      setViewState((prev) => ({
        ...prev,
        longitude: userLocation.longitude,
        latitude: userLocation.latitude,
      }));
      setSelectedLocation(userLocation);
      setSelectedAddress(userAddress);
      setInputAddress(userAddress);
      onLocationSelect({
        address: userAddress,
        coordinates: userLocation,
      });
    } else {
      // When switching to "Choose address", keep the current values
      setInputAddress(selectedAddress || userAddress);
    }
  };

  const handleInputFocus = () => {
    setInputAddress("");
    setSuggestions([]);
  };

  return (
    <ContainerDiv>
      <HeaderDiv>
        <FirstRowDiv>
          <RadioLabel>
            <RadioInput
              type="radio"
              value="current"
              checked={useCurrentLocation}
              onChange={handleRadioChange}
            />
            Use Current Location
          </RadioLabel>
          <RadioLabel>
            <RadioInput
              type="radio"
              value="typed"
              checked={!useCurrentLocation}
              onChange={handleRadioChange}
            />
            Choose address
          </RadioLabel>
        </FirstRowDiv>

        <SecondRowDiv>
          {useCurrentLocation ? (
            <CurrentAddressDiv>{userAddress}</CurrentAddressDiv>
          ) : (
            <AddressForm onSubmit={(e) => e.preventDefault()}>
              <AddressInput
                type="text"
                value={inputAddress}
                onChange={handleAddressChange}
                onFocus={handleInputFocus}
                placeholder="Type an address"
              />
            </AddressForm>
          )}

          {suggestions.length > 0 && (
            <SuggestionsUl>
              {suggestions.map((suggestion, index) => (
                <SuggestionsLi
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </SuggestionsLi>
              ))}
            </SuggestionsUl>
          )}
        </SecondRowDiv>
      </HeaderDiv>

      <Map
        {...viewState}
        style={{ width, height }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onMove={handleMapMove}
        onClick={handleMapClick}
      >
        {/* Always show a marker at the currently selected location */}
        {(selectedLocation || userLocation) && (
          <Marker
            longitude={(selectedLocation || userLocation).longitude}
            latitude={(selectedLocation || userLocation).latitude}
            color="blue"
          />
        )}
        {/* Only show observed cats and new cat marker if showObservedCats is true */}
        {/* Existing observed cats */}
        {showObservedCats &&
          observedCats.map((cat) =>
            cat.latitude && cat.longitude ? (
              <Marker
                key={cat.id}
                longitude={cat.longitude}
                latitude={cat.latitude}
              >
                <CatMarker
                  BackgroundColor={cat.color}
                  symbolSrc={getSymbolForStatus(cat.status)}
                  isDeceased={cat.status === "Avliden"}
                />
              </Marker>
            ) : null
          )}
        {/* New cat marker */}
        {newCatLatitude && newCatLongitude && (
          <Marker
            longitude={newCatLongitude}
            latitude={newCatLatitude}
            color="red"
          />
        )}
      </Map>
    </ContainerDiv>
  );
};

export default UserLocationMap;
