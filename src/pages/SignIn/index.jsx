import { FiMail, FiLock } from "react-icons/fi";
import backgroundImg from "../../assets/background.png";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Background } from "./styles";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo o que assistir</span>
        <h2>Faça o seu login</h2>
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
          title="Entrar"
        />

        <a href="">
          Criar conta
        </a>
      
      </Form>


      <Background>
        <img src={backgroundImg} alt="Image which shows a movie theater room" />
      </Background>

    </Container>
  )
}