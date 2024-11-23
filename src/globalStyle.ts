import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Inter, sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
  }
`;
