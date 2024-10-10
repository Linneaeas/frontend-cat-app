import styled from "@emotion/styled";
import React, { useState } from "react";
import { colors } from "../styles";
import pawImage from "../assets/paw.png";
import { Link } from "react-router-dom";

const NavbarContainer = styled.nav`
  display: flex;
   flex-direction:column;
  padding: 0.5rem 1rem;
  gap: 1rem;
  background-color: ${colors.orange};
  color: white;
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
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

const Dropdown = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const DropdownLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

function DropdownKatter() {
  return (
    <Dropdown>
      <DropdownLink to="/cat-map">Cat Map</DropdownLink>
      <DropdownLink to="/cat-profiles">Cat Profiles</DropdownLink>
      <DropdownLink to="/success-stories">Success Stories</DropdownLink>
    </Dropdown>
  );
}

function Navbar({ onLoginClick }) {
  const [isKatterOpen, setIsKatterOpen] = useState(false);
  const toggleKatterDropdown = () => {
    setIsKatterOpen(!isKatterOpen);
  };

  return (
    <NavbarContainer>
      <NavLinks>
        <NavLink onClick={toggleKatterDropdown}>Cats</NavLink>
        <NavLink to="/missions">Missions</NavLink>
        <NavLink to="/foster-home">Foster home</NavLink>
        <button onClick={onLoginClick}> Login</button>
        <img src={pawImage} alt="PAW Logo" style={{ width: "40px" }} />
      </NavLinks>
      {isKatterOpen && <DropdownKatter />}
    </NavbarContainer>
  );
}
export default Navbar;
