import { ChangeEvent, useState, FormEvent, useEffect, useContext } from "react";
import { useHistory, Link, useParams } from 'react-router-dom';

import { Container } from "./styles";
import { estados } from '../../utils/estados';

import api from '../../services/api';

import Header from '../../components/Header';
import { GlobalContext } from "../../contexts/GlobalContext";

interface Params {
  id: string;
}

export function User(){

  const { id }: Params = useParams()

  const history = useHistory()
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [birthday, setBirthday] = useState('');
  const [avatar, setAvatar] = useState<File[]>([]);
  const [avatarPreview, setAvatarPreview] = useState('')

  const [termsChecked, setTermsChecked] = useState(false);

  const { setIsLogged } = useContext(GlobalContext);

  useEffect( () => {
    async function userFetch () {
      const response = await api.get(`/users/${id}`)
      setFirstName(response.data.first_name)
      setLastName(response.data.last_name)
      setEmail(response.data.email)
      setPassword(response.data.password)
      setCity(response.data.city)
      setState(response.data.state)
      setBirthday(response.data.birthday.slice(0,10))
      setAvatarPreview(response.data.avatar)

    }
    userFetch()
  }, [id])



  function handleSubmit(event: FormEvent){
    event.preventDefault();

    const data = new FormData();

    data.append('first_name', firstName)
    data.append('last_name', lastName)
    data.append('email', email)
    data.append('password', password)
    data.append('city', city)
    data.append('state', state)
    data.append('birthday', birthday)
    avatar.forEach(avatarImg => {
      data.append('avatar', avatarImg)
    })

    api.put(`/users/${id}`, data)

    alert("Cadastro Realizado com sucesso");

    history.push('/main');
  }

  function handleTermsClick(event: ChangeEvent<HTMLInputElement>){
    setTermsChecked(event.target.checked)
  }

  function handleSelectedImage(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return
    }

    const selectedImage =Array.from(event.target.files);
    setAvatar(selectedImage)

  }

  function handleLogoutButtonClick() {

    localStorage.setItem('@Wanted:isLogged', JSON.stringify(false))
    history.push('/main');
    setIsLogged(false)
  }

  return (
		<>
      <Header />
      <Container>
          <form onSubmit={handleSubmit}>
            <h1>PERFIL</h1>

            <div className="avatar-container">
              <label htmlFor='avatar' className="new-image">
                <img src={avatarPreview} alt={firstName} />
              </label>
            </div>
            <input
             type="file"
             id='avatar'
             onChange={handleSelectedImage}
             />

            <div className="formRow">
              <input
              type="text" 
              id="first-name"
              value={firstName}
              placeholder="Primeiro nome" 
              onChange={({target}) => setFirstName(target.value)}
              />
              <input
              type="text" 
              id="last-name" 
              value={lastName}
              placeholder="Último nome"
              onChange={({target}) => setLastName(target.value)}
              />
            </div>
            
            <input
            type="email"
            id="email" 
            value={email}
            placeholder="Email"
            onChange={({target}) => setEmail(target.value)} 
            />
            
            <div className="cityState">
              <input
              type="text" 
              id="city"
              value={city}
              placeholder="Cidade"
              onChange={({target}) => setCity(target.value)}
              />
              <select
              id="state"
              value={state} 
              onChange={({target}) => setState(target.value)}>
                <option defaultValue={state} disabled>UF</option>
                {estados.map(estado => <option key={estado.Sigla}>{estado.Sigla}</option>)}
              </select>
            </div>
            
            <div className="formRow">
              <input
              type="password" 
              value={password}
              placeholder="Senha"
              id="password"
              onChange={({target}) => setPassword(target.value)}
              />
              <input
              type="date" 
              value={birthday}
              id="birthday"
              onChange={({target}) => setBirthday(target.value)}
              />
            </div>
            
            <div className="formRow">
              <input
              type="password" 
              placeholder="Repita a senha" 
              id="repassword"
              />
              <button type="submit" disabled={!termsChecked}>ALTERAR</button>
            </div>
            <Link to='' className="signupFreelancerButton">CADASTRE SEU PERFIL DE FREELANCER</Link>
            <div className="terms">
              <input id="terms" type="checkbox" onChange={(event) => handleTermsClick(event)} />
              <span>Concordo com os termos de serviço e privacidade da wanted</span>
            </div>
            <button type="button" className="logoutButton" onClick={handleLogoutButtonClick}>LOGOUT</button>
          </form>
      </Container>
		</>
  )
}