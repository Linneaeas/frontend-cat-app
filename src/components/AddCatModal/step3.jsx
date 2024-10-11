import {
  StepContainer,
  Select,
  PicturesLabel,
  FormQuestions,
} from "./step-styles";
import React, { useState } from "react";

const ages = ["Don't know", "Kitten", "Adult"];
const genders = ["Don't know", "Male", "Female"];
const furs = [
  "Don't know",
  "Shorthair",
  "Longhair/Semilonghair",
  "No fur/Sphynx",
];

export const Step3 = ({ formData, setFormData }) => {
  const [imageInputs, setImageInputs] = useState([null]); // Array to keep track of image inputs

  const handleFileChange = (index, event) => {
    const files = event.target.files;
    const newPictures = [...formData.catDetails.pictures];

    if (files.length > 0) {
      const file = files[0]; // Only take the first file
      const reader = new FileReader();
      reader.onloadend = () => {
        newPictures[index] = reader.result; // Save the URL
        setFormData((prevData) => ({
          ...prevData,
          catDetails: {
            ...prevData.catDetails,
            pictures: newPictures,
          },
        }));
      };
      reader.readAsDataURL(file); // Convert to data URL
    }
  };

  const addImageInput = () => {
    setImageInputs((prev) => [...prev, null]); // Add a new input
  };

  return (
    <StepContainer>
      <h4>3. Description & Appearance</h4>

      <label>
        <FormQuestions>Age:</FormQuestions>
        <Select
          value={formData.catDetails.age}
          onChange={(e) =>
            setFormData((prevData) => ({
              ...prevData,
              catDetails: {
                ...prevData.catDetails,
                age: e.target.value, // Update age within catDetails
              },
            }))
          }
        >
          {ages.map((age, index) => (
            <option key={index} value={age}>
              {age}
            </option>
          ))}
        </Select>
      </label>

      <label>
        <FormQuestions>Gender:</FormQuestions>
        <Select
          value={formData.catDetails.gender}
          onChange={(e) =>
            setFormData((prevData) => ({
              ...prevData,
              catDetails: {
                ...prevData.catDetails,
                gender: e.target.value, // Update gender within catDetails
              },
            }))
          }
        >
          {genders.map((gender, index) => (
            <option key={index} value={gender}>
              {gender}
            </option>
          ))}
        </Select>
      </label>

      <label>
        <FormQuestions>Fur:</FormQuestions>
        <Select
          value={formData.catDetails.fur}
          onChange={(e) =>
            setFormData((prevData) => ({
              ...prevData,
              catDetails: {
                ...prevData.catDetails,
                fur: e.target.value, // Update fur within catDetails
              },
            }))
          }
        >
          {furs.map((fur, index) => (
            <option key={index} value={fur}>
              {fur}
            </option>
          ))}
        </Select>
      </label>

      <label>
        <FormQuestions>Pictures:</FormQuestions>
        <PicturesLabel>
          {imageInputs.map((_, index) => (
            <div key={index}>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(index, e)}
              />
              {formData.catDetails.pictures[index] && (
                <img
                  src={formData.catDetails.pictures[index]}
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

export default Step3;
