import { Container } from "./styles";
import { Link } from 'react-router-dom'
import { MapContainer, TileLayer, Marker} from 'react-leaflet';
import L from 'leaflet';
import { FiArrowLeft } from 'react-icons/fi';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { FiClock } from 'react-icons/fi'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import markerImg from '../../images/marker.png'
import portImg1 from '../../images/port1.jpg'
import portImg2 from '../../images/port2.jpg'
import portImg3 from '../../images/port3.jpg'
import portImg4 from '../../images/port4.jpg'
import portImg5 from '../../images/port5.jpg'
import portImg6 from '../../images/port6.jpg'

import 'leaflet/dist/leaflet.css';

var markerIcon = L.icon({
  iconUrl: markerImg,
  iconSize:     [38, 38], // size of the icon
  iconAnchor:   [19, 19], // point of the icon which will correspond to marker's location
});

export function Freelancer(){


  return(
    <Container>
       <header>
          <Link to="/main">
            <FiArrowLeft size={30} />
          </Link>
          <img src="/assets/logo-branco.png" alt="wanted" />
          <img src="/assets/users/user.jpg" alt="user" />
      </header>
      <div className="userWrapper">
        <img src="/assets/users/user3.jpg" alt="user"/>
        <div className="userInfos">
          <h1>Pedro Carvalho</h1>
          <div className="starsIcons">
            <BsStarFill size={25} color={"rgba(249, 215, 28)"} />
            <BsStarFill size={25} color={"rgba(249, 215, 28)"} />
            <BsStarFill size={25} color={"rgba(249, 215, 28)"} />
            <BsStarFill size={25} color={"rgba(249, 215, 28)"} />
            <BsStarHalf size={25} color={"rgba(249, 215, 28)"} />
          </div>
          <p>Porto Alegre, RS</p>
          <p className="typeUser">Desenvolvedor Fullstack</p>
        </div>
      </div>
      <div className="socialMediasIcons">
        <FaFacebookF size={25} color={"rgba(242, 7, 137)"} />
        <FaTwitter size={25} color={"rgba(242, 7, 137)"} />
        <FaInstagram size={25} color={"rgba(242, 7, 137)"} />
        <FaGithub size={25} color={"rgba(242, 7, 137)"} />
      </div>
      <div className="summary">
        <div className="about">
          <strong>SOBRE MIM</strong>
          <p>Desenvolvedor Junior embusca de trabalhos tanto como freelance
            quanto como estágiario. Embusca de conhecimento e experiencia na
            area. Trabalho com JS, ReactJS, NodeJS e outras tecnologias do
            mercado.
          </p>
          <button type="button">Visite meu portfólio</button>
        </div>
        <div className="thumbnailsPorfolio">
          <img src={portImg1} alt="thumbnail Portfolio" />
          <img src={portImg2} alt="thumbnail Portfolio" />
          <img src={portImg3} alt="thumbnail Portfolio" />
          <img src={portImg4} alt="thumbnail Portfolio" />
          <img src={portImg5} alt="thumbnail Portfolio" />
          <img src={portImg6} alt="thumbnail Portfolio" />
        </div>
      </div>
      <div className="contact">
        <form className="messageBox">
          <input type="text" placeholder="Seu nome"/>
          <input type="text" placeholder="Assunto"/>
          <textarea placeholder="Digite sua mensagem" />
          <button type="button">ENVIAR</button>
          <button type="button" className="whatsappButton">
            <FaWhatsapp size={25} />
            <span>Enviei uma mensagem via Whatsapp</span>
          </button>         
        </form>
        <MapContainer
          center={[-30.0642248,-51.2108403]}
          style={{ width: '100%', height: 280 }}
          zoom={15}
        >
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicGVkcm9hcmNoIiwiYSI6ImNrZzg0am8wdjBkczQycG15MmVmcnZ0OWMifQ.nE2s43Q9SpqIO_qxmGrgww`}
          />
          <Marker
            interactive={false}
            position={[-30.0642248,-51.2108403]}
            icon={markerIcon}
          />
        </MapContainer>
      </div>
      <div className="infoBoxes">
        <div className="openningHour">
          <FiClock size={30} color={'rgba(90, 88, 244)'} />
          <strong>Horario de Atendimento</strong>
          <p>Das 8h até as 18h</p>
        </div>
        <div className="openOnWeekends">
          <AiOutlineExclamationCircle size={30} color={'rgba(239, 81, 81)'} />
          <strong>Funcionamento aos Finais de Semana</strong>
          <p>Não atende aos finais de semana</p>
        </div>
      </div>
      <div className="reviewsWrapper">
        <strong>AVALIAÇÕES</strong>
        <div className="reviwBox">
          <img src="/assets/users/user1.jpg" alt="user1" />
          <div className="review">
            <header>
              <strong>Camila Azul</strong>
              <span>Quinta-Feira 23/03/21 19:30</span>
              <div className="reviewStars">
                <BsStarFill size={25} color={"rgba(249, 215, 28)"} />
                <BsStarFill size={25} color={"rgba(249, 215, 28)"} />
                <BsStarFill size={25} color={"rgba(249, 215, 28)"} />
                <BsStarFill size={25} color={"rgba(249, 215, 28)"} />
                <BsStarFill size={25} color={"rgba(249, 215, 28)"} />
              </div>
            </header>
            <p>Ótimo trabalho, atendeu de forma atenciosa e entregou dentro do
              prazo previsto como acordado, voltarei a fazer negócios
            </p>
          </div>
          <div className="reviwBox">
           <img src="/assets/users/user2.jpg" alt="user1" />
           <div className="review">
            <header>
              <strong>Seu Zé</strong>
              <span>Segunda-Feira 21/01/21 05:30</span>
              <div className="reviewStars">
                <BsStarFill size={25} color={"rgba(249, 215, 28)"} />
                <BsStarFill size={25} color={"rgba(249, 215, 28)"} />
                <BsStarFill size={25} color={"rgba(249, 215, 28)"} />
                <BsStarFill size={25} color={"rgba(249, 215, 28)"} />
                <BsStarHalf size={25} color={"rgba(249, 215, 28)"} />
              </div>
            </header>
            <p>Entregou pra o véio o que foi pedido. Esse guri tem futuro,
              pode confiar em mim que esse é bicho bom!!
            </p>
           </div>
          </div>
        </div>
      </div>
    </Container>
  )
}