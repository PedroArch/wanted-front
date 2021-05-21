import { ChangeEvent, useState, FormEvent } from "react";
import { useHistory } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi'

import { Container } from "./styles";
import { estados } from '../../utils/estados';

import api from '../../services/api';

import Header from '../../components/Header';


export function Signup(){

  const history = useHistory()
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [birthday, setBirthday] = useState('');
  const [avatar, setAvatar] = useState<File[]>([]);


  const [termsChecked, setTermsChecked] = useState(false);

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

    api.post("/users", data)

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

  return (
		<>
      <Header />
      <Container>
          <form onSubmit={handleSubmit}>
            <h1>CADASTRAR</h1>

            <div className="avatar-container">
              <label htmlFor='avatar' className="new-image">
                <FiPlus size={24} color='#F20789' />
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
              <button type="submit" disabled={!termsChecked}>CADASTRAR</button>
            </div>
            <div className="terms">
              <input id="terms" type="checkbox" onChange={(event) => handleTermsClick(event)} />
              <span>Concordo com os termos de serviço e privacidade da wanted</span>
            </div>
          </form>
      </Container>
		</>
  )
}