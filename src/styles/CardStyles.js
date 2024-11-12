// This file will contain specific styles for the card display, designed to resemble an MTG card.

import styled from "styled-components";

export const CardContainer = styled.div`
  width: 300px;
  height: 420px;
  background: #f8f5e3;
  border: 2px solid #1a1a1a;
  border-radius: 8px;
  padding: 1em;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  margin: 1em auto;
  display: flex;
  flex-direction: column;
  font-family: 'Beleren Bold', sans-serif;
`;

export const CardName = styled.h2`
  font-size: 1.5em;
  color: #333;
  border-bottom: 1px solid #999;
  padding-bottom: 0.2em;
  margin-bottom: 0.5em;
`;

export const CardType = styled.p`
  font-size: 1.2em;
  color: #555;
  margin: 0.3em 0;
  font-weight: bold;
`;

export const CardCost = styled.p`
  font-size: 1em;
  color: #777;
  text-align: right;
  margin: 0.3em 0;
`;

export const CardDescription = styled.p`
  font-size: 1em;
  color: #333;
  flex-grow: 1;
  margin-top: 1em;
  line-height: 1.4;
`;

export const CardStats = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.1em;
  color: #555;
  margin-top: 1em;
  font-weight: bold;
`;