import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 3rem auto;
  padding: 0 7.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  line-height: 2rem;
  color: ${({ theme }) => theme.colors.white};
`;