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

          <div className="searchResults">
            
            <div className="freelancer">
              <div className="freelancerInfo">
                <img src="/assets/users/user1.jpg" alt="user" />
                <div className="freelancerData">
                  <ul>
                    <li>Luciana Paragon</li>
                    <li>Design</li>
                    <li>Palhoças - SC</li>
                  </ul>
                </div>
              </div>
              <div className="porfolios">
                <img src="/assets/users/port1.jpg" alt="image1" />
                <img src="/assets/users/port2.jpg" alt="image2" />
                <img src="/assets/users/port3.jpg" alt="image3" />
              </div>      
            </div>

            <div className="freelancer">
              <div className="freelancerInfo">
                <img src="/assets/users/user2.jpg" alt="user" />
                <div className="freelancerData">
                  <ul>
                    <li>Seu João</li>
                    <li>Pecuarista</li>
                    <li>Uberlândia - MG</li>
                  </ul>
                </div>
              </div>
              <div className="porfolios">
                <img src="/assets/users/port4.jpg" alt="image1" />
                <img src="/assets/users/port1.jpg" alt="image2" />
                <img src="/assets/users/port5.jpg" alt="image3" />
              </div>      
            </div>

            <div className="freelancer">
              <div className="freelancerInfo">
                <img src="/assets/users/user3.jpg" alt="user" />
                <div className="freelancerData">
                  <ul>
                    <li>Roy</li>
                    <li>Dev</li>
                    <li>São Paulo</li>
                  </ul>
                </div>
              </div>
              <div className="porfolios">
                <img src="/assets/users/port2.jpg" alt="image1" />
                <img src="/assets/users/port4.jpg" alt="image2" />
                <img src="/assets/users/port5.jpg" alt="image3" />
              </div>      
            </div>

            <div className="freelancer">
              <div className="freelancerInfo">
                <img src="/assets/users/user1.jpg" alt="user" />
                <div className="freelancerData">
                  <ul>
                    <li>Luciana Paragon</li>
                    <li>Design</li>
                    <li>Palhoças - SC</li>
                  </ul>
                </div>
              </div>
              <div className="porfolios">
                <img src="/assets/users/port1.jpg" alt="image1" />
                <img src="/assets/users/port2.jpg" alt="image2" />
                <img src="/assets/users/port3.jpg" alt="image3" />
              </div>      
            </div>

            <div className="freelancer">
              <div className="freelancerInfo">
                <img src="/assets/users/user2.jpg" alt="user" />
                <div className="freelancerData">
                  <ul>
                    <li>Seu João</li>
                    <li>Pecuarista</li>
                    <li>Uberlândia - MG</li>
                  </ul>
                </div>
              </div>
              <div className="porfolios">
                <img src="/assets/users/port4.jpg" alt="image1" />
                <img src="/assets/users/port1.jpg" alt="image2" />
                <img src="/assets/users/port5.jpg" alt="image3" />
              </div>      
            </div>

            <div className="freelancer">
              <div className="freelancerInfo">
                <img src="/assets/users/user3.jpg" alt="user" />
                <div className="freelancerData">
                  <ul>
                    <li>Roy</li>
                    <li>Dev</li>
                    <li>São Paulo</li>
                  </ul>
                </div>
              </div>
              <div className="porfolios">
                <img src="/assets/users/port2.jpg" alt="image1" />
                <img src="/assets/users/port4.jpg" alt="image2" />
                <img src="/assets/users/port5.jpg" alt="image3" />
              </div>      
            </div>
          </div>

        </div>
      </Container>
    </>
  )
}