import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  flex: 1;
  margin: 2.5rem 7.5rem;
  padding-right: 1rem;
  overflow: auto;

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

export const Form = styled.form`
  header {
    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      font-size: 1rem;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.pink};

      margin-bottom: 1.5rem;
    }

    h1 {
      font-size: 2.25rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.white};

      margin-bottom: 2.5rem;
    }
  }

  .tags {
    background-color: ${({ theme }) => theme.colors.gray_900};
    padding: 1rem;

    display: flex;
    align-items: center;
    gap: 1rem;

    border-radius: 10px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;