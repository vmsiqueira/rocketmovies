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
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis dui interdum augue vehicula venenatis. Duis convallis mauris erat, ut dignissim eros varius et. Quisque commodo arcu augue, sit amet elementum augue interdum quis. Sed elit mi, condimentum dapibus nisi maximus, lobortis blandit felis. Nullam erat orci, faucibus nec nulla eget, maximus pulvinar lorem. Vivamus convallis lacus sem, nec tempor est bibendum ut. Nullam ut tortor ac ligula maximus lobortis. Sed condimentum placerat mi malesuada malesuada. Curabitur et eros vitae est finibus tincidunt eget sed tortor. ",
            tags: [
              { id: "1", name: "Ficção" },
              { id: "2", name: "Sci-fi" },
            ]
          }} 
        />
        <MovieNote
          data={{
            movieName: "Interestelar",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis dui interdum augue vehicula venenatis. Duis convallis mauris erat, ut dignissim eros varius et. Quisque commodo arcu augue, sit amet elementum augue interdum quis. Sed elit mi, condimentum dapibus nisi maximus, lobortis blandit felis. Nullam erat orci, faucibus nec nulla eget, maximus pulvinar lorem. Vivamus convallis lacus sem, nec tempor est bibendum ut. Nullam ut tortor ac ligula maximus lobortis. Sed condimentum placerat mi malesuada malesuada. Curabitur et eros vitae est finibus tincidunt eget sed tortor.",
            tags: [
              { id: "1", name: "Ficção" },
              { id: "2", name: "Sci-fi" },
            ]
          }} 
        />

        <MovieNote
          data={{
            movieName: "Interestelar",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis dui interdum augue vehicula venenatis. Duis convallis mauris erat, ut dignissim eros varius et. Quisque commodo arcu augue, sit amet elementum augue interdum quis. Sed elit mi, condimentum dapibus nisi maximus, lobortis blandit felis. Nullam erat orci, faucibus nec nulla eget, maximus pulvinar lorem. Vivamus convallis lacus sem, nec tempor est bibendum ut. Nullam ut tortor ac ligula maximus lobortis. Sed condimentum placerat mi malesuada malesuada. Curabitur et eros vitae est finibus tincidunt eget sed tortor.",
            tags: [
              { id: "1", name: "Ficção" },
              { id: "2", name: "Sci-fi" },
            ]
          }} 
        />

        <MovieNote
          data={{
            movieName: "Interestelar",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis dui interdum augue vehicula venenatis. Duis convallis mauris erat, ut dignissim eros varius et. Quisque commodo arcu augue, sit amet elementum augue interdum quis. Sed elit mi, condimentum dapibus nisi maximus, lobortis blandit felis. Nullam erat orci, faucibus nec nulla eget, maximus pulvinar lorem. Vivamus convallis lacus sem, nec tempor est bibendum ut. Nullam ut tortor ac ligula maximus lobortis. Sed condimentum placerat mi malesuada malesuada. Curabitur et eros vitae est finibus tincidunt eget sed tortor.",
            tags: [
              { id: "1", name: "Ficção" },
              { id: "2", name: "Sci-fi" },
            ]
          }} 
        />

        <MovieNote
          data={{
            movieName: "Interestelar",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis dui interdum augue vehicula venenatis. Duis convallis mauris erat, ut dignissim eros varius et. Quisque commodo arcu augue, sit amet elementum augue interdum quis. Sed elit mi, condimentum dapibus nisi maximus, lobortis blandit felis. Nullam erat orci, faucibus nec nulla eget, maximus pulvinar lorem. Vivamus convallis lacus sem, nec tempor est bibendum ut. Nullam ut tortor ac ligula maximus lobortis. Sed condimentum placerat mi malesuada malesuada. Curabitur et eros vitae est finibus tincidunt eget sed tortor.",
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