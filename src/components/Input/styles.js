import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;

  background-color: ${({ theme }) => theme.colors.background_800};
  color: ${({ theme }) => theme.colors.gray_700};

  border-radius: 0.625rem;
  margin-bottom: 0.5rem;
  padding: 0 1rem;

  input {
    width: 100%;
    height: 3.5rem;

    color: ${({ theme }) => theme.colors.white};
    background: transparent;
    border: none;

    &:placeholder {
      color: ${({ theme }) => theme.colors.gray_700};
    }
  }
`;