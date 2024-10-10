import {
  Input,
  StepContainer,
  RadioGroup,
  RadioLabel,
  Select,
} from "./step-styles";

const reporteds = ["No", "Yes"];

const Step5 = ({ formData, setFormData }) => {
  return (
    <StepContainer>
      <h4>5. Information</h4>
      <label>
        Police reported:
        <Select
          value={formData.reported}
          onChange={(e) =>
            setFormData({ ...formData, reported: e.target.value })
          }
        >
          {reporteds.map((reported, index) => (
            <option key={index} value={reported}>
              {reported}
            </option>
          ))}
        </Select>
      </label>
      <label>
        Additional information:
        <Input
          type="text"
          value={formData.additionalInformation}
          onChange={(e) =>
            setFormData({ ...formData, additionalInformation: e.target.value })
          }
        />
      </label>
      <label>
        Your contacts for shelters, organizations and Sverak, phone and/or
        email:
        <Input
          type="text"
          value={formData.reporterPrivateInformation}
          onChange={(e) =>
            setFormData({
              ...formData,
              reporterPrivateInformation: e.target.value,
            })
          }
        />
      </label>
      <label>
        Public contact information, phone and/or email:
        <Input
          type="text"
          value={formData.reporterPublicInformation}
          onChange={(e) =>
            setFormData({
              ...formData,
              reporterPublicInformation: e.target.value,
            })
          }
        />
      </label>
    </StepContainer>
  );
};

export default Step5;
