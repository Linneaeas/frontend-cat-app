import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { colors } from "../../styles";
import EventInfo from "./event-info";
import CatStatus from "./cat-status";
import CatAppearance from "./cat-appearance";
import ReporterInfo from "./reporter-info";
import FormConfirmation from "./form-confirmation";
import Pictures from "./pictures";
import { defaultCatData } from "../cat-data";
import axios from "axios";
import io from "socket.io-client";
import { Form } from "../AddCatModal/step-styles";

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
  max-width: fit-content;
   max-height: 95vh;
   overflow-y: auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin:0.5em;

`;

const CloseButton = styled.button`
  position: absolute;  
  top: 10px;          
  right: 10px;
  background: none;
  color: black;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  padding: 0;
`;

const ButtonContainer = styled.div`
display:flex;
justify-content: center;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  margin: 0.5rem;
   background-color: ${colors.orange}; 
   color:white;
   font-weight: bold;
   border-radius: 20px;
`;
const Headline2 = styled.h2`
  position: absolute;  
  top: 10px;          
  left: 10px;
  font-size: 16px;
`;

const socket = io("http://localhost:3001");

const AddSeenCatModal = ({ onClose }) => {
  const [step, setStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState(defaultCatData);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  // Handle form submission via Socket.IO
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form behavior

    // Send the cat data to the server through the Socket.IO connection
    socket.emit("new-cat", formData);

    // Confirm submission on the client
    setIsSubmitted(true);
  };

  // Handle the real-time update when a new cat is added
  useEffect(() => {
    socket.on("cat-updated", (change) => {
      console.log("Real-time update from server:", change);
      // Optionally, you can handle any specific UI updates here when cats are added
    });

    // Cleanup the socket connection when the component is unmounted
    return () => {
      socket.off("cat-updated");
    };
  }, []);
  return (
    <>
      {!isSubmitted ? (
        <ModalOverlay>
          <ModalContainer>
            <CloseButton onClick={onClose}>X</CloseButton>
            <Headline2>Add a cat</Headline2>
            <Form>
              {step === 0 && (
                <EventInfo formData={formData} setFormData={setFormData} />
              )}

              {step === 1 && (
                <CatStatus formData={formData} setFormData={setFormData} />
              )}

              {step === 2 && (
                <CatAppearance formData={formData} setFormData={setFormData} />
              )}
              {step === 3 && (
                <Pictures formData={formData} setFormData={setFormData} />
              )}

              {step === 4 && (
                <ReporterInfo formData={formData} setFormData={setFormData} />
              )}
            </Form>
            <ButtonContainer>
              {step > 0 && <Button onClick={prevStep}>Previous</Button>}
              {step < 4 ? (
                <Button onClick={nextStep}>Next</Button>
              ) : (
                <Button onClick={handleSubmit}>Submit</Button>
              )}
            </ButtonContainer>
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
