import Modal from 'react-modal';
import { FormEvent, useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container } from './styles';
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookF } from 'react-icons/fa'
import api from '../../services/api';
import { GlobalContext } from '../../contexts/GlobalContext';

interface LoginModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}



export function LoginModal({isOpen, onRequestClose} : LoginModalProps){

  const { activeUser, setActiveUser, setIsLogged  } = useContext(GlobalContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertLogin, setAlertLogin] = useState(false)

  const history = useHistory();

  async function handleOnSubmit (event: FormEvent) {
    event.preventDefault();
    console.log(activeUser)

    try {
      const data = {
        email,
        password
      }
      const res = await api.post("/login", data)
     
      setIsLogged(true);
      setAlertLogin(false);
      setActiveUser(res.data);

      localStorage.setItem('@Wanted:isLogged', JSON.stringify(true))
      localStorage.setItem('@Wanted:user', JSON.stringify(res.data))

      history.push(`/user/${res.data.id}`)

      onRequestClose()

      
    } catch {
      setAlertLogin(true);
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <img src="/assets/logo-rosa.png" alt="wanted"/>
        <strong>Login</strong>
        <form onSubmit={handleOnSubmit}>
          <input
           type="email" 
           name="email" 
           value={email}
           placeholder="Digite seu email" 
           onChange={(event) => {setEmail(event.target.value)}}
           />
          <input
           type="password" 
           name="password" 
           value= {password}
           placeholder="Senha"
           onChange={(event) => {setPassword(event.target.value)}}
           />
          <button type="submit" className="loginButton" >LOGAR</button>
        </form>
        <p
         className="loginFail"
         style={alertLogin ? {display: ""} : {display: "none"}}
         >email/senha inválido
         </p>
        <Link to="/signup" className="signupButton">CADASTRAR</Link>
        <p>Cadastre com suas redes sociais</p>
        <div className="socialMediaButtons">
          <button type="button" className="facebookButton">
            <FaFacebookF size={30} color={'rgba(255, 255, 255)'} />
            <span>Facebook</span>
          </button>
          <button type="button" className="googleButton">
            <FcGoogle size={30} />
            <span>Google</span>
          </button>
        </div>
        <button
          onClick={onRequestClose}
          className="react-modal-close"
        > X </button>
      </Container>

    </Modal>
  )
}