import DisplayFilters from "./display-filters";
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import UserLocationMap from "../../../components/UserLocationMap/user-location-map";
import io from "socket.io-client";

const socket = io("http://localhost:3001");

const CatMapContainer = styled.div`
  height: 100vh; /* Fullscreen height */
  width: 100vw; /* Fullscreen width */
`;

function CatMap() {
  const [viewState, setViewState] = useState({
    longitude: 18.0686, // Default to Stockholm
    latitude: 59.3293, // Default to Stockholm
    zoom: 10,
  });

  // This function will be called when a location is selected
  const handleLocationSelect = (location) => {
    console.log("Selected location:", location);
    // You can update your state or perform any action you need with the location
  };

  const [catUpdates, setCatUpdates] = useState([]);
  const [newCatCoordinates, setNewCatCoordinates] = useState({
    newCatLatitude: null,
    newCatLongitude: null,
  });
  useEffect(() => {
    // Listen for real-time updates from the backend
    socket.on("cat-updated", (update) => {
      console.log("Real-time update received catmap row 35:", update);
      setCatUpdates((prevUpdates) => [...prevUpdates, update]);

      // Extract latitude and longitude from the update
      const { latitude, longitude } = update.fullDocument.eventInfo || {};
      console.log("Received coordinates catmap row 40:", latitude, longitude);
      if (latitude && longitude) {
        setNewCatCoordinates({
          newCatLatitude: latitude,
          newCatLongitude: longitude,
        });
      }
    });

    // Clean up the effect when the component is unmounted
    return () => {
      socket.off("cat-updated");
    };
  }, []);

  return (
    <CatMapContainer>
      <DisplayFilters />
      <UserLocationMap
        viewState={viewState}
        setViewState={setViewState}
        onLocationSelect={handleLocationSelect}
        newCatCoordinates={newCatCoordinates}
      />
    </CatMapContainer>
  );
}

export default CatMap;
