import { FiPlus } from "react-icons/fi";

import { Header } from "../../components/Header";
import { ButtonHome } from "../../components/ButtonHome";
import { Section } from "../../components/Section";
import { MovieNote } from "../../components/MovieNote";

import { Container, Content } from "./styles";

export function Home() {
  return(
    <Container>
      <Header />
      <hr />

      <Section title="Meus filmes">
        <ButtonHome icon={<FiPlus />} title="Adicionar filme" />
      </Section>

      <Content>
        <MovieNote
          data={{
            movieName: "Interestelar",
            description: "Great movie at its year of premiere",
            tags: [
              { id: "1", name: "Ficção" },
              { id: "2", name: "Sci-fi" },
            ]
          }} 
        />
      </Content>

    </Container>
  );
}