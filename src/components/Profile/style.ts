import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  gap: 0.75rem;

  img {
    height: 7rem;
    width: 7rem;
    border-radius: 50%;
    border: 2px solid ${(props) => props.theme.stroke};
  }
`;
