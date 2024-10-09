import {
  Input,
  StepContainer,
  RadioGroup,
  RadioLabel,
  PicturesLabel,
  Select,
} from "./step-styles";
const outsideStatuses = [
  "Looks healthy",
  "Not so well taken care of",
  "Injured or for any other reason needs help asap",
];
const insideStatuses = [
  "Looks healthy",
  "Not so well taken care of",
  "Injured or for any other reason needs help asap",
];
const Step1 = ({ formData, setFormData }) => {
  return (
    <StepContainer>
      <h3>1</h3>
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
        Date when the cat was seen/found:
        <Input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
      </label>
      <label>
        Where is the cat now?
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
          Choose the best option for cat that is still outside:
          <Select
            value={formData.outsideStatus}
            onChange={(e) =>
              setFormData({ ...formData, outsideStatus: e.target.value })
            }
          >
            {outsideStatuses.map((outsideStatus, index) => (
              <option key={index} value={outsideStatus}>
                {outsideStatus}
              </option>
            ))}
          </Select>
        </label>
      )}

      {formData.outsideOrInside === "inside" && (
        <label>
          Choose the best option for cat that is inside:
          <Select
            value={formData.insideStatus}
            onChange={(e) =>
              setFormData({ ...formData, insideStatus: e.target.value })
            }
          >
            {insideStatuses.map((insideStatus, index) => (
              <option key={index} value={insideStatus}>
                {insideStatus}
              </option>
            ))}
          </Select>
        </label>
      )}
    </StepContainer>
  );
};

export default Step1;
