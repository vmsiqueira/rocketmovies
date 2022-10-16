import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";
import backgroundImg from "../../assets/background.png";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Background } from "./styles";

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo o que assistir</span>
        <h2>Crie a sua conta</h2>

        <Input 
          icon={FiUser} 
          type="text" 
          placeholder="Nome"
        />
        <Input 
          icon={FiMail} 
          type="email" 
          placeholder="E-mail"
        />
        <Input 
          icon={FiLock} 
          type="password" 
          placeholder="Senha"
        />

        <Button 
          title="Cadastrar"
        />

        <a href="#">
          <FiArrowLeft size={16} />
          Voltar para o login
        </a>
      
      </Form>


      <Background>
        <img src={backgroundImg} alt="Image which shows a movie theater room" />
      </Background>

    </Container>
  )
}