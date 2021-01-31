import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  body, a {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
  }
  body{
    background-color: #f6f6f6;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
`;
