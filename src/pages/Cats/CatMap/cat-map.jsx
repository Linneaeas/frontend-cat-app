import DisplayFilters from "./display-filters";
import React, { useState } from "react";
import styled from "@emotion/styled";
import UserLocationMap from "../../../components/user-location-map";

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

  return (
    <CatMapContainer>
      <DisplayFilters />
      <UserLocationMap
        viewState={viewState}
        setViewState={setViewState}
        onLocationSelect={handleLocationSelect}
      />
    </CatMapContainer>
  );
}

export default CatMap;
