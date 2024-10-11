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
justify-content:center;
gap:2rem;
`;
export const SecondRowDiv = styled.div`
display: flex;
justify-content:center;
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
width: 20rem;
border:none;
background-color: ${colors.orangeLight};
border-radius: 50px;
position:relative;
`;
export const SearchButton = styled.button`
height:1.7rem;
aspect-ratio:1;
border-radius: 100px;
background-color: ${colors.orangeLight};
color: ${colors.orange};
margin-left: 1px;
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
