import { StepContainer, FormQuestions, Input } from "./step-styles";
import UserLocationMap from "../UserLocationMap/user-location-map";
import React, { useState } from "react";

export const EventInfo = ({ formData, setFormData }) => {
  const [viewState, setViewState] = useState({
    longitude: 18.0686,
    latitude: 59.3293,
    zoom: 10,
  });

  const handleLocationSelect = (address, longitude, latitude) => {
    setFormData((prevData) => ({
      ...prevData,
      eventInfo: {
        ...prevData.eventInfo,
        address,
        longitude,
        latitude,
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
        <p>{formData.eventInfo.longitude || "No lo selected"}</p>
        <p>{formData.eventInfo.latitude || "No la selected"}</p>
      </label>
    </StepContainer>
  );
};

export default EventInfo;
