import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker } from "react-map-gl";
import axios from "axios";

const MapContainer = styled.div`
  height: ${(props) =>
    props.isModal
      ? "300px"
      : "100vh"}; /* Adjust height for modal or fullscreen */
  width: 100%;
`;

const UserLocationMap = ({ formData, setFormData, isModal = false }) => {
  const [viewState, setViewState] = useState({
    longitude: 18.0686, // Default to Stockholm
    latitude: 59.3293, // Default to Stockholm
    zoom: 12,
  });

  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { longitude, latitude } = position.coords;
          setUserLocation({ longitude, latitude });
          setViewState((prevState) => ({
            ...prevState,
            longitude,
            latitude,
            zoom: 12,
          }));
          // Fetch the address based on the user's location
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
        setFormData((prevData) => ({ ...prevData, address: userAddress }));
      }
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };

  const handleMapClick = (event) => {
    const [longitude, latitude] = event.lngLat;
    setViewState({
      longitude,
      latitude,
      zoom: 12,
    });
    // Fetch address of the clicked point
    reverseGeocode(longitude, latitude);
  };

  return (
    <MapContainer isModal={isModal}>
      <Map
        {...viewState}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onMove={(evt) => setViewState(evt.viewState)}
        onClick={handleMapClick} // Handle map click
      >
        {userLocation && (
          <Marker
            longitude={userLocation.longitude}
            latitude={userLocation.latitude}
            color="blue"
          />
        )}
      </Map>
    </MapContainer>
  );
};

export default UserLocationMap;
