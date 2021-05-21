import { ChangeEvent, FormEvent,  useState} from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub, FaDeviantart, FaLinkedin } from 'react-icons/fa'
import { FiPlus } from 'react-icons/fi'
import { MapContainer, TileLayer, Marker, useMapEvent } from 'react-leaflet';

import api from "../../services/api";

import Header from '../../components/Header'
import markerImg from '../../images/marker.png'

import { Container } from "./styles";
import 'leaflet/dist/leaflet.css';
import { useHistory, useParams } from "react-router-dom";
import L from "leaflet";


interface Params {
  user: string;
}


export function FreelancerSignup() {

  const history = useHistory();

  const [about, setAbout] = useState('');
  const [portfolio, setPortfolio] = useState('');
  const [location, setLocation] = useState({latitude:-23.5836874, longitude: -46.6815208});
  const [mobile, setMobile] = useState('');
  const [type, setType] = useState('');
  const [openingHours, setOpeningHours] = useState('');
  const [openOnWeekends, setOpenOnWeekends] = useState(false);
  // const [user, setUser] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([])

  const paramsQuery: Params = useParams();

  // useEffect(()=>{
  //   setUser(paramsQuery.user)
  // }, [paramsQuery.user])


  var markerIcon = L.icon({
    iconUrl: markerImg,
    iconSize:     [38, 38], // size of the icon
    iconAnchor:   [19, 19], // point of the icon which will correspond to marker's location
  });

  function MyComponent() {
      useMapEvent('click', (event) => {
      const { lat, lng } = event.latlng
      setLocation({
        latitude: lat,
        longitude: lng,
      })
    })
    return null
  }

  function handleSelectImage (event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return
    }
      const selectedImages = Array.from(event.target.files)
      console.log(selectedImages)

      setImages(selectedImages);

      console.log(selectedImages)

      const selectedPreviewImages = selectedImages.map(image =>{
        return URL.createObjectURL(image)
      })

      setPreviewImages(selectedPreviewImages);
  }

  function handleCheckboxClick(event: ChangeEvent<HTMLInputElement>){
    setOpenOnWeekends(event.target.checked)
  }

  
  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    console.log(paramsQuery.user)

    const {latitude, longitude} = location;
    
    const data = new FormData();

    data.append('about', about);
    data.append('portfolio', portfolio);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('mobile', mobile);
    data.append('type', type);
    data.append('opening_hours', openingHours);
    // está chegando false sempre, fazer um parse no backend
    data.append('open_on_weekends', String(openOnWeekends));
    images.forEach(image => {
      data.append('images', image)
    })

    api.post(`/freelancers/${paramsQuery.user}`, data);

    alert("Freelancer cadastrado com sucesso!");
    
    history.push("/main")

    console.log({
      about,
      portfolio,
      latitude,
      longitude,
      mobile,
      type,
      openingHours,
      openOnWeekends,
      images,
      paramsQuery,
    })
  }

  return(
    <>
    <Header />
    <Container onSubmit={handleSubmit}>
      <div className="formWrapper">
        <h1>Freelancer</h1>
        <input
         type="text" 
         id="type"
         value={type} 
         placeholder="Que tipo de freelancer você é?"
         onChange={({target}) => setType(target.value)} 
         />
        <input
         type="text" 
         id="portfolio"
         value={portfolio} 
         placeholder="Link de portfólio externo"
         onChange={({target}) => setPortfolio(target.value)} 
         />
        <div className="contactsWrapper">
          <input
           type="text" 
           id="mobile" 
           value={mobile}
           placeholder="Celular" 
           onChange={({target}) => setMobile(target.value)}
           />
        </div>
        <strong>Sua Localização</strong>
        <MapContainer
          center={[-30.0642248,-51.2108403]}
          style={{ width: '100%', height: 280 }}
          zoom={15}
        > 
          <MyComponent />
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicGVkcm9hcmNoIiwiYSI6ImNrZzg0am8wdjBkczQycG15MmVmcnZ0OWMifQ.nE2s43Q9SpqIO_qxmGrgww`}
          />
          <Marker
            interactive={false}
            position={[location.latitude, location.longitude]}
            icon={markerIcon}
          />
        </MapContainer>
        <div className="switchs">
          <input 
          type="checkbox" 
          checked={openOnWeekends}
          id="opening_on_weekends"
          onChange={(event) => handleCheckboxClick(event)}
          />
          <strong>Atende aos finais de semana</strong>
        </div>
        <input
         type="text"
         value={openingHours} 
         id="opening_hours" 
         placeholder="Horário de atendimento"
         onChange={({target}) => setOpeningHours(target.value)} 
         />
        <textarea
         className="aboutBox" 
         value={about}
         id="about" 
         placeholder="Sobre você"
         onChange={({target}) => setAbout(target.value)} 
         />
        
        <strong>Imagens de seus projetos</strong>
        <div className="images-container">
          {previewImages.map((image) => {
            return(
              <img key={image} src={image} alt={image} />
            )
          })}
          <label htmlFor="images[]" className="new-image">
            <FiPlus size={24} color="#F20789" />
          </label>
        </div>

        <input 
          multiple
          type="file" 
          id="images[]"
          onChange= {handleSelectImage} 
        /> 
        
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
        <button type="submit">CADASTRAR</button>
      </div>
    </Container>
    </>
  )
}