import { Container } from "./styles";
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Link } from 'react-router-dom'
import L from 'leaflet';
import { FiArrowLeft } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub, FaDeviantart, FaLinkedin } from 'react-icons/fa'
import markerImg from '../../images/marker.png'

import 'leaflet/dist/leaflet.css';


export function FreelancerSign() {


  var markerIcon = L.icon({
    iconUrl: markerImg,
    iconSize:     [38, 38], // size of the icon
    iconAnchor:   [19, 19], // point of the icon which will correspond to marker's location
});

  return(
    <Container>
        <header>
          <Link to="/main">
            <FiArrowLeft size={30} />
          </Link>
          <img src="./assets/logo-branco.png" alt="wanted" />
          <img src="/assets/users/user.jpg" alt="user" />
        </header>
      <div className="formWrapper">
        <h1>Freelancer</h1>
        <input type="text" placeholder="Que tipo de freelancer você é?" />
        <input type="text" placeholder="Descreva seu trabalho"/>
        <div className="contactsWrapper">
          <input type="text" placeholder="Celular" />
          <input type="text" placeholder="Telefone Fixo" />
        </div>
        <strong>Sua Localização</strong>
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
        <div className="switchs">
          <input type="checkbox" />
          <strong>Atende aos finais de semana</strong>
        </div>
        <textarea className="aboutBox" placeholder="Sobre você"/>
        <strong>REDES SOCIAIS</strong>
        <div className="socialMediasWrapper">
          <div className="inputWrapper">
            <FaFacebookF size={25} color={'rgba(242, 7, 137)'} className="socialMediasIcon" />
            <input type="text" className="socialMediasInput" placeholder="Facebook" />
          </div>
          <div className="inputWrapper">
            <FaLinkedin size={25} color={'rgba(242, 7, 137)'} className="socialMediasIcon" />
            <input type="text" className="socialMediasInput" placeholder="Linkdin"/>
          </div>
          <div className="inputWrapper">
            <FaInstagram size={25} color={'rgba(242, 7, 137)'} className="socialMediasIcon" />
            <input type="text" className="socialMediasInput" placeholder="Instagram"/>
          </div>
          <div className="inputWrapper">
            <FaTwitter size={25} color={'rgba(242, 7, 137)'} className="socialMediasIcon" />
            <input type="text" className="socialMediasInput" placeholder="Twitter"/>
          </div>
          <div className="inputWrapper">
            <FaGithub size={25} color={'rgba(242, 7, 137)'} className="socialMediasIcon" />
            <input type="text" className="socialMediasInput" placeholder="Github"/>
          </div>
          <div className="inputWrapper">
            <FaDeviantart size={25} color={'rgba(242, 7, 137)'} className="socialMediasIcon" />
            <input type="text" className="socialMediasInput" placeholder="DevianArt"/>
          </div>
        </div>
        <button type="button">CADASTRAR</button>
      </div>
    </Container>
  )
}