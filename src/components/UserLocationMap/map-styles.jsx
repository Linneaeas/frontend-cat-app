import styled from "@emotion/styled";
import { colors } from "../../styles";

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
export const HeaderDiv = styled.div`
   display: grid;
  grid-template-columns: 1fr 1fr;
`;
export const SideDiv = styled.div`
 background-color: ${colors.orange};
 color: white;
`;

export const RadioLabel = styled.label`
`;
export const RadioInput = styled.input`
`;
export const CurrentAddressDiv = styled.div`
`;
export const AddressForm = styled.form`
width:100%;
`;
export const AddressInput = styled.input`
height: 1.7rem;
width: 95%;
border:none;
position:relative;
`;
export const SearchButton = styled.button`
background:white;
height:1.7rem;
color: ${colors.orange};
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
