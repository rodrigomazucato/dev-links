import styled from "styled-components";

export const LinkContainer = styled.a`
  background-color: ${(props) => props.theme.surface};
  border: 1px solid ${(props) => props.theme.stroke};
  border-radius: 16px;
  cursor: pointer;
  display: block;
  font-weight: 500;
  text-align: center;
  padding: 1.25rem;

  &:hover {
    border: 1.5px solid ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.surfaceHover};
  }
`;
