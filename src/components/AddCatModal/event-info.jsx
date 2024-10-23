import { StepContainer, FormQuestions, Input } from "./step-styles";
import UserLocationMap from "../UserLocationMap/user-location-map";
import React, { useState } from "react";

export const EventInfo = ({ formData, setFormData }) => {
  const [viewState, setViewState] = useState({
    longitude: 18.0686,
    latitude: 59.3293,
    zoom: 10,
  });

  const handleLocationSelect = ({ address, coordinates }) => {
    setFormData((prevData) => ({
      ...prevData,
      eventInfo: {
        ...prevData.eventInfo,
        address: address,
        longitude: coordinates.longitude,
        latitude: coordinates.latitude,
      },
    }));
  };

  // Helper function to format coordinates
  const formatCoordinate = (value) => {
    if (typeof value === "number") {
      return value.toFixed(4);
    }
    return null;
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
        onLocationSelect={handleLocationSelect}
        height="300px"
        width="100%"
        showObservedCats={false}
      />

      <label>
        <FormQuestions>Chosen address:</FormQuestions>
        <p>{formData.eventInfo.address || "No address selected"}</p>
        <p>
          Longitude:{" "}
          {formatCoordinate(formData.eventInfo.longitude) ||
            "No longitude selected"}
        </p>
        <p>
          Latitude:{" "}
          {formatCoordinate(formData.eventInfo.latitude) ||
            "No latitude selected"}
        </p>
      </label>
    </StepContainer>
  );
};

export default EventInfo;
