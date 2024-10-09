import {
  Input,
  StepContainer,
  RadioGroup,
  RadioLabel,
  Select,
  RadioColorLabel,
  RadioColorGroup,
  RadioInput,
} from "./step-styles";

const Step4 = ({ formData, setFormData }) => {
  return (
    <StepContainer>
      <h3>4</h3>

      <label>
        Color:
        <RadioColorGroup>
          <RadioColorLabel>
            <RadioInput
              type="radio"
              name="color"
              value="Kategori 1. Sköldpaddsfärgad katt (med eller utan vitt)"
              checked={
                formData.color ===
                "Kategori 1. Sköldpaddsfärgad katt (med eller utan vitt)"
              }
              onChange={(e) =>
                setFormData({ ...formData, color: e.target.value })
              }
            />
            1. Sköldpaddsfärgad katt (med eller utan vitt)
          </RadioColorLabel>
          <RadioColorLabel>
            <RadioInput
              type="radio"
              name="color"
              value="Kategori 2. Helvit katt"
              checked={formData.color === "Kategori 2. Helvit katt"}
              onChange={(e) =>
                setFormData({ ...formData, color: e.target.value })
              }
            />
            2. Helvit katt
          </RadioColorLabel>
          <RadioColorLabel>
            <RadioInput
              type="radio"
              name="color"
              value="Kategori 3. Gråbeige/brunbeige katt (med eller utan maskning, med eller utan vitt)"
              checked={
                formData.color ===
                "Kategori 3. Gråbeige/brunbeige katt (med eller utan maskning, med eller utan vitt)"
              }
              onChange={(e) =>
                setFormData({ ...formData, color: e.target.value })
              }
            />
            3. Gråbeige/brunbeige katt (med eller utan maskning, med eller utan
            vitt)
          </RadioColorLabel>
          <RadioColorLabel>
            <RadioInput
              type="radio"
              name="color"
              value="Kategori 4. Creme/Gulbeige/Gul/Orange/Röd/Rödrandig/Röd-vit katt. Vit katt med gula/orange/röda/rödrandiga fläckar."
              checked={
                formData.color ===
                "Kategori 4. Creme/Gulbeige/Gul/Orange/Röd/Rödrandig/Röd-vit katt. Vit katt med gula/orange/röda/rödrandiga fläckar."
              }
              onChange={(e) =>
                setFormData({ ...formData, color: e.target.value })
              }
            />
            4. Creme/Gulbeige/Gul/Orange/Röd/Rödrandig/Röd-vit katt. Vit katt
            med gula/orange/röda/rödrandiga fläckar.
          </RadioColorLabel>
          <RadioColorLabel>
            <RadioInput
              type="radio"
              name="color"
              value="Kategori 5. Grårandig/Brunrandig/Svartprickig/ Brunprickig katt UTAN VITT."
              checked={
                formData.color ===
                "Kategori 5. Grårandig/Brunrandig/Svartprickig/ Brunprickig katt UTAN VITT."
              }
              onChange={(e) =>
                setFormData({ ...formData, color: e.target.value })
              }
            />
            5. Grårandig/Brunrandig/Svartprickig/ Brunprickig katt UTAN VITT.
          </RadioColorLabel>
          <RadioColorLabel>
            <RadioInput
              type="radio"
              name="color"
              value="Kategori 6. Grårandig/Brunrandig/Svartprickig katt MED VITT. Vit katt med randiga eller prickiga fläckar (ej röd/gul)."
              checked={
                formData.color ===
                "Kategori 6. Grårandig/Brunrandig/Svartprickig katt MED VITT. Vit katt med randiga eller prickiga fläckar (ej röd/gul)."
              }
              onChange={(e) =>
                setFormData({ ...formData, color: e.target.value })
              }
            />
            6. Grårandig/Brunrandig/Svartprickig katt MED VITT. Vit katt med
            randiga eller prickiga fläckar (ej röd/gul).
          </RadioColorLabel>
          <RadioColorLabel>
            <RadioInput
              type="radio"
              name="color"
              value="Kategori 7: Ljusgrå/Grå/Grå med lite vitt/Grå-vit katt. Vit katt med helgrå fläckar."
              checked={
                formData.color ===
                "Kategori 7: Ljusgrå/Grå/Grå med lite vitt/Grå-vit katt. Vit katt med helgrå fläckar."
              }
              onChange={(e) =>
                setFormData({ ...formData, color: e.target.value })
              }
            />
            7: Ljusgrå/Grå/Grå med lite vitt/Grå-vit katt. Vit katt med helgrå
            fläckar.
          </RadioColorLabel>
          <RadioColorLabel>
            <RadioInput
              type="radio"
              name="color"
              value="Kategori 8. Brun/Viltfärgad/Brun med lite vitt/Brun-vit katt. Vit katt med helbruna fläckar"
              checked={
                formData.color ===
                "Kategori 8. Brun/Viltfärgad/Brun med lite vitt/Brun-vit katt. Vit katt med helbruna fläckar"
              }
              onChange={(e) =>
                setFormData({ ...formData, color: e.target.value })
              }
            />
            8. Brun/Viltfärgad/Brun med lite vitt/Brun-vit katt. Vit katt med
            helbruna fläckar
          </RadioColorLabel>
          <RadioColorLabel>
            <RadioInput
              type="radio"
              name="color"
              value="Kategori 9. Svart katt med lite vitt. Svart-vit katt. Vit katt med svarta fläckar."
              checked={
                formData.color ===
                "Kategori 9. Svart katt med lite vitt. Svart-vit katt. Vit katt med svarta fläckar."
              }
              onChange={(e) =>
                setFormData({ ...formData, color: e.target.value })
              }
            />
            9. Svart katt med lite vitt. Svart-vit katt. Vit katt med svarta
            fläckar.
          </RadioColorLabel>
          <RadioColorLabel>
            <RadioInput
              type="radio"
              name="color"
              value="Kategori 10. Helsvart katt. Svart katt med enstaka vita hårstrån."
              checked={
                formData.color ===
                "Kategori 10. Helsvart katt. Svart katt med enstaka vita hårstrån."
              }
              onChange={(e) =>
                setFormData({ ...formData, color: e.target.value })
              }
            />
            10. Helsvart katt. Svart katt med enstaka vita hårstrån.
          </RadioColorLabel>
          <RadioColorLabel>
            <RadioInput
              type="radio"
              name="color"
              value="Kategori 11. Obestämbar färg/Övriga."
              checked={
                formData.color === "Kategori 11. Obestämbar färg/Övriga."
              }
              onChange={(e) =>
                setFormData({ ...formData, color: e.target.value })
              }
            />
            11. Obestämbar färg/Övriga.
          </RadioColorLabel>
        </RadioColorGroup>
      </label>
    </StepContainer>
  );
};

export default Step4;
