import {
  Input,
  StepContainer,
  RadioGroup,
  RadioLabel,
  Select,
  CheckboxGroup,
  CheckboxLabel,
  CheckboxInput,
  FormQuestions,
} from "./step-styles";

const Step2 = ({ formData, setFormData }) => {
  const outsideOptions = [
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

  const insideOptions = [
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
      ? [...formData[groupName], value]
      : formData[groupName].filter((v) => v !== value);

    setFormData({ ...formData, [groupName]: updatedStatus });
  };

  return (
    <StepContainer>
      <h4>2. Status</h4>

      <label>
        <FormQuestions>Where is the cat now?</FormQuestions>
        <RadioGroup>
          <RadioLabel>
            <input
              type="radio"
              name="outsideOrInside"
              value="outside"
              checked={formData.outsideOrInside === "outside"}
              onChange={(e) =>
                setFormData({ ...formData, outsideOrInside: e.target.value })
              }
            />
            Outside
          </RadioLabel>
          <RadioLabel>
            <input
              type="radio"
              name="outsideOrInside"
              value="inside"
              checked={formData.outsideOrInside === "inside"}
              onChange={(e) =>
                setFormData({ ...formData, outsideOrInside: e.target.value })
              }
            />
            Inside
          </RadioLabel>
        </RadioGroup>
      </label>

      {formData.outsideOrInside === "outside" && (
        <label>
          <FormQuestions>
            Choose options that apply for a cat currently outside:
          </FormQuestions>
          <CheckboxGroup>
            {outsideOptions.map((option) => (
              <CheckboxLabel key={option.value}>
                <CheckboxInput
                  type="checkbox"
                  name="statusOutside"
                  value={option.value}
                  checked={formData.statusOutside.includes(option.value)}
                  onChange={(e) => handleCheckboxChange(e, "statusOutside")}
                />
                {option.label}
              </CheckboxLabel>
            ))}
          </CheckboxGroup>
        </label>
      )}

      {formData.outsideOrInside === "inside" && (
        <label>
          <FormQuestions>
            Choose options that apply for a cat currently inside:
          </FormQuestions>
          <CheckboxGroup>
            {insideOptions.map((option) => (
              <CheckboxLabel key={option.value}>
                <CheckboxInput
                  type="checkbox"
                  name="statusInside"
                  value={option.value}
                  checked={formData.statusInside.includes(option.value)}
                  onChange={(e) => handleCheckboxChange(e, "statusInside")}
                />
                {option.label}
              </CheckboxLabel>
            ))}
          </CheckboxGroup>
        </label>
      )}
    </StepContainer>
  );
};

export default Step2;
