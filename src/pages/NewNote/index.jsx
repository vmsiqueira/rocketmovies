import { FiArrowLeft } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { NoteItem } from "../../components/NoteItem";

import { Container, Content, Form, InputWrapper, Footer } from "./styles";

export function NewNote() {
  return(
    <Container>
      <Header />

      <Content>
        <Form>
          <header>
            <a href="">
              <FiArrowLeft />
              Voltar
            </a>
            <h1>Novo filme</h1>
          </header>

          <InputWrapper>
            <Input placeholder="Nome do filme" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </InputWrapper>
          <TextArea placeholder="Observações" />

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="aventura" />
              <NoteItem isNew placeholder="Nova tag" />
            </div>
          </Section>

          <Footer>
            <Button isDelete title="Excluir nota" />
            <Button title="Salvar alterações" />
          </Footer>
        </Form>
      </Content>
    </Container>
  )
}