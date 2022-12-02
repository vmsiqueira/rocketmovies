import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.pink};

  display: flex;
  align-items: center;
  gap: 0.5rem;
`;