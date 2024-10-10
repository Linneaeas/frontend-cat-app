import React from "react";
import styled from "@emotion/styled";
import { colors } from "../../styles";
import { Link } from "react-router-dom";

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.5rem;
  border: 3px solid  ${colors.orange};
  border-radius: 10px;
  color: white;
`;
function CatProfiles() {
  return (
    <div>
      <span>Cat profiles</span>
      <ProfileContainer></ProfileContainer>
    </div>
  );
}

export default CatProfiles;
