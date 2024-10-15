import {
  StepContainer,
  Select,
  PicturesLabel,
  FormQuestions,
} from "./step-styles";
import React, { useState } from "react";
import { ages, genders, furs, colors, patterns } from "../cat-data";

export const CatAppearance = ({ formData, setFormData }) => {
  const [imageInputs, setImageInputs] = useState([null]); // Array to keep track of image inputs

  const handleFileChange = (index, event) => {
    const files = event.target.files;
    const newPictures = [...formData.catAppearance.pictures];

    if (files.length > 0) {
      const file = files[0]; // Only take the first file
      const reader = new FileReader();
      reader.onloadend = () => {
        newPictures[index] = reader.result; // Save the URL
        setFormData((prevData) => ({
          ...prevData,
          catAppearance: {
            ...prevData.catAppearance,
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
      <h4>3. Appearance</h4>

      <label>
        <FormQuestions>Age:</FormQuestions>
        <Select
          value={formData.catAppearance.age}
          onChange={(e) =>
            setFormData((prevData) => ({
              ...prevData,
              catAppearance: {
                ...prevData.catAppearance,
                age: e.target.value, // Update age
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
          value={formData.catAppearance.gender}
          onChange={(e) =>
            setFormData((prevData) => ({
              ...prevData,
              catAppearance: {
                ...prevData.catAppearance,
                gender: e.target.value, // Update gender
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
          value={formData.catAppearance.fur}
          onChange={(e) =>
            setFormData((prevData) => ({
              ...prevData,
              catAppearance: {
                ...prevData.catAppearance,
                fur: e.target.value, // Update fur
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

      {/* Primary Color */}
      <label>
        <FormQuestions>Primary Color:</FormQuestions>
        <Select
          value={formData.catAppearance.colors.primary}
          onChange={(e) =>
            setFormData((prevData) => ({
              ...prevData,
              catAppearance: {
                ...prevData.catAppearance,
                colors: {
                  ...prevData.catAppearance.colors,
                  primary: e.target.value, // Update primary color
                },
              },
            }))
          }
        >
          {colors.map((color, index) => (
            <option key={index} value={color}>
              {color}
            </option>
          ))}
        </Select>
      </label>

      {/* Secondary Color */}
      <label>
        <FormQuestions>Secondary Color:</FormQuestions>
        <Select
          value={formData.catAppearance.colors.secondary}
          onChange={(e) =>
            setFormData((prevData) => ({
              ...prevData,
              catAppearance: {
                ...prevData.catAppearance,
                colors: {
                  ...prevData.catAppearance.colors,
                  secondary: e.target.value, // Update secondary color
                },
              },
            }))
          }
        >
          {colors.map((color, index) => (
            <option key={index} value={color}>
              {color}
            </option>
          ))}
        </Select>
      </label>

      {/* Tertiary Color */}
      <label>
        <FormQuestions>Tertiary Color:</FormQuestions>
        <Select
          value={formData.catAppearance.colors.tertiary}
          onChange={(e) =>
            setFormData((prevData) => ({
              ...prevData,
              catAppearance: {
                ...prevData.catAppearance,
                colors: {
                  ...prevData.catAppearance.colors,
                  tertiary: e.target.value, // Update tertiary color
                },
              },
            }))
          }
        >
          {colors.map((color, index) => (
            <option key={index} value={color}>
              {color}
            </option>
          ))}
        </Select>
      </label>

      <label>
        <FormQuestions>Pattern:</FormQuestions>
        <Select
          value={formData.catAppearance.pattern}
          onChange={(e) =>
            setFormData((prevData) => ({
              ...prevData,
              catAppearance: {
                ...prevData.catAppearance,
                pattern: e.target.value, // Update pattern
              },
            }))
          }
        >
          {patterns.map((patternColor, index) => (
            <option key={index} value={patternColor}>
              {patternColor}
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
              {formData.catAppearance.pictures[index] && (
                <img
                  src={formData.catAppearance.pictures[index]}
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

export default CatAppearance;
