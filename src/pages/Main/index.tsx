import { useContext, useEffect, useState } from 'react';

import Modal from 'react-modal';
import Header from '../../components/Header';

import { FiSearch } from "react-icons/fi"
import { Container } from "./styles";
import { GlobalContext } from '../../contexts/GlobalContext';

Modal.setAppElement('#root');

export function Main(){

  const { freelancers } = useContext(GlobalContext);

  function handleClickSearch () {
    console.log(freelancers)
  }

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
            
            <button type="button" className="searchButton" onClick={handleClickSearch}>PESQUISAR</button>
          </div>

          <div className="searchResults">
            
            { freelancers.map((freelancer) => {
              return (
                <div key={freelancer.id}className="freelancer">
                  <div className="freelancerInfo">
                  <img src={freelancer.user.avatar} alt={freelancer.user.first_name} />
                  <div className="freelancerData">
                    <ul>
                      <li>{`${freelancer.user.first_name} ${freelancer.user.last_name}`}</li>
                      <li>{freelancer.type}</li>
                      <li>{`${freelancer.user.city} - ${freelancer.user.state}`}</li>
                   </ul>
                  </div>
                  </div>
                  <div className="porfolios">
                    <img src={freelancer.images[0].url} alt="image1" />
                    <img src={freelancer.images[1].url} alt="image2" />
                    <img src={freelancer.images[2].url} alt="image3" />
                  </div>      
                </div>
              )
            })}

          </div>
        </div>
      </Container>
    </>
  )
}