import React from "react";
import styled from "@emotion/styled";

const FormConfirmationDiv = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-width: 300em;
`;

const ImagePreview = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin: 10px;
`;

const FormConfirmation = ({ formData }) => {
  return (
    <FormConfirmationDiv>
      <h2>Form Submitted Successfully!</h2>
      <p>A profile has been created!</p>
      <ul>
        <li>
          <span>Pictures:</span>
          <div>
            {formData.catAppearance.pictures &&
              formData.catAppearance.pictures.map((picture, index) => (
                <ImagePreview
                  key={index}
                  src={picture}
                  alt={`Preview ${index + 1}`}
                />
              ))}
          </div>
        </li>
        <li>
          <span>Date:</span> {formData.eventInfo.date}
        </li>
        <li>
          <span>Address: </span>
          {formData.eventInfo.address}
        </li>
        <li>
          <span>Longitude: </span>
          {formData.eventInfo.longitude}
        </li>
        <li>
          <span>Latitude: </span>
          {formData.eventInfo.latitude}
        </li>
        <li>
          <span>Age:</span> {formData.catAppearance.age}
        </li>
        <li>
          <span>Gender:</span> {formData.catAppearance.gender}
        </li>
        <li>
          <span>Fur: </span>
          {formData.catAppearance.fur}
        </li>
        <li>
          <span>Color: </span>
          {formData.catAppearance.colors.primary}
          {formData.catAppearance.colors.secondary}
          {formData.catAppearance.colors.tertiary}
          {formData.catAppearance.pattern}
        </li>
        <li>
          <span>Police Reported: </span>
          {formData.eventInfo.policeReported}
        </li>
        <li>
          <span>Additional Information: </span>{" "}
          {formData.eventInfo.additionalInformation}
        </li>
        <li>
          <span>Phonenr: </span>
          {formData.eventInfo.reporterInfo.phoneNr}
        </li>
        <li>
          <span>Phonenr: </span>
          {formData.eventInfo.reporterInfo.email}
        </li>

        <li>
          <span>Outside or Inside:</span> {formData.catStatus.outsideOrInside}
        </li>
        <li>
          <span>Overall Status: </span>
          {formData.catStatus.overallStatus}
        </li>
        <li>
          <span>Specific Status: </span>
          {formData.catStatus.specificStatuses}
        </li>
      </ul>
      <p>Thank you for your submission!</p>
    </FormConfirmationDiv>
  );
};

export default FormConfirmation;
