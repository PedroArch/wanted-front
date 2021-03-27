import { Container } from "./styles";
import { FiSearch } from "react-icons/fi"
import { Link } from "react-router-dom";

export function Main(){
  return(
    <Container>
      <header>
        <Link to=""  className="headerButton">Login</Link>
        <Link to=
        "/signin" className="headerButton">Signin</Link>
      </header>
      
      <div className="content">

        <img src="./assets/logo-rosa.png" alt="wanted" />
        
        <strong>Encontre seu freelancer aqui</strong>
        
        <div className="inputWrapper">
          <div className="searchIcon">
            <label htmlFor="search">
            <FiSearch size={40} color={"rgba(242, 7, 137)"} />
            </label>
          </div>
          
          <input type="text" id="search" placeholder="Busque aqui pelo nome ou cidade" />
          
          <button type="button" className="searchButton">PESQUISAR</button>
        </div>
      </div>
    </Container>
  )
}