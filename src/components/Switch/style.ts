import styled from "styled-components";

export const SwitchContainer = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  background-image: ${(props) => props.theme.switchImage};
  width: 4rem;
  height: 2.5rem;
  margin: auto;
`;
