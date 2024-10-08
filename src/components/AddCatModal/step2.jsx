import {
  Input,
  StepContainer,
  RadioGroup,
  RadioLabel,
  Select,
} from "./step-styles";

const counties = [
  "Select a county",
  "Alameda",
  "Los Angeles",
  "San Diego",
  "Santa Clara",
  "San Francisco",
  "Orange",
  "Sacramento",
  "Riverside",
  "Fresno",
  "Ventura",
];

const Step2 = ({ formData, setFormData }) => {
  return (
    <StepContainer>
      <label>
        County:
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
        Another county:
        <Select
          value={formData.anotherCounty}
          onChange={(e) =>
            setFormData({ ...formData, anotherCounty: e.target.value })
          }
        >
          {counties.map((county, index) => (
            <option key={index} value={county}>
              {county}
            </option>
          ))}
        </Select>
      </label>
      <label>
        Address:
        <Input
          type="address"
          value={formData.textedAddress}
          onChange={(e) =>
            setFormData({ ...formData, textedAddress: e.target.value })
          }
        />
      </label>
      <label>
        Choose location on map:
        <Input
          type="text"
          value={formData.mapAddress}
          onChange={(e) =>
            setFormData({ ...formData, mapAddress: e.target.value })
          }
        />
      </label>
    </StepContainer>
  );
};

export default Step2;
