import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import { LoginModal } from "../../components/LoginModal";

import { FiSearch } from "react-icons/fi"
import { Container } from "./styles";

Modal.setAppElement('#root');

export function Main(){
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  function handleLoginModalOpen(){
    setIsLoginModalOpen(true);
  }

  function handleLoginModalClose(){
    setIsLoginModalOpen(false);
  }

  return(
    <>
      <Container>
        <header>
          <button
           type="button"
           className="headerButton"
           onClick={handleLoginModalOpen}
           >Login</button>
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
      <LoginModal
        isOpen={isLoginModalOpen}
        onRequestClose={handleLoginModalClose}
      />
    </>
  )
}