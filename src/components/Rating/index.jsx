import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import { Container } from "./styles";

export function Rating({ size = 12, rating }) {
  let stars = [];

  for (let i = 1; i <= 5; i++) {
    if(i<=rating) {
      stars.push(<AiFillStar key={i} size={size} />);
    } else {
      stars.push(<AiOutlineStar key={i} size={size} />);
    }
  }
  return(
    <Container>
      {stars}
    </Container>
  )
}