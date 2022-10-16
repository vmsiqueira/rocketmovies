import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Form = styled.form`
  margin-left: 8.375rem;

  h1 {
    color: ${({ theme }) => theme.colors.pink};
    font-size: 3rem;
  }

  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.gray_100};
  }

  h2 {
    margin: 3rem 0;
  }

  a{
    text-decoration: none;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.pink};
    text-align: center;
    display: block;
    margin-top: 2.625rem;
  }
`;

export const Background = styled.div`
  height: 100%;
  overflow-y: hidden;

  img {
    flex: 1;
    min-width: 803;
    opacity: 0.3;
  }
`;