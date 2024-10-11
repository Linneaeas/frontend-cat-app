import {
  StepContainer,
  RadioGroup,
  RadioLabel,
  Select,
  RadioInput,
  CheckboxGroup,
  CheckboxLabel,
  CheckboxInput,
  FormQuestions,
  Input,
} from "./step-styles";
import UserLocationMap from "../UserLocationMap/user-location-map";
import React, { useState } from "react";

export const Step1 = ({ formData, setFormData }) => {
  const [viewState, setViewState] = useState({
    longitude: 18.0686,
    latitude: 59.3293,
    zoom: 10,
  });

  const handleLocationSelect = (address) => {
    setFormData((prevData) => ({
      ...prevData,
      location: {
        ...prevData.eventInfo,
        address,
        longitude: viewState.longitude,
        latitude: viewState.latitude,
      },
    }));
  };

  return (
    <StepContainer>
      <h4>1. Event Info</h4>
      <label>
        <FormQuestions>Date when the cat was seen/found:</FormQuestions>
        <Input
          type="date"
          value={formData.eventInfo.date}
          onChange={(e) =>
            setFormData({
              ...formData,
              eventInfo: {
                ...formData.eventInfo,
                date: e.target.value,
              },
            })
          }
        />
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
        <p>{formData.eventInfo.address || "No address selected"}</p>
      </label>
    </StepContainer>
  );
};

export default Step1;
