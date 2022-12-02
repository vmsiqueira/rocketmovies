import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import { Input } from "../Input";

import { Container, Logo, Profile } from "./styles";

export function Header({ setSearch }) {
  const { signOut, user } = useAuth();
  const avatarUrl = user.avatar_url ? `${api.defaults.baseURL}/files/${user.avatar_url}` : avatarPlaceholder;

  const navigate = useNavigate();

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  return(
    <Container>
      <Link to="/">
        <Logo>
          RocketMovies
        </Logo>
      </Link>

      <Input 
        icon={FiSearch} 
        type="text" 
        placeholder="Pesquisar pelo título"
        onChange={e => setSearch(e.target.value)}
      />

      <Profile>
        <div className="user-data">
          <strong>
            <Link to="/profile">
              {user.name}
            </Link>
          </strong>

          <button onClick={handleSignOut}>
            sair
          </button>
        </div>
        <Link to="/profile">
          <img src={avatarUrl} alt="user profile image" />
        </Link>
      </Profile>
    </Container>
  );
}