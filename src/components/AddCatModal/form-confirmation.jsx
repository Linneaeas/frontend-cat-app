import React from "react";

const FormConfirmation = ({ formData }) => {
  return (
    <div>
      <h2>Form Submitted Successfully!</h2>
      <p>A profile has been created!</p>
      <ul>
        <li>
          <span>Date:</span> {formData.date}
        </li>
        <li>
          <span>Pictures:</span> {formData.pictures}
        </li>
        <li>
          <span>Address: </span>
          {formData.address}
        </li>
        <li>
          <span>County: </span>
          {formData.county}
        </li>
        <li>
          <span>Age:</span> {formData.age}
        </li>
        <li>
          <span>Gender:</span> {formData.gender}
        </li>
        <li>
          <span>Fur: </span>
          {formData.fur}
        </li>
        <li>
          <span>Color: </span>
          {formData.color}
        </li>
        <li>
          <span>Police Reported: </span>
          {formData.reported}
        </li>
        <li>
          <span>Additional Information: </span> {formData.additionalInformation}
        </li>
        <li>
          <span>Private contact information: </span>
          {formData.reporterPrivateInformation}
        </li>
        <li>
          <span>Public contact information: </span>
          {formData.reporterPublicInformation}
        </li>
        <li>
          <span>Outside or Inside:</span> {formData.outsideOrInside}
        </li>
        <li>
          <span>Overall Status: </span>
          {formData.overallStatus}
        </li>
        <li>
          <span>Specific Status: </span>
          {formData.specificStatus}
        </li>
      </ul>
      <p>Thank you for your submission!</p>
    </div>
  );
};

export default FormConfirmation;
