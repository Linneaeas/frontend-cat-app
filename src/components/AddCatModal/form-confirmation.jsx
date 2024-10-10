import React from "react";

const FormConfirmation = ({ formData }) => {
  return (
    <div>
      <h2>Form Submitted Successfully!</h2>
      <p>Here is a summary of the information you submitted:</p>
      <ul>
        <li>Date: {formData.date}</li>
        <li>Pictures: {formData.pictures}</li>
        <li>Address: {formData.address}</li>
        <li>Age: {formData.age}</li>
        <li>Gender: {formData.gender}</li>
        <li>Fur: {formData.fur}</li>
        <li>Color: {formData.color}</li>
        <li>Police Reported: {formData.policeReported}</li>
        <li>Additional Information: {formData.additionalInformation}</li>
        <li>Reporter Email: {formData.reporterEmail}</li>
        <li>Public Reporter Contacts: {formData.publicReporterContacts}</li>
        <li>Outside or Inside: {formData.outsideOrInside}</li>
        <li>Overall Status: {formData.overallStatus}</li>
        <li>Specific Status: {formData.specificStatus}</li>
      </ul>
      <p>Thank you for your submission!</p>
    </div>
  );
};

export default FormConfirmation;
