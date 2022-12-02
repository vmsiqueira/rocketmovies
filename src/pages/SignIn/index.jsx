import { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import backgroundImg from "../../assets/background.png";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Background } from "./styles";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

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
          onChange={e => setEmail(e.target.value)}
        />
        <Input 
          icon={FiLock} 
          type="password" 
          placeholder="Senha"
          onChange={e => setPassword(e.target.value)}
        />
        <Button 
          title="Entrar"
          onClick={handleSignIn}
        />

        <Link to="/register">
          Criar conta
        </Link>
      
      </Form>


      <Background>
        <img src={backgroundImg} alt="Image which shows a movie theater room" />
      </Background>

    </Container>
  )
}