import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Header, Form, Avatar } from "./styles";

export function Profile() {
  return(
    <Container>
      <Header>
        <a href="">
          <FiArrowLeft />
           Voltar
        </a>
      </Header>

      <Form>
        <Avatar>
          <img 
            src="https://github.com/vmsiqueira.png" 
            alt="User profile image" 
          />

          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>

        </Avatar>

        <Input 
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />
        <Input 
          placeholder="E-mail"
          type="email"
          icon={FiMail}
        />
        <Input 
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
        />
        <Input 
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
        />

        <Button title="Salvar" />
      </Form>
    </Container>
  );
}