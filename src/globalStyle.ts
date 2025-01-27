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
    transition: background 0.3s ease;
  }

  span, a {
    font-family: Inter, sans-serif;
    color: ${(props) => props.theme.text};
    -webkit-font-smoothing: antialiased;
  }
`;
