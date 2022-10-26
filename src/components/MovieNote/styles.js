import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.pink_bg};

  border-radius: 1rem;

  & + & {
    margin-top: 1.5rem;
  }

  a {
    text-decoration: none;
  }

`;

export const Title = styled.strong`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  display: block;
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray_600};
  margin: 1rem 0;
`;