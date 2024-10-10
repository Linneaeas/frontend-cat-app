import styled from "@emotion/styled";
import React from "react";
import { colors } from "../../styles";
import { Link } from "react-router-dom";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.5rem;
  background-color: ${colors.orange};
  color: white;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;
const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  &:hover {
    cursor: pointer;
     text-decoration: underline;
  }
`;
function Cats() {
  return (
    <NavbarContainer>
      <NavLinks>
        <NavLink to="/cat-map">Cat Map</NavLink>
        <NavLink to="/cat-profiles">Cat Profiles</NavLink>
        <NavLink to="/success-stories">Success Stories</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
}

export default Cats;
