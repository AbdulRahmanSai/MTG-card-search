// src/components/Loading.js
import React from "react";
import styled from "styled-components";

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.5em;
  color: #333;
`;

const Loading = () => {
  return <LoadingContainer>Loading...</LoadingContainer>;
};

export default Loading;
