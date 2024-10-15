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
import {
  outsideOrInside,
  overallStatuses,
  specificStatuses,
} from "../cat-data";

export const CatStatus = ({ formData, setFormData }) => {
  const handleCheckboxChange = (e, groupName) => {
    const { value, checked } = e.target;
    const updatedStatus = checked
      ? [...formData.catStatus[groupName], value]
      : formData.catStatus[groupName].filter((v) => v !== value);

    setFormData((prevData) => ({
      ...prevData,
      catStatus: {
        ...prevData.catStatus,
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
                checked={formData.catStatus.outsideOrInside === option.value}
                onChange={(e) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    catStatus: {
                      ...prevData.catStatus,
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
          value={formData.catStatus.overallStatus}
          onChange={(e) =>
            setFormData((prevData) => ({
              ...prevData,
              catStatus: {
                ...prevData.catStatus,
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
          {specificStatuses.map((option) => (
            <CheckboxLabel key={option.value}>
              <CheckboxInput
                type="checkbox"
                name="specificStatuses"
                value={option.value}
                checked={formData.catStatus.specificStatuses.includes(
                  option.value
                )}
                onChange={(e) => handleCheckboxChange(e, "specificStatuses")}
              />
              {option.label}
            </CheckboxLabel>
          ))}
        </CheckboxGroup>
      </label>
    </StepContainer>
  );
};

export default CatStatus;
