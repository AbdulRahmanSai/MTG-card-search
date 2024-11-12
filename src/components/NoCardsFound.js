// src/components/NoCardsFound.js
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NoCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 2em;
`;

const Message = styled.p`
  font-size: 1.2em;
  color: #333;
  margin-bottom: 1em;
`;

const EditButton = styled.button`
  padding: 0.5em 1em;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const NoCardsFound = () => {
  const navigate = useNavigate();

  const handleEditSearch = () => {
    navigate("/");
  };

  return (
    <NoCardsContainer>
      <Message>No cards found matching your search criteria.</Message>
      <EditButton onClick={handleEditSearch}>Edit Search</EditButton>
    </NoCardsContainer>
  );
};

export default NoCardsFound;