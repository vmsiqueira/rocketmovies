import { Container } from "./styles";

export function Button({title, loading = false, icon, isDelete, ...rest}) {
  return(
    <Container 
      type="button"
      disabled={loading}
      isDelete={isDelete}
      {...rest}
    >
      {icon}
      {loading ? "Carregando..." : title}
    </Container>
  )
}