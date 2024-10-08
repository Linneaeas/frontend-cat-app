import styled from "@emotion/styled";
import React from "react";
import { colors } from "../styles";
import pawImage from "../assets/paw.png";
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
  font-size: 1.1rem;
  &:hover {
    cursor: pointer;
     text-decoration: underline;
  }
`;

function Navbar({ onLoginClick }) {
  return (
    <NavbarContainer>
      <NavLinks>
        <NavLink to="/katter">Katter</NavLink>
        <NavLink to="/uppdrag">Uppdrag</NavLink>
        <NavLink to="/jourhem">Jourhem</NavLink>
      </NavLinks>

      <button onClick={onLoginClick}> Login</button>
      <img src={pawImage} alt="PAW Logo" style={{ width: "40px" }} />
    </NavbarContainer>
  );
}
export default Navbar;
