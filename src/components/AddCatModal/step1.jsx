import {
  Input,
  StepContainer,
  RadioGroup,
  RadioLabel,
  PicturesLabel,
  Select,
  FormQuestions,
} from "./step-styles";
import { globalStyles } from "../../styles";

const Step1 = ({ formData, setFormData }) => {
  return (
    <StepContainer>
      <h4>1. When & Where</h4>
      <label>
        <FormQuestions> Date when the cat was seen/found:</FormQuestions>
        <Input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
      </label>
      <label>
        <FormQuestions>Choose location on map:</FormQuestions>
        <Input
          type="text"
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
        />
      </label>
    </StepContainer>
  );
};

export default Step1;
