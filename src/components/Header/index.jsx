import { FiSearch } from "react-icons/fi";

import { Input } from "../Input";

import { Container, Logo, Profile } from "./styles";

export function Header() {
  return(
    <Container>
      <Logo>
        RocketMovies
      </Logo>

      <Input 
        icon={FiSearch} 
        type="text" 
        placeholder="Pesquisar pelo título"
      />

      <Profile>
        <div className="user-data">
          <strong>Vitor Siqueira</strong>
          <button>
            sair
          </button>
        </div>
        <img src="https://github.com/vmsiqueira.png" alt="user profile image" />
      </Profile>
    </Container>
  );
}