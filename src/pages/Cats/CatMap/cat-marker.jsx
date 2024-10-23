import React from "react";
import styled from "@emotion/styled";
import HeartAngel from "../../../assets/heartangel.jpg";
import GreenStar from "../../../assets/greenstar.png";
import WarningSign from "../../../assets/warningsign.png";

const CatMarkerContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color:  ${(props) => props.BackgroundColor || "white"};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  position: relative;
  z-index:1;
    ${(props) =>
      props.isDeceased &&
      `
    display: flex;
    justify-content: center;
    align-items: center;
     
  `}
`;

const SymbolImage = styled.img`
  width: 25px; 
  height: 25px; 
  z-index: 1; 
  left: 25px;
  top: 20px;
  position: absolute;
      ${(props) =>
        props.isDeceased &&
        `
     width: 45px;
     height: 45px;
     border-radius: 50%;
      position: static;
  `}
`;

export const CatMarker = ({ BackgroundColor, symbolSrc, isDeceased }) => {
  return (
    <CatMarkerContainer
      BackgroundColor={BackgroundColor}
      isDeceased={isDeceased}
    >
      {symbolSrc && (
        <SymbolImage
          src={symbolSrc}
          alt="Status Symbol"
          isDeceased={isDeceased}
        />
      )}{" "}
    </CatMarkerContainer>
  );
};
