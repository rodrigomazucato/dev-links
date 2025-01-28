import styled from "styled-components";

export const SocialIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  cursor: pointer;

  svg {
    height: 2rem;
    width: 2rem;
    fill: ${(props) => props.theme.text} !important;
    transition: all 0.2s ease;
    margin: 1rem;

    @media (max-width: 768px) {
      height: 1.5rem; // Ajusta o tamanho do SVG para telas menores
      width: 1.5rem;
    }
  }

  &:hover {
    background-color: ${(props) => props.theme.highlight};
  }
`;
