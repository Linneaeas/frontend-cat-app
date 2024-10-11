import DisplayFilters from "./display-filters";
import React, { useState } from "react";
import styled from "@emotion/styled";
import UserLocationMap from "../../../components/user-location-map";

const CatMapContainer = styled.div`
  height: 100vh; /* Fullscreen height */
  width: 100vw; /* Fullscreen width */
`;

function TheMap() {
  const [viewState, setViewState] = useState({
    longitude: 18.0686, // Default to Stockholm
    latitude: 59.3293, // Default to Stockholm
    zoom: 10,
  });

  return (
    <CatMapContainer>
      <DisplayFilters />
      <UserLocationMap
        viewState={viewState}
        setViewState={setViewState}
        isModal={false} // This indicates that the map is in fullscreen mode
      />
    </CatMapContainer>
  );
}

export default TheMap;
