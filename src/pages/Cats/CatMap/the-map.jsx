import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker } from "react-map-gl";

const Container = styled.div`
  background: lightgreen;
  height: 100vh;
`;

function TheMap() {
  const [viewState, setViewState] = useState({
    longitude: 18.0686, // Default to Stockholm
    latitude: 59.3293, // Default to Stockholm
    zoom: 10,
  });

  const [userLocation, setUserLocation] = useState(null); // To store user's location

  // Fetch user's location on component mount
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { longitude, latitude } = position.coords;
          setUserLocation({ longitude, latitude });
          // Update map to center on user's location
          setViewState((prevState) => ({
            ...prevState,
            longitude,
            latitude,
            zoom: 12, // Adjust zoom level to focus on user's location
          }));
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <Container>
      <div style={{ height: "100vh", width: "100vw" }}>
        <Map
          {...viewState}
          style={{ width: "100%", height: "100%" }}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          onMove={(evt) => setViewState(evt.viewState)}
        >
          {/* Add a marker if user's location is available */}
          {userLocation && (
            <Marker
              longitude={userLocation.longitude}
              latitude={userLocation.latitude}
              color="blue" // Customize the color of the marker
            />
          )}
        </Map>
      </div>
    </Container>
  );
}

export default TheMap;
