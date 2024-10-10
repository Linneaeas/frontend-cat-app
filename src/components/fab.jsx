import styled from "@emotion/styled";
import { colors } from "../styles";

const FabContainer = styled.button`
  position: fixed;
  bottom: 50px;
  right: 20px;
  height: 56px; 
  aspect-ratio: 1;
  border-radius: 50%; 
  background-color: ${colors.orange}; 
  color: white; 
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); 
  font-size: 40px; 
 
`;

function Fab({ onClick }) {
  return (
    <FabContainer onClick={onClick}>
      <p>+</p>
    </FabContainer>
  );
}

export default Fab;
