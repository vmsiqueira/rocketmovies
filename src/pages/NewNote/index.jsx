import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { NoteItem } from "../../components/NoteItem";

import { Container, Content, Form, InputWrapper, Footer } from "./styles";

export function NewNote() {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleNewNote() {
    if(!title) {
      return alert("Digite o título da nota")
    }
    if(newTag) {
      return alert("Você deixou uma tag não adicionada no campo.")
    }
    await api.post("/notes", {
      title,
      rating,
      description,
      tags
    });

    alert("Nota criada com sucesso!");
    navigate("/");
  }

  return(
    <Container>
      <Header />

      <Content>
        <Form>
          <header>
            <Link to="/">
              <FiArrowLeft />
              Voltar
            </Link>
            <h1>Novo filme</h1>
          </header>

          <InputWrapper>
            <Input 
              placeholder="Nome do filme" 
              onChange={e => setTitle(e.target.value)}
            />
            <Input 
              placeholder="Sua nota (de 0 a 5)" 
              onChange={e => setRating(e.target.value)}
            />
          </InputWrapper>
          <TextArea 
            placeholder="Observações" 
            onChange={e => setDescription(e.target.value)}
          />

          <Section title="Marcadores">
            <div className="tags">
              {
                tags.map((tag, index) => (
                  <NoteItem 
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }
              <NoteItem 
                isNew 
                placeholder="Nova tag" 
                value={newTag}
                onChange={e => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <Footer>
            <Button 
              isDelete 
              title="Excluir nota" 
            />
            <Button 
              title="Salvar alterações" 
              onClick={handleNewNote}
            />
          </Footer>
        </Form>
      </Content>
    </Container>
  )
}