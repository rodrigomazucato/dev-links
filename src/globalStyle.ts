import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${(props) => props.theme.backgroundImage}
      no-repeat top center/cover;
    transition: all 0.3s ease;
  }

  span, a {
    font-family: Inter, sans-serif;
    color: ${(props) => props.theme.text};
    -webkit-font-smoothing: antialiased;
  }

  @media (max-width: 768px) {
    body {
      font-size: 0.875rem;
      img {
      height: 87.5%;
      width: 87.5%;
    }
    }

   
  }
`;
