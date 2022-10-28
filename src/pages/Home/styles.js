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

export const Section = styled.section`
  margin: 2.5rem 7.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 2rem;
    font-weight: 500;
  }

`;

export const Content = styled.div`
  width: calc(100% - 15rem);
  height: calc(100vh - 20rem);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0 auto;
  padding-right: 1rem;

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