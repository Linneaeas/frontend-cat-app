import React from "react";
import styled from "@emotion/styled";
import ChattisLogo from "../../../assets/ChattisLogo.jpeg";

const CatMarkerContainer = styled.div`
 display: flex;
 justify-content: center;
    align-items: center;
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
  z-index: 10; 
  left: 25px;
  top: 20px;
  position: absolute;
      ${(props) =>
        props.isDeceased &&
        `
     width: 43px;
     height: 43px;
     border-radius: 50%;
      position: static;
  `}
`;

const ProfilePicture = styled.img`
  width: 43px; 
  height: 43px; 
  z-index: 5; 
   border-radius: 50%;

  `;

export const CatMarker = ({ BackgroundColor, symbolSrc, isDeceased }) => {
  return (
    <CatMarkerContainer
      BackgroundColor={BackgroundColor}
      isDeceased={isDeceased}
    >
      {!isDeceased && (
        <ProfilePicture
          src={ChattisLogo}
          alt="Profile pic"
          isDeceased={isDeceased}
        />
      )}
      {symbolSrc && (
        <SymbolImage
          src={symbolSrc}
          alt="Status Symbol"
          isDeceased={isDeceased}
        />
      )}
    </CatMarkerContainer>
  );
};
