import { Input, StepContainer, FormQuestions, Select } from "./step-styles";
import UserLocationMap from "../user-location-map";
import { useState } from "react";

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
  const [viewState, setViewState] = useState({
    longitude: 18.0686, // Default to Stockholm
    latitude: 59.3293, // Default to Stockholm
    zoom: 10,
  });

  const handleLocationSelect = (address) => {
    setFormData((prevData) => ({ ...prevData, address }));
  };

  return (
    <StepContainer>
      <h4>1. When & Where</h4>
      <label>
        <FormQuestions>Date when the cat was seen/found:</FormQuestions>
        <Input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
      </label>
      <label>
        <FormQuestions>
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
      <UserLocationMap
        viewState={viewState}
        setViewState={setViewState}
        onLocationSelect={handleLocationSelect}
        height="300px"
        width="100%"
      />

      <label>
        <FormQuestions>Chosen address:</FormQuestions>
        <p>{formData.address || "No address selected"}</p>
      </label>
    </StepContainer>
  );
};

export default Step1;
