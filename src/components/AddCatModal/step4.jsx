import {
  StepContainer,
  RadioColorLabel,
  RadioColorGroup,
  RadioInput,
  FormQuestions,
} from "./step-styles";

export const Step4 = ({ formData, setFormData }) => {
  // Array of color options
  const colorOptions = [
    "Sköldpaddsfärgad katt (med eller utan vitt)",
    "Helvit katt",
    "Gråbeige/brunbeige katt (med eller utan maskning, med eller utan vitt)",
    "Creme/Gulbeige/Gul/Orange/Röd/Rödrandig/Röd-vit katt. Vit katt med gula/orange/röda/rödrandiga fläckar.",
    "Grårandig/Brunrandig/Svartprickig/ Brunprickig katt UTAN VITT.",
    "Grårandig/Brunrandig/Svartprickig katt MED VITT. Vit katt med randiga eller prickiga fläckar (ej röd/gul).",
    "Ljusgrå/Grå/Grå med lite vitt/Grå-vit katt. Vit katt med helgrå fläckar.",
    "Brun/Viltfärgad/Brun med lite vitt/Brun-vit katt. Vit katt med helbruna fläckar",
    "Svart katt med lite vitt. Svart-vit katt. Vit katt med svarta fläckar.",
    "Helsvart katt. Svart katt med enstaka vita hårstrån.",
    "Obestämbar färg/Övriga.",
  ];

  return (
    <StepContainer>
      <h4>4. Description & Appearance</h4>
      <label>
        <FormQuestions>Color:</FormQuestions>
        <RadioColorGroup>
          {colorOptions.map((color, index) => (
            <RadioColorLabel key={index}>
              <RadioInput
                type="radio"
                name="color"
                value={color}
                checked={formData.catDetails.color === color}
                onChange={(e) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    catDetails: {
                      ...prevData.catDetails,
                      color: e.target.value, // Update the color within catDetails
                    },
                  }))
                }
              />
              {index + 1}. {color}
            </RadioColorLabel>
          ))}
        </RadioColorGroup>
      </label>
    </StepContainer>
  );
};

export default Step4;
