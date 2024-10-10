import {
  Input,
  StepContainer,
  RadioGroup,
  RadioLabel,
  Select,
  PicturesLabel,
  FormQuestions,
} from "./step-styles";

const ages = ["Don't know", "Kitten", "Adult"];
const genders = ["Don't know", "Male", "Female"];
const furs = [
  "Don't know",
  "Shorthair",
  "Longhair/Semilonghair",
  "No fur/Sphynx",
];

const Step3 = ({ formData, setFormData }) => {
  return (
    <StepContainer>
      <h4>3. Description & Appearance</h4>
      <label>
        <FormQuestions>Age:</FormQuestions>
        <Select
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
        >
          {ages.map((age, index) => (
            <option key={index} value={age}>
              {age}
            </option>
          ))}
        </Select>
      </label>
      <label>
        <FormQuestions>Gender:</FormQuestions>
        <Select
          value={formData.gender}
          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
        >
          {genders.map((gender, index) => (
            <option key={index} value={gender}>
              {gender}
            </option>
          ))}
        </Select>
      </label>
      <label>
        <FormQuestions>Fur:</FormQuestions>
        <Select
          value={formData.fur}
          onChange={(e) => setFormData({ ...formData, fur: e.target.value })}
        >
          {furs.map((fur, index) => (
            <option key={index} value={fur}>
              {fur}
            </option>
          ))}
        </Select>
      </label>
      <PicturesLabel>
        <FormQuestions>Pictures:</FormQuestions>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const files = e.target.files;
            setFormData({ ...formData, pictures: files });
            // const fileUrls = Array.from(files).map(file => URL.createObjectURL(file));
            // setFormData({ ...formData, pictures: fileUrls });
          }}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const files = e.target.files;
            setFormData({ ...formData, pictures: files });
            // const fileUrls = Array.from(files).map(file => URL.createObjectURL(file));
            // setFormData({ ...formData, pictures: fileUrls });
          }}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const files = e.target.files;
            setFormData({ ...formData, pictures: files });
            // const fileUrls = Array.from(files).map(file => URL.createObjectURL(file));
            // setFormData({ ...formData, pictures: fileUrls });
          }}
        />
      </PicturesLabel>
    </StepContainer>
  );
};

export default Step3;
