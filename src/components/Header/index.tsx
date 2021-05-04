import { useContext } from 'react';
import  Container  from "../Header";
import { GlobalContext } from '../../contexts/GlobalContext';


export default function Header() {

  const { isLogged } = useContext(GlobalContext);

  return(
    <Container />
  )
}