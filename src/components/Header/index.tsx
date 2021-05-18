import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import { FiArrowLeft } from 'react-icons/fi';
import { GlobalContext } from '../../contexts/GlobalContext';
import { LoginModal } from '../LoginModal';
import Modal from 'react-modal';

Modal.setAppElement('#root');


export default function Header() {

  const { isLogged } = useContext(GlobalContext);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  function handleLoginModalOpen(){
    setIsLoginModalOpen(true);
  }

  function handleLoginModalClose(){
    setIsLoginModalOpen(false);
  }

  return(
    <>
      {isLogged ? 
      (
        <Container>
          <header className="headerIsLogged">
            <Link to="/main">
              <FiArrowLeft size={30} />
            </Link>
            <img src="/assets/logo-branco.png" alt="wanted" />
            <img src="/assets/users/user.jpg" alt="user" />
          </header>
        </Container>
      )
      : 
      (
        <Container >
            <header className="headerNotLogged">
              <button
              type="button"
              className="headerButton"
              onClick={handleLoginModalOpen}
              >Login</button>
              <Link to=
              "/signup" className="headerButton">Signup</Link>
            </header>
        </Container>
      )}
      <LoginModal
      isOpen={isLoginModalOpen}
      onRequestClose={handleLoginModalClose}
    />
  </>
  )
}