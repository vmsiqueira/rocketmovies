import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.pink_bg};

  border-radius: 1rem;

`;

export const Title = styled.strong`
  font-size: 1.5rem;
`;