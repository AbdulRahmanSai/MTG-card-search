// This file will define a baseline for styling across the entire application.

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #534454;
    color: #333;
    line-height: 1.6;
  }  

  main {
    display: flex;
    min-height: 100vh;
  }

  section {
    align-content: center;
    margin: 0 auto;
    text-align: center;
    width: 640px;
  }

  button {
    border-radius: 24px;
    cursor: pointer;
    font-family: inherit;
  }

  input, select, button {
    border: 1px solid #ccc;
    padding: 0.5em;
    font-size: 1em;
    border-radius: 4px;
    margin: 0.25em 0;
  }
  
  label {
    color: #fff;
    text-align: left;
  }

  h1, h2, h3, h4 {
    color: #fff;
    margin: 0.5em 0;
    text-algin: center;
  }

`;

export default GlobalStyles;