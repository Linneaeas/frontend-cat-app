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
            {formData.catDetails.pictures &&
              formData.catDetails.pictures.map((picture, index) => (
                <ImagePreview
                  key={index}
                  src={picture}
                  alt={`Preview ${index + 1}`}
                />
              ))}
          </div>
        </li>
        <li>
          <span>Date:</span> {formData.reporterInfo.date}
        </li>
        <li>
          <span>Address: </span>
          {formData.location.address}
        </li>
        <li>
          <span>Longitude: </span>
          {formData.location.longitude}
        </li>
        <li>
          <span>Latitude: </span>
          {formData.location.latitude}
        </li>
        <li>
          <span>Age:</span> {formData.catDetails.age}
        </li>
        <li>
          <span>Gender:</span> {formData.catDetails.gender}
        </li>
        <li>
          <span>Fur: </span>
          {formData.catDetails.fur}
        </li>
        <li>
          <span>Color: </span>
          {formData.catDetails.color}
        </li>
        <li>
          <span>Police Reported: </span>
          {formData.reporterInfo.policeReported}
        </li>
        <li>
          <span>Additional Information: </span>{" "}
          {formData.reporterInfo.additionalInformation}
        </li>
        <li>
          <span>Private contact information: </span>
          {formData.reporterInfo.privateInformation}
        </li>
        <li>
          <span>Public contact information: </span>
          {formData.reporterInfo.publicInformation}
        </li>
        <li>
          <span>Outside or Inside:</span> {formData.catDetails.outsideOrInside}
        </li>
        <li>
          <span>Overall Status: </span>
          {formData.catDetails.overallStatus}
        </li>
        <li>
          <span>Specific Status: </span>
          {formData.catDetails.specificStatus}
        </li>
      </ul>
      <p>Thank you for your submission!</p>
    </FormConfirmationDiv>
  );
};

export default FormConfirmation;
