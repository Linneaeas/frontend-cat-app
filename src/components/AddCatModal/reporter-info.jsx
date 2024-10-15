import { Input, StepContainer, Select } from "./step-styles";
import React, { useState } from "react";

const reporteds = ["No", "Yes"];

export const ReporterInfo = ({ formData, setFormData }) => {
  return (
    <StepContainer>
      <h4>5. Information</h4>

      <label>
        Police reported:
        <Select
          value={formData.reporterInfo.policeReported}
          onChange={(e) =>
            setFormData((prevData) => ({
              ...prevData,
              reporterInfo: {
                ...prevData.reporterInfo,
                policeReported: e.target.value, // Update reported within reporter
              },
            }))
          }
        >
          {reporteds.map((policeReported, index) => (
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
          value={formData.reporterInfo.additionalInformation}
          onChange={(e) =>
            setFormData((prevData) => ({
              ...prevData,
              reporterInfo: {
                ...prevData.reporterInfo,
                additionalInformation: e.target.value, // Update additionalInformation within reporter
              },
            }))
          }
        />
      </label>

      <label>
        Your contacts for shelters, organizations and Sverak, phone and/or
        email:
        <Input
          type="text"
          value={formData.reporterInfo.privateInformation}
          onChange={(e) =>
            setFormData((prevData) => ({
              ...prevData,
              reporterInfo: {
                ...prevData.reporterInfo,
                privateInformation: e.target.value, // Update reporterPrivateInformation within reporter
              },
            }))
          }
        />
      </label>

      <label>
        Public contact information, phone and/or email:
        <Input
          type="text"
          value={formData.reporterInfo.publicInformation}
          onChange={(e) =>
            setFormData((prevData) => ({
              ...prevData,
              reporterInfo: {
                ...prevData.reporterInfo,
                publicInformation: e.target.value, // Update reporterPublicInformation within reporter
              },
            }))
          }
        />
      </label>
    </StepContainer>
  );
};

export default ReporterInfo;
