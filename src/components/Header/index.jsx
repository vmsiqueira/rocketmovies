import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Input } from "../Input";

import { Container, Logo, Profile } from "./styles";

export function Header() {
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
      />

      <Profile>
        <div className="user-data">
          <strong>
            <Link to="/profile">
              Vitor Siqueira
            </Link>
          </strong>

          <button>
            sair
          </button>
        </div>
        <Link to="/profile">
          <img src="https://github.com/vmsiqueira.png" alt="user profile image" />
        </Link>
      </Profile>
    </Container>
  );
}