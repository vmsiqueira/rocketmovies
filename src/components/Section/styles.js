import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2rem;
  color: ${({ theme }) => theme.colors.gray_600};

  margin-bottom: 1.5rem;
`;