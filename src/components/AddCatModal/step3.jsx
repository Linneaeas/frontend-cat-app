import {
  Input,
  StepContainer,
  RadioGroup,
  RadioLabel,
  Select,
} from "./step-styles";

const ages = ["Select a age", "Kitten", "Adult", "Don't know"];

const Step3 = ({ formData, setFormData }) => {
  return (
    <StepContainer>
      <label>
        Age:
        <Select
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
        >
          {ages.map((age, index) => (
            <option key={index} value={age}>
              {age}
            </option>
          ))}
        </Select>
      </label>
      <label>
        Gender:
        <Input
          type="text"
          value={formData.gender}
          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
        />
      </label>
      <label>
        Fur:
        <Input
          type="text"
          value={formData.fur}
          onChange={(e) => setFormData({ ...formData, fur: e.target.value })}
        />
      </label>
      <label>
        Color:
        <Input
          type="text"
          value={formData.color}
          onChange={(e) => setFormData({ ...formData, color: e.target.value })}
        />
      </label>
    </StepContainer>
  );
};

export default Step3;
