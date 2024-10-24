import styled from "@emotion/styled";
import { colors } from "../../styles";

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
export const HeaderDiv = styled.div`
   display: flex;
   flex-direction:column;
   gap: 10px;
   background-color: ${colors.orange};
   padding:10px;
   color: white;
`;
export const FirstRowDiv = styled.div`
display: flex;
justify-content:space-evenly;
font-size: 14px;
`;
export const SecondRowDiv = styled.div`
display: flex;
justify-content:center;
font-size: 14px;
max-width:100%;
`;

export const RadioLabel = styled.label`
`;
export const RadioInput = styled.input`
`;
export const CurrentAddressDiv = styled.div`
`;
export const AddressForm = styled.form`
`;
export const AddressInput = styled.input`
height: 1.7rem;
border:none;
background-color: ${colors.orangeLight};
border-radius: 50px;
position:relative;
font-size: 12px;
width: 17rem;
`;

export const SuggestionsUl = styled.ul`
position:absolute;
z-index:100;
 list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ccc;
  max-height: 150px;
 overflowY: auto;
 background-color: white;
 color: black;
`;
export const SuggestionsLi = styled.li`
padding: 8px;
cursor: pointer;
background-color: white;
border-bottom: 1px solid #eee;
`;
