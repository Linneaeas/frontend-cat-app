import styled from "@emotion/styled";

export const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap:0.5rem;
  max-height: fit-content;
  
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;
export const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 1rem; 
  margin-bottom: 1rem; 
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
`;

export const PicturesLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const RadioColorGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem; 
`;

export const RadioColorLabel = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 0.2rem;
`;

export const RadioInput = styled.input`
  margin-top:0.2rem;
`;

export const CheckboxGroup = styled.div`
display: flex; 
flex-direction: column;
gap: 0.5rem;
`;

export const CheckboxLabel = styled.label`

`;

export const CheckboxInput = styled.input`
 
`;

export const FormQuestions = styled.p`
font-weight: bold;


`;

export const Form = styled.form`

 
`;
