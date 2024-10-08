const Step5 = ({ formData, setFormData }) => {
  return (
    <div>
      <label>
        Choose the best option for cat that is still outside:
        <input
          type="text"
          value={formData.statusOutside}
          onChange={(e) =>
            setFormData({ ...formData, statusOutside: e.target.value })
          }
        />
      </label>
      <label>
        Choose the best option for cat that is inside:
        <input
          type="text"
          value={formData.statusInside}
          onChange={(e) =>
            setFormData({ ...formData, statusInside: e.target.value })
          }
        />
      </label>
    </div>
  );
};

export default Step5;
