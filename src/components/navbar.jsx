import styled from "@emotion/styled";
import { useState } from "react";
import { colors } from "../styles";
import pawImage from "../assets/paw.png";

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

const NavLink = styled.a`
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

const DropdownLink = styled.a`
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
      <DropdownLink href="#">Ute</DropdownLink>
      <DropdownLink href="#">Alla</DropdownLink>
      <DropdownLink href="#">Intagna</DropdownLink>
      <DropdownLink href="#">Saknade</DropdownLink>
      <DropdownLink href="#">Räddade</DropdownLink>
    </Dropdown>
  );
}

function Navbar() {
  const [isKatterOpen, setIsKatterOpen] = useState(false);

  const toggleKatterDropdown = () => {
    setIsKatterOpen(!isKatterOpen);
  };

  return (
    <NavbarContainer>
      <NavLinks>
        <NavLink onClick={toggleKatterDropdown}>Katter</NavLink>
        <NavLink href="#">Uppdrag</NavLink>
        <NavLink href="#">Jourhem</NavLink>
        <img src={pawImage} alt="PAW Logo" style={{ width: "40px" }} />
      </NavLinks>
      {isKatterOpen && <DropdownKatter />}
    </NavbarContainer>
  );
}
export default Navbar;
