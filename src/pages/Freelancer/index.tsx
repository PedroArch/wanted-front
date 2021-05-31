import { Container } from "./styles";
import { MapContainer, TileLayer, Marker, useMap} from 'react-leaflet';
import L from 'leaflet';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { FiClock } from 'react-icons/fi'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import Header from '../../components/Header';

import FreelancerType from '../../types/FreelancerType';
import { freelancerDefault } from '../../utils/freelancerDefault'

import markerImg from '../../images/marker.png'

import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from "react";
import api from "../../services/api";
import { useParams } from "react-router-dom";

var markerIcon = L.icon({
  iconUrl: markerImg,
  iconSize:     [38, 38], // size of the icon
  iconAnchor:   [19, 19], // point of the icon which will correspond to marker's location
});

interface RouteParamsProps {
  id?: String
}

export function Freelancer(){

  const routeId: RouteParamsProps = useParams()

  const [freelancer, setFreelancer] = useState<FreelancerType>(freelancerDefault);

  useEffect(() => {
    async function freelancerFetch () {
      const response = await api.get(`/freelancers/${routeId.id}`);
      setFreelancer(response.data)
    }
    freelancerFetch()
  }, [routeId.id])


  function ChangeView ({ center, zoom }: any) {
    const map = useMap()
    map.setView(center, zoom)

    return null;
  }

  return(
    <>
    <Header />
    <Container>
      <div className="userWrapper">
        <img src={`${freelancer.user.avatar}`} alt="user"/>
        <div className="userInfos">
          <h1>{`${freelancer.user.first_name} ${freelancer.user.last_name}`}</h1>
          <div className="starsIcons">
            <BsStarFill size={25} color={"rgba(249, 215, 28)"} />
            <BsStarFill size={25} color={"rgba(249, 215, 28)"} />
            <BsStarFill size={25} color={"rgba(249, 215, 28)"} />
            <BsStarFill size={25} color={"rgba(249, 215, 28)"} />
            <BsStarHalf size={25} color={"rgba(249, 215, 28)"} />
          </div>
          <p>{`${freelancer.user.city}, ${freelancer.user.state}`}</p>
          <p className="typeUser">{`${freelancer.type}`}</p>
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
          <p>{`${freelancer.about}`}
          </p>
          <button type="button">
            <a href={`${freelancer.portfolio}`} target='_blanck'>Visite meu portfólio</a>
          </button>
        </div>
        <div className="thumbnailsPorfolio">
          {freelancer.images.map((image) => {
            return <img key={image.url} src={image.url} alt="imagem portfolio" />
          })}
        </div>
      </div>
      <div className="contact">
        <form className="messageBox">
          <strong>CONTATO</strong>
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
          center={[freelancer.latitude, freelancer.longitude]}
          style={{ width: '100%', height: 280 }}
          zoom={15}
        >
          <ChangeView center={[freelancer.latitude, freelancer.longitude]} zoom={15} />
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicGVkcm9hcmNoIiwiYSI6ImNrZzg0am8wdjBkczQycG15MmVmcnZ0OWMifQ.nE2s43Q9SpqIO_qxmGrgww`}
          />
          <Marker
            interactive={false}
            position={[freelancer.latitude, freelancer.longitude]}
            icon={markerIcon}
          />
        </MapContainer>
      </div>
      <div className="infoBoxes">
        <div className="openningHour">
          <FiClock size={30} color={'rgba(169, 208, 242)'} />
          <strong>Horario de Atendimento</strong>
          <p>{freelancer.opening_hours}</p>
        </div>
        { freelancer.open_on_weekends ? 
          <div className="openOnWeekendsTrue">
            <AiOutlineExclamationCircle size={30} color={'rgba(37, 211, 102)'} />
            <strong>Funcionamento aos Finais de Semana</strong>
            <p>Atende aos finais de semana</p>
          </div>
          : 
          <div className="openOnWeekendsFalse">
            <AiOutlineExclamationCircle size={30} color={'rgba(206, 57, 57)'} />
            <strong>Funcionamento aos Finais de Semana</strong>
            <p>Não atende aos finais de semana</p>
          </div>}
      </div>
      <div className="reviewsWrapper">
        <strong>AVALIAÇÕES</strong>
        
        <div className="reviewBox">
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
        </div>

        <div className="reviewBox">
          <img src="/assets/users/user2.jpg" alt="user2" />
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
    </Container>
    </>
  )
}