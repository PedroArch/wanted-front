import Modal from 'react-modal';
import { Container } from './styles';


interface LoginModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  imageUrl: string;
}



export default function PortfolioModal({isOpen, onRequestClose, imageUrl} : LoginModalProps){

  return (
    <Container>
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="modalContent"
    >
            <img src={imageUrl} alt="wanted"/>
            <button
              onClick={onRequestClose}
              className="react-modal-close"
              > X </button>
      </Modal>
    </Container>
  )
}