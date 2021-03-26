import { Container } from "./styles";
import { FiSearch } from "react-icons/fi"

export function Main(){
  return(
    <Container>
      <header>
        <button type="button" className="headerButton">Login</button>
        <button type="button" className="headerButton">Signin</button>
      </header>
      <div className="content">
        <img src="./assets/logo-rosa.png" alt="wanted" />
        <strong>Encontre seu freelancer aqui</strong>
        <div className="inputWrapper">
          <div className="searchIcon">
            <FiSearch size={40} color={"rgba(242, 7, 137)"} />
          </div>
          <input type="text" placeholder="Busque aqui pelo nome ou cidade" />
          <button type="button" className="searchButton">PESQUISAR</button>
        </div>
      </div>
    </Container>
  )
}