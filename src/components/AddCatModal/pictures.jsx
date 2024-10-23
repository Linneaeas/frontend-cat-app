import {
  StepContainer,
  Select,
  PicturesLabel,
  FormQuestions,
} from "./step-styles";
import React, { useState } from "react";

export const Pictures = ({ formData, setFormData }) => {
  const [imageInputs, setImageInputs] = useState([null]);

  const handleFileChange = (index, event, isProfilePicture = false) => {
    const files = event.target.files;

    if (files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        if (isProfilePicture) {
          // Handle Profile Picture separately
          setFormData((prevData) => ({
            ...prevData,
            catAppearance: {
              ...prevData.catAppearance,
              profilePicture: reader.result, // update profile picture
            },
          }));
        } else {
          // Handle regular pictures
          const newPictures = [...formData.catAppearance.pictures];
          newPictures[index] = reader.result;
          setFormData((prevData) => ({
            ...prevData,
            catAppearance: {
              ...prevData.catAppearance,
              pictures: newPictures,
            },
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const addImageInput = () => {
    setImageInputs((prev) => [...prev, null]);
  };

  return (
    <StepContainer>
      <h4>4. Pictures</h4>

      {/* Profile Picture */}
      <label>
        <FormQuestions>Profile picture</FormQuestions>
        <PicturesLabel>
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(0, e, true)} // true indicates it's the profile picture
            />
            {formData.catAppearance.profilePicture && (
              <img
                src={formData.catAppearance.profilePicture} // Display profile picture
                alt="Profile Preview"
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  margin: "10px",
                }}
              />
            )}
          </div>
        </PicturesLabel>
      </label>

      {/* Other Pictures */}
      <label>
        <FormQuestions>Pictures:</FormQuestions>
        <PicturesLabel>
          {imageInputs.map((_, index) => (
            <div key={index}>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(index, e)} // regular pictures
              />
              {formData.catAppearance.pictures[index] && (
                <img
                  src={formData.catAppearance.pictures[index]} // Display other pictures
                  alt={`Preview ${index + 1}`}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    margin: "10px",
                  }}
                />
              )}
            </div>
          ))}
        </PicturesLabel>
        <button type="button" onClick={addImageInput}>
          +
        </button>
      </label>
    </StepContainer>
  );
};

export default Pictures;
