import { useState, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import { api } from "../../services/api";
import { Link, useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { ButtonHome } from "../../components/ButtonHome";
import { MovieNote } from "../../components/MovieNote";

import { Container, Content, Section } from "./styles";

export function Home() {
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`)
      setNotes(response.data);
    }

    fetchNotes();
  }, [search]);

  return(
    <Container>
      <Header setSearch={setSearch} />
      <hr />

      <Section>
        <h2>Meus filmes</h2>
        <Link to="/new-note">
          <ButtonHome icon={<FiPlus />} title="Adicionar filme" />
        </Link>
      </Section>

      <Content>
        {
          notes.map(note => (
              <MovieNote
                key={String(note.id)}
                data={note} 
                onClick={() => handleDetails(note.id)}
              />
          ))
        }
        
      </Content>

    </Container>
  );
}