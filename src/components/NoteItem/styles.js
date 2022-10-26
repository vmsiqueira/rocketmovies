import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.colors.background_800
  };

  color: ${({ theme }) => theme.colors.background_700};

  border: ${({ theme, isNew }) => 
    isNew
      ? `2px dashed ${theme.colors.white}`
      : "none"
  };

  border-radius: 0.625rem;
  padding-right: 1rem;

  button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.colors.pink};
  }

  .button-add {
    color: ${({ theme }) => theme.colors.pink};
  }

  input {
    height: 3.5rem;
    width: 100%;

    padding: 0.75rem;

    color: ${({ theme }) => theme.colors.white};

    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray_700};
    }
  }
`;