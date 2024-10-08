import React, { useState } from "react";
import styled from "@emotion/styled";
import { colors } from "../../styles";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";
import Step5 from "./step5";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; 
`;

const ModalContainer = styled.div`
  position: relative; 
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: fit-content;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const CloseButton = styled.button`
  position: absolute;  
  top: 10px;          
  right: 10px;
  background: none;
  color: black;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  margin: 0.5rem;
   background-color: ${colors.orange}; 
`;

const AddCatModal = ({ onClose }) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    missingOrSeen: "",
    headline: "",
    date: "",
    pictures: "",
    county: "",
    anotherCounty: "",
    textedAddress: "",
    mapAddress: "",
    age: "",
    gender: "",
    fur: "",
    color: "",
    policeReported: "",
    additionalInformation: "",
    reporterEmail: "",
    publicReporterContacts: "",
    statusOutside: "",
    statusInside: "",
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = () => {
    console.log("Final Form Data:", formData);
    // Handle final form submission logic here
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>X</CloseButton>
        <h2>Add a New Cat</h2>
        <form>
          {step === 0 && (
            <Step1 formData={formData} setFormData={setFormData} />
          )}
          {step === 1 && (
            <Step2 formData={formData} setFormData={setFormData} />
          )}
          {step === 2 && (
            <Step3 formData={formData} setFormData={setFormData} />
          )}
          {step === 3 && (
            <Step4 formData={formData} setFormData={setFormData} />
          )}
          {step === 4 && (
            <Step5 formData={formData} setFormData={setFormData} />
          )}
        </form>
        <div>
          {step > 0 && <Button onClick={prevStep}>Previous</Button>}
          {step < 2 ? (
            <Button onClick={nextStep}>Next</Button>
          ) : (
            <Button>Submit</Button>
          )}
        </div>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default AddCatModal;
