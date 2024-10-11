import React, { useEffect, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker } from "react-map-gl";
import axios from "axios";

const UserLocationMap = ({
  onLocationSelect,
  height = "100vh",
  width = "100%",
}) => {
  const [viewState, setViewState] = useState({
    longitude: 18.0686, // Default to Stockholm
    latitude: 59.3293, // Default to Stockholm
    zoom: 12,
  });

  const [userLocation, setUserLocation] = useState(null);
  const [address, setAddress] = useState("");
  const [currentAddress, setCurrentAddress] = useState(""); // Store the current address
  const [suggestions, setSuggestions] = useState([]);
  const [useCurrentLocation, setUseCurrentLocation] = useState(true);
  const [markerPosition, setMarkerPosition] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(12); // Initialize zoom level

  useEffect(() => {
    // Get user location on component mount
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { longitude, latitude } = position.coords;
          setUserLocation({ longitude, latitude });
          setViewState({ longitude, latitude, zoom: 12 });
          reverseGeocode(longitude, latitude);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  }, []);

  const reverseGeocode = async (longitude, latitude) => {
    try {
      const response = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
      );
      const userAddress = response.data.features[0]?.place_name;
      if (userAddress) {
        setAddress(userAddress);
        setCurrentAddress(userAddress); // Store the current address
        setMarkerPosition({ longitude, latitude }); // Set marker position to current location
        onLocationSelect(userAddress);
      }
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };

  const handleMapClick = (event) => {
    const { lngLat } = event;
    const longitude = lngLat.lng; // Access longitude
    const latitude = lngLat.lat; // Access latitude

    setViewState((prevState) => ({
      ...prevState,
      longitude,
      latitude,
    }));

    // If using the typed address, fetch address of the clicked point
    if (!useCurrentLocation) {
      reverseGeocode(longitude, latitude);
      setMarkerPosition({ longitude, latitude }); // Update marker position on map click
    }
  };

  const handleMapMove = (evt) => {
    setViewState(evt.viewState);
    setZoomLevel(evt.viewState.zoom); // Update the zoom level
  };

  const handleAddressChange = async (event) => {
    const inputValue = event.target.value;
    setAddress(inputValue);

    if (inputValue) {
      try {
        const response = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
            inputValue
          )}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
        );
        const suggestionsData = response.data.features.map(
          (feature) => feature.place_name
        );
        setSuggestions(suggestionsData);
      } catch (error) {
        console.error("Error fetching address suggestions:", error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setAddress(suggestion);
    setSuggestions([]);
    forwardGeocode(suggestion);
  };

  const forwardGeocode = async (selectedAddress) => {
    try {
      const response = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          selectedAddress
        )}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
      );
      const { center } = response.data.features[0];
      const [longitude, latitude] = center;
      setViewState({ longitude, latitude, zoom: zoomLevel }); // Keep the zoom level
      setMarkerPosition({ longitude, latitude }); // Set marker position when address is selected
      onLocationSelect(selectedAddress);
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };

  const handleRadioChange = (event) => {
    setUseCurrentLocation(event.target.value === "current");
    if (event.target.value === "current" && userLocation) {
      // Reset to current location
      setViewState({
        longitude: userLocation.longitude,
        latitude: userLocation.latitude,
        zoom: zoomLevel, // Maintain current zoom level
      });
      setSuggestions([]); // Clear any suggestions
      setAddress(currentAddress); // Reset address to the current address
      setMarkerPosition({
        longitude: userLocation.longitude,
        latitude: userLocation.latitude,
      }); // Set marker position to current location
      onLocationSelect(currentAddress); // Set selected location to current address
    }
  };

  const handleInputFocus = () => {
    // Clear the input when it gains focus
    setAddress("");
    setSuggestions([]); // Clear suggestions when focusing the input
  };

  return (
    <>
      <div style={{ marginBottom: "10px" }}>
        <label>
          <input
            type="radio"
            value="current"
            checked={useCurrentLocation}
            onChange={handleRadioChange}
          />
          Use Current Location{" "}
          {useCurrentLocation && currentAddress && `(${currentAddress})`}
        </label>
        <label style={{ marginLeft: "10px" }}>
          <input
            type="radio"
            value="typed"
            checked={!useCurrentLocation}
            onChange={handleRadioChange}
          />
          Type Address or Click on the Map
        </label>
      </div>

      {/* Conditionally render input based on the radio selection */}
      {!useCurrentLocation && (
        <form
          onSubmit={(e) => e.preventDefault()}
          style={{ marginBottom: "10px" }}
        >
          <input
            type="text"
            value={address}
            onChange={handleAddressChange}
            onFocus={handleInputFocus} // Clear input when focused
            placeholder="Type an address"
            style={{ width: "80%", padding: "8px" }}
          />
          <button type="submit" style={{ padding: "8px" }}>
            Search
          </button>
        </form>
      )}

      {suggestions.length > 0 && (
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            border: "1px solid #ccc",
            maxHeight: "150px",
            overflowY: "auto",
          }}
        >
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              style={{
                padding: "8px",
                cursor: "pointer",
                backgroundColor: "#fff",
                borderBottom: "1px solid #eee",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#f0f0f0")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#fff")}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}

      <Map
        {...viewState}
        style={{ width, height }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onMove={handleMapMove} // Use the new function to handle movement
        onClick={handleMapClick}
      >
        {/* Only one marker displayed based on the selection */}
        {useCurrentLocation && userLocation ? (
          <Marker
            longitude={userLocation.longitude}
            latitude={userLocation.latitude}
            color="blue"
          />
        ) : (
          markerPosition && ( // Show marker if markerPosition is available
            <Marker
              longitude={markerPosition.longitude}
              latitude={markerPosition.latitude}
              color="red"
            />
          )
        )}
      </Map>
    </>
  );
};

export default UserLocationMap;
