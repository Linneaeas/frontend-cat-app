import { Input, StepContainer, RadioGroup, RadioLabel } from "./step-styles";

const Step1 = ({ formData, setFormData }) => {
  return (
    <StepContainer>
      <label>
        Missing or Seen:
        <RadioGroup>
          <RadioLabel>
            <input
              type="radio"
              name="missingOrSeen"
              value="missing"
              checked={formData.missingOrSeen === "missing"}
              onChange={(e) =>
                setFormData({ ...formData, missingOrSeen: e.target.value })
              }
            />
            Missing
          </RadioLabel>
          <RadioLabel>
            <input
              type="radio"
              name="missingOrSeen"
              value="seen"
              checked={formData.missingOrSeen === "seen"}
              onChange={(e) =>
                setFormData({ ...formData, missingOrSeen: e.target.value })
              }
            />
            Seen
          </RadioLabel>
        </RadioGroup>
      </label>
      <label>
        Headline:
        <Input
          type="text"
          value={formData.headline}
          onChange={(e) =>
            setFormData({ ...formData, headline: e.target.value })
          }
        />
      </label>
      <label>
        Date:
        <Input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
      </label>
      <label>
        Pictures:
        <Input
          type="text"
          value={formData.pictures}
          onChange={(e) =>
            setFormData({ ...formData, pictures: e.target.value })
          }
        />
      </label>
    </StepContainer>
  );
};

export default Step1;
