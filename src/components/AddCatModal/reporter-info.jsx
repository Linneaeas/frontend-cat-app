import { Input, StepContainer, Select } from "./step-styles";
import React, { useState } from "react";
import { policeReported } from "../cat-data";

export const ReporterInfo = ({ formData, setFormData }) => {
  return (
    <StepContainer>
      <h4>6. Information</h4>

      <label>
        Police reported:
        <Select
          value={formData.eventInfo.policeReported}
          onChange={(e) =>
            setFormData((prevData) => ({
              ...prevData,
              eventInfo: {
                ...prevData.eventInfo,
                policeReported: e.target.value,
              },
            }))
          }
        >
          {policeReported.map((policeReported, index) => (
            <option key={index} value={policeReported}>
              {policeReported}
            </option>
          ))}
        </Select>
      </label>

      <label>
        Additional information:
        <Input
          type="text"
          value={formData.eventInfo.additionalInformation}
          onChange={(e) =>
            setFormData((prevData) => ({
              ...prevData,
              eventInfo: {
                ...prevData.eventInfo,
                additionalInformation: e.target.value,
              },
            }))
          }
        />
      </label>

      <label>
        Your contacts: phone number:
        <Input
          type="text"
          value={formData.eventInfo.reporterInfo.phoneNr}
          onChange={(e) =>
            setFormData((prevData) => ({
              ...prevData,
              eventInfo: {
                ...prevData.eventInfo,
                reporterInfo: {
                  ...prevData.eventInfo.reporterInfo,
                  phoneNr: e.target.value, // Correctly updating phoneNr as a string
                },
              },
            }))
          }
        />
      </label>

      <label>
        Your contacts: email:
        <Input
          type="text"
          value={formData.eventInfo.reporterInfo.email}
          onChange={(e) =>
            setFormData((prevData) => ({
              ...prevData,
              eventInfo: {
                ...prevData.eventInfo,
                reporterInfo: {
                  ...prevData.eventInfo.reporterInfo,
                  email: e.target.value,
                },
              },
            }))
          }
        />
      </label>
    </StepContainer>
  );
};

export default ReporterInfo;
