import {
  Input,
  StepContainer,
  RadioGroup,
  RadioLabel,
  Select,
} from "./step-styles";

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

const Step2 = ({ formData, setFormData }) => {
  return (
    <StepContainer>
      <h3>2</h3>
      <label>
        Where was the cat seen/found, Select county:
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
        Choose another county where the ad should be visable(not required):
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
