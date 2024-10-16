import React, { useState } from "react";
import styled from "@emotion/styled";
import { colors } from "../../styles";
import EventInfo from "./event-info";
import CatStatus from "./cat-status";
import CatAppearance from "./cat-appearance";
import ReporterInfo from "./reporter-info";
import FormConfirmation from "./form-confirmation";
import { defaultCatData } from "../cat-data";
import axios from "axios";

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
  z-index: 10; 
`;

const ModalContainer = styled.div`
  position: relative; 
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  border: 0.5rem solid ${colors.orange};
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
const Headline2 = styled.h2`
  position: absolute;  
  top: 10px;          
  left: 10px;
`;

const AddSeenCatModal = ({ onClose }) => {
  const [step, setStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState(defaultCatData);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form behavior

    try {
      const response = await axios.post(
        "http://localhost:3001/submit-cat",
        formData
      );
      console.log("Submission Response:", response.data);
      setIsSubmitted(true); // Set submitted state to true
    } catch (error) {
      console.error("Submission Error:", error);
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error("Response data:", error.response.data);
      }
      // Show an alert or message to the user about the error
    }
  };
  return (
    <>
      {!isSubmitted ? (
        <ModalOverlay>
          <ModalContainer>
            <CloseButton onClick={onClose}>X</CloseButton>
            <Headline2>Add a cat</Headline2>
            <form>
              {step === 0 && (
                <EventInfo formData={formData} setFormData={setFormData} />
              )}
              {/*outsideOrInside, overallStatus, specificStatus*/}
              {step === 1 && (
                <CatStatus formData={formData} setFormData={setFormData} />
              )}
              {/*age, gender, fur, pictures*/}
              {step === 2 && (
                <CatAppearance formData={formData} setFormData={setFormData} />
              )}
              {/*color*/}
              {step === 3 && (
                <ReporterInfo formData={formData} setFormData={setFormData} />
              )}
            </form>
            <div>
              {step > 0 && <Button onClick={prevStep}>Previous</Button>}
              {step < 3 ? (
                <Button onClick={nextStep}>Next</Button>
              ) : (
                <Button onClick={handleSubmit}>Submit</Button>
              )}
            </div>
          </ModalContainer>
        </ModalOverlay>
      ) : (
        <ModalOverlay>
          <ModalContainer>
            <CloseButton onClick={onClose}>X</CloseButton>
            <FormConfirmation formData={formData} />
          </ModalContainer>
        </ModalOverlay>
      )}
    </>
  );
};

export default AddSeenCatModal;
