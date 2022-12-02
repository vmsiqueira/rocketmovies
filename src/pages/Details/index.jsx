import { useState, useEffect } from "react";
import { FiClock, FiArrowLeft } from "react-icons/fi";
import { Link, useParams, useNavigate } from "react-router-dom";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { Header } from "../../components/Header";
import { Rating } from "../../components/Rating";
import { Tag } from "../../components/Tag";

import { 
  Container, 
  Content,
  NoteInfo,
  PostInfo,
  AuthorInfo,
  Date, 
  Title, 
  Tags,
  Note
} from "./styles";

export function Details() {
  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  const { user } = useAuth();
  const avatarUrl = user.avatar_url ? `${api.defaults.baseURL}/files/${user.avatar_url}` : avatarPlaceholder;

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, []);

  return (
    <Container>
      <Header />

      { data &&
        <main>
          <Content>
            <Link to="/">
              <FiArrowLeft />
              Voltar
            </Link>

            <NoteInfo>
              <Title>
                <h1>{data.title}</h1>
                <Rating size={20} rating={data.rating} />
              </Title>

              <PostInfo>
                <AuthorInfo>
                  <img 
                    src={avatarUrl} 
                    alt={`Foto de ${user.name}`}
                  />
                  <span>
                    {`por ${user.name}`}
                  </span>
                </AuthorInfo>
                <Date>
                  <FiClock />
                  <span>
                    11/05/22 às 15:45
                  </span>
                </Date>
              </PostInfo>
            </NoteInfo>  

            { data.tags &&
              <Tags>
              {
                data.tags.map(tag => (
                  <Tag 
                    isInDetailsPage 
                    key={String(tag.id)} 
                    title={tag.name} 
                  />
                ))
              }
              
              </Tags>
            }

            <Note>
              <p>
                {data.description}
              </p>
            </Note>

          </Content>
        </main>
      }
    </Container>
  );
}