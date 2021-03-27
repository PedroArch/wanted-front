import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import { FcGoogle } from 'react-icons/fc'
import { ImFacebook2 } from 'react-icons/im'

interface LoginModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function LoginModal({isOpen, onRequestClose} : LoginModalProps){
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
        <input type="email" placeholder="Digite seu email" />
        <input type="password" placeholder="Senha" />
        <Link to="/signin" className="signinButton" />
        <p>Cadastre com suas redes sociais</p>
        <div className="socialMediaButtons">
          <button type="button" className="facebookButton">
            <ImFacebook2 size={30} color={'rgba(63, 103, 178 )'} />
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