import styled from "@emotion/styled";
import { colors } from "../styles";
import pawImage from "../assets/paw.png";

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
const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  &:hover {
    cursor: pointer;
     text-decoration: underline;
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      <NavLinks>
        <NavLink href="#">Katter</NavLink>
        <NavLink href="#">Uppdrag</NavLink>
        <NavLink href="#">Jourhem</NavLink>
      </NavLinks>
      <img src={pawImage} alt="PAW Logo" style={{ width: "40px" }} />
    </NavbarContainer>
  );
}
export default Navbar;
