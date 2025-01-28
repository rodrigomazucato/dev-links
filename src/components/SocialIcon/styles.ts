import styled from "styled-components";

export const SocialIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  cursor: pointer;

  svg {
    height: 1.75rem;
    width: 1.75rem;
    fill: ${(props) => props.theme.text};
    transition: all 0.2s ease;
    margin: 1rem;
  }

  &:hover {
    background-color: ${(props) => props.theme.highlight};
  }
`;
