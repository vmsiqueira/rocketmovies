import { useState, useEffect } from "react";
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Header, Form, Avatar } from "./styles";

export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState("");
  const [passwordNew, setPasswordNew] = useState("");
  
  const avatarUrl = user.avatar_url ? `${api.defaults.baseURL}/files/${user.avatar_url}` : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    }

    const userUpdated = Object.assign(user, updated);
    await updateProfile({ user: userUpdated, avatarFile });
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }


  return(
    <Container>
      <Header>
        <Link to="/">
          <FiArrowLeft />
           Voltar
        </Link>
      </Header>

      <Form>
        <Avatar>
          <img 
            src={avatar} 
            alt="User profile image" 
          />

          <label htmlFor="avatar">
            <FiCamera />
            <input 
              id="avatar" 
              type="file" 
              onChange={handleChangeAvatar}
            />
          </label>

        </Avatar>

        <Input 
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input 
          placeholder="E-mail"
          type="email"
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input 
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange={e => setPasswordOld(e.target.value)}
        />
        <Input 
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          onChange={e => setPasswordNew(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  );
}