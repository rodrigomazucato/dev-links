import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${(props) =>
      props.theme.backgroundImage} no-repeat top center/cover;
    line-height: 1.5;
    transition: background 0.2s ease;
  }

  span, a {
    font-family: Inter, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
`;
