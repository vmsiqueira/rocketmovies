import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;

  hr {
    height: 1px;
    border-width: 0;
    background-color: ${({ theme }) => theme.colors.background_700};
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 7.5rem 3.5rem;
`;