import { createGlobalStyle } from "styled-components";
import backgroundImage from "./assets/background-light.png";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: url(${backgroundImage}) no-repeat top center/cover;
    font-family: Inter, sans-serif;
    font-weight: 400;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
`;
