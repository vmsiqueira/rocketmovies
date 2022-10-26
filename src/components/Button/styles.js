import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 3.5rem;

  background-color: ${({ theme, isDelete }) => 
    isDelete 
      ? theme.colors.gray_900
      : theme.colors.pink
  };
  color: ${({ theme, isDelete }) => 
    isDelete
    ? theme.colors.pink
    : theme.colors.black
  };
  font-weight: 500;

  border: none;
  border-radius: 0.625rem;

  margin-top: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* &+&{
    margin-top: 1rem;
  } */
`;