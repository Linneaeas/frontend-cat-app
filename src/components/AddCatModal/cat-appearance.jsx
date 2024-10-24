import {
  StepContainer,
  Select,
  PicturesLabel,
  FormQuestions,
} from "./step-styles";
import React, { useState } from "react";
import { ages, genders, furs, colors, patterns } from "../cat-data";

export const CatAppearance = ({ formData, setFormData }) => {
  return (
    <StepContainer>
      <h4>3/5. Appearance</h4>

      <label>
        <FormQuestions>Age:</FormQuestions>
        <Select
          value={formData.catAppearance.age}
          onChange={(e) =>
            setFormData((prevData) => ({
              ...prevData,
              catAppearance: {
                ...prevData.catAppearance,
                age: e.target.value,
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
                gender: e.target.value,
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
                fur: e.target.value,
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
                  primary: e.target.value,
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
                  secondary: e.target.value,
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
                  tertiary: e.target.value,
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
                pattern: e.target.value,
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
    </StepContainer>
  );
};

export default CatAppearance;
