const Step4 = ({ formData, setFormData }) => {
  return (
    <div>
      <label>
        Police reported:
        <input
          type="text"
          value={formData.policeReported}
          onChange={(e) =>
            setFormData({ ...formData, policeReported: e.target.value })
          }
        />
      </label>
      <label>
        Additional information:
        <input
          type="text"
          value={formData.additionalInformation}
          onChange={(e) =>
            setFormData({ ...formData, additionalInformation: e.target.value })
          }
        />
      </label>
      <label>
        Your email:
        <input
          type="text"
          value={formData.reporterEmail}
          onChange={(e) =>
            setFormData({ ...formData, reportedEmail: e.target.value })
          }
        />
      </label>
      <label>
        Public contact information:
        <input
          type="text"
          value={formData.publicReporterContacts}
          onChange={(e) =>
            setFormData({ ...formData, publicReporterContacts: e.target.value })
          }
        />
      </label>
    </div>
  );
};

export default Step4;
