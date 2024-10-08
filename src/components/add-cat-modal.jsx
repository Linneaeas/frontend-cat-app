import React from "react";
import styled from "@emotion/styled";

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
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const CloseButton = styled.button`
  background: red;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-top: 1rem;
`;

const AddCatModal = ({ onClose }) => {
  return (
    <ModalOverlay>
      <ModalContainer>
        <h2>Add a New Cat</h2>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default AddCatModal;
