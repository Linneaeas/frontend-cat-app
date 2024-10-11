import {
  StepContainer,
  RadioGroup,
  RadioLabel,
  Select,
  RadioInput,
  CheckboxGroup,
  CheckboxLabel,
  CheckboxInput,
  FormQuestions,
} from "./step-styles";

export const Step2 = ({ formData, setFormData }) => {
  const outsideOrInside = [
    { label: "Inside", value: "Inside" },
    { label: "Outside", value: "Outside" },
  ];

  const overallStatuses = [
    "Healthy",
    "Not so healthy",
    "Need help asap",
    "Deceased",
  ];

  const specificStatus = [
    { label: "Appears healthy and taken care of", value: "healthy" },
    { label: "Doesn't seem well taken care of", value: "notWellCared" },
    { label: "In need of help asap", value: "needHelp" },
    { label: "Contact seeking", value: "contactSeeking" },
    { label: "Hungry", value: "hungry" },
    { label: "Alot of knots in the fur", value: "knots" },
    { label: "Limping", value: "limping" },
    { label: "Skinny", value: "skinny" },
    { label: "Healing wounds", value: "healingWounds" },
    { label: "Open wounds", value: "openWounds" },
    { label: "Seriously injured", value: "seriouslyInjured" },
  ];

  const handleCheckboxChange = (e, groupName) => {
    const { value, checked } = e.target;
    const updatedStatus = checked
      ? [...formData.catDetails[groupName], value]
      : formData.catDetails[groupName].filter((v) => v !== value);

    setFormData((prevData) => ({
      ...prevData,
      catDetails: {
        ...prevData.catDetails,
        [groupName]: updatedStatus,
      },
    }));
  };

  return (
    <StepContainer>
      <h4>2. Status</h4>

      <label>
        <FormQuestions>Where is the cat now?</FormQuestions>
        <RadioGroup>
          {outsideOrInside.map((option) => (
            <RadioLabel key={option.value}>
              <RadioInput
                type="radio"
                name="outsideOrInside"
                value={option.value}
                checked={formData.catDetails.outsideOrInside === option.value}
                onChange={(e) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    catDetails: {
                      ...prevData.catDetails,
                      outsideOrInside: e.target.value, // Update the outsideOrInside property
                    },
                  }))
                }
              />
              {option.label}
            </RadioLabel>
          ))}
        </RadioGroup>
      </label>

      <label>
        <FormQuestions>
          Choose the option that best describes the cat's overall state:
        </FormQuestions>
        <Select
          value={formData.catDetails.overallStatus}
          onChange={(e) =>
            setFormData((prevData) => ({
              ...prevData,
              catDetails: {
                ...prevData.catDetails,
                overallStatus: e.target.value, // Update overallStatus within catDetails
              },
            }))
          }
        >
          {overallStatuses.map((overallStatus, index) => (
            <option key={index} value={overallStatus}>
              {overallStatus}
            </option>
          ))}
        </Select>
      </label>

      <label>
        <FormQuestions>
          Choose the options that apply for the cat:
        </FormQuestions>
        <CheckboxGroup>
          {specificStatus.map((option) => (
            <CheckboxLabel key={option.value}>
              <CheckboxInput
                type="checkbox"
                name="specificStatus"
                value={option.value}
                checked={formData.catDetails.specificStatus.includes(
                  option.value
                )}
                onChange={(e) => handleCheckboxChange(e, "specificStatus")}
              />
              {option.label}
            </CheckboxLabel>
          ))}
        </CheckboxGroup>
      </label>
    </StepContainer>
  );
};

export default Step2;
