import { Stars } from "../Stars";
import { Tag } from "../Tag";

import { Container, Title, Description } from "./styles";

export function MovieNote({ data, ...rest }) {
  return(
    <Container {...rest}>
      <a href="#">
        <Title>{data.movieName}</Title>
        <Stars 
        />
        <Description>{data.description}</Description>

        {
          data.tags && 
          <footer>
            {
              data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
            }
          </footer>
        }
      </a>
    </Container>
  );
}