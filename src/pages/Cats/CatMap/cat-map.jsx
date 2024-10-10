import React from "react";
import styled from "@emotion/styled";
import DisplayFilters from "./display-filters";
import TheMap from "./the-map";

const Container = styled.div`

`;

function CatMap() {
  return (
    <Container>
      <DisplayFilters />
      <TheMap />
    </Container>
  );
}

export default CatMap;
