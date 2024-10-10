import React, { useState } from "react";
import styled from "@emotion/styled";
import { colors } from "../../../styles";

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
