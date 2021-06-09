import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import { FiArrowLeft } from 'react-icons/fi';
import { GlobalContext } from '../../contexts/GlobalContext';
import { LoginModal } from '../LoginModal';
import Modal from 'react-modal';

Modal.setAppElement('#root');


export default function Header() {

  const { isLogged, activeUser } = useContext(GlobalContext);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [user, setUser] = useState(activeUser)

  useEffect( () => {
    const userLocalStorage = localStorage.getItem('@Wanted:user')
    if (userLocalStorage) {
      setUser(JSON.parse(userLocalStorage))
    }
   
  }, [isLogged])

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
            <a href={`/user/${user.id}`}><img src={user.avatar} alt="user" /></a>
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