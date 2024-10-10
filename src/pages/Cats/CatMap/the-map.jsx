import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
background: lightgreen;
height: 100vh;
`;

function TheMap() {
  return (
    <Container>
      <p>Use current location or type adddress:</p>
      <input type="text" />
    </Container>
  );
}

export default TheMap;
