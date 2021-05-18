import Modal from 'react-modal';
import Header from '../../components/Header'
;
import { FiSearch } from "react-icons/fi"
import { Container } from "./styles";

Modal.setAppElement('#root');

export function Main(){

  return(
    <>
      <Header />
      <Container>
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
    </>
  )
}