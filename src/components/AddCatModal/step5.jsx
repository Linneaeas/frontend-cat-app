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
      <h3>5</h3>
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
        Your email:
        <Input
          type="email"
          value={formData.reporterEmail}
          onChange={(e) =>
            setFormData({ ...formData, reporterEmail: e.target.value })
          }
        />
      </label>
      <label>
        Public contact information:
        <Input
          type="text"
          value={formData.publicReporterContacts}
          onChange={(e) =>
            setFormData({ ...formData, publicReporterContacts: e.target.value })
          }
        />
      </label>
    </StepContainer>
  );
};

export default Step5;
