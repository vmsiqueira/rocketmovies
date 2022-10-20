import { Container, Title } from "./styles";


export function Section({ title, children }) {
  return(
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
}