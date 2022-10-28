import { FiStar } from "react-icons/fi";

import { Container } from "./styles";

export function Stars({ size = 12 }) {
  return(
    <Container>
      <FiStar size={size} />
      <FiStar size={size} />
      <FiStar size={size} />
      <FiStar size={size} />
      <FiStar size={size} />
    </Container>
  )
}