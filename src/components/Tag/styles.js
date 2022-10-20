import styled from "styled-components";

export const Container = styled.span`
  font-size: 0.75rem;
  padding: 5px 1rem;
  border-radius: 0.5rem;
  margin-right: 0.5rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
`;