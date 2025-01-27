import styled from "styled-components";

export const SwitchContainer = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  background-image: ${(props) => props.theme.switchImage};
  background-repeat: no-repeat;
  background-position: center;
  width: 5rem;
  height: 4rem;
  margin: auto;

  &:hover {
    background-image: ${(props) => props.theme.switchHover};
  }
`;
