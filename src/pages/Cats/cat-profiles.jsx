import React from "react";
import styled from "@emotion/styled";
import { colors } from "../../styles";
import ChattisLogo from "../../assets/ChattisLogo.jpeg";

const ProfileContainer = styled.div`
  display: flex;
  margin: 0.5rem;
  flex-direction: column;
  border: 3px solid  ${colors.orange};
  border-radius: 10px;
  gap:1rem;
`;
const HeaderContainer = styled.div`
  display: flex;
  gap:1rem;
  margin-top: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;

`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StatusRow = styled.div`
display: flex;
gap:0.2rem;`;

const UppdragContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InfoHeadline = styled.h3`
font-size: 14px;
font-weight: bold;
color:  ${colors.orange};`;

const InfoText = styled.p`
font-size: 14px;
`;

const MissionList = styled.ul`
font-size: 14px;
`;

const ProfileBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.5rem;
  background-color: ${colors.orangeLight};

  
`;

function CatProfiles() {
  return (
    <ProfileContainer>
      <HeaderContainer>
        <img
          src={ChattisLogo}
          alt=" Profile pic"
          style={{
            width: "120px",
            borderRadius: "100px",
            border: "7px solid red",
          }}
        />
        <ContentContainer>
          <h2>Vuxen, Korthårig, Mölndal</h2>
          <StatusRow>
            <InfoHeadline> Status:</InfoHeadline>{" "}
            <InfoText>Ute, Hungrig, Kontaktsökande</InfoText>
          </StatusRow>
          <InfoHeadline> Uppdrag:</InfoHeadline>{" "}
          <UppdragContainer>
            <MissionList>
              <h4>Behövs:</h4>
              <li>Ägare sökes</li>
            </MissionList>
            <MissionList>
              <h4>Pågående:</h4>
              <li>
                Chipavläsning <span>Jane</span>
              </li>
            </MissionList>
          </UppdragContainer>
        </ContentContainer>
      </HeaderContainer>
      <ProfileBar>
        <p>Tidslinje</p>
        <p>Uppdrag</p>
        <p>Platser</p>
        <p>Bilder</p>
        <p>Annons</p>
        <p>Matcha</p>
      </ProfileBar>
    </ProfileContainer>
  );
}

export default CatProfiles;
