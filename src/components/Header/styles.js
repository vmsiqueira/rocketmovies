import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 7.25rem;
  padding: 1.875rem 7.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.pink};
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;

  width: 240px;

  .user-data {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    strong {
      font-size: 0.875rem;
      font-weight: bold;
    }

    button {
      font-size: 0.875rem;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.gray_700};

      background: transparent;
      border: none;
      cursor: pointer;
    }
  }

  img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }
`;