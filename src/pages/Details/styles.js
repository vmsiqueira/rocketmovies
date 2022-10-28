import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  main {
    margin: 2.5rem 7.5rem;
  }
`;

export const Content = styled.div`
  width: 100%;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.pink};

    margin-bottom: 1.5rem;
  }
`;

export const NoteInfo = styled.div`

`;

export const PostInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  margin-bottom: 2.5rem;
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
  }
`;

export const Date = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  margin-bottom: 1.5rem;

  h1 {
    font-size: 2.25rem;
    font-weight: 500;
  }
`;

export const Tags = styled.div`
  margin-bottom: 2.5rem;
`;

export const Note = styled.div`
  width: 100%;
  height: 500px;
  padding-right: 1rem;
  overflow: auto;

  p + p {
    margin-top: 1.25rem;
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
