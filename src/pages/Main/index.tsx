import { ChangeEvent, useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import Modal from 'react-modal';
import Header from '../../components/Header';

import { FiSearch } from "react-icons/fi"
import { Container } from "./styles";
import { GlobalContext } from '../../contexts/GlobalContext';

Modal.setAppElement('#root');

export function Main(){

  const { freelancers } = useContext(GlobalContext);

  const [filter, setFilter] = useState('');
  
  const filteredFreelancers = filter.trim() === '' 
    ? [...freelancers] 
    : freelancers.filter(freelancer => 
      freelancer.user.first_name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) 
      || freelancer.user.last_name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      || freelancer.user.city.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      || freelancer.user.state.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      || freelancer.type.toLocaleLowerCase().includes(filter.toLocaleLowerCase())) 

  function handleClickSearch () {
    console.log(freelancers)
  }

  function handleSearchChange (event: ChangeEvent<HTMLInputElement>) {
    setFilter(event.target.value)
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
            
            <input
             type="text" 
             id="search" 
             placeholder="Busque aqui pelo nome ou cidade" 
             onChange={handleSearchChange} />
            
            <button type="button" className="searchButton" onClick={handleClickSearch}>PESQUISAR</button>
          </div>

          <div className="searchResults">
            
            { filteredFreelancers.map((freelancer) => {
              return (
                <Link to={`/freelancer/${freelancer.id}`}>
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
                </Link>
              )
            })}

          </div>
        </div>
      </Container>
    </>
  )
}