import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 274px;
  background-color: ${({ theme }) => theme.colors.background_800};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  resize: none;

  margin-bottom: 2.5rem;
  border-radius: 0.625rem;
  padding: 1rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray_700};
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.pink};
    border-radius: 0.25rem;
  }
`;