import { Input, StepContainer, FormQuestions, Select } from "./step-styles";
const counties = [
  "Select a county",
  "Blekinge län",
  "Dalarnas län",
  "Gotlands län",
  "Gävleborgs län",
  "Hallands län",
  "Jämtlands län",
  "Jönköpings län",
  "Kalmar län",
  "Kronobergs län",
  "Norrbottens län",
  "Skåne län",
  "Stockholms län",
  "Södermanlands län",
  "Uppsala län",
  "Värmlands län",
  "Västerbottens län",
  "Västernorrlands län",
  "Västra götalands län",
  "Örebro län",
  "Östergötlands län",
];
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
        <FormQuestions>
          {" "}
          Where was the cat seen/found, Select county:
        </FormQuestions>
        <Select
          value={formData.county}
          onChange={(e) => setFormData({ ...formData, county: e.target.value })}
        >
          {counties.map((county, index) => (
            <option key={index} value={county}>
              {county}
            </option>
          ))}
        </Select>
      </label>
      <label>
        <FormQuestions>Type address and choose location on map:</FormQuestions>
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
