import { Link } from "react-router-dom";
import { Container } from "./styles";

export function LandingPage(){
  return(
    <Container>
      <Link to="/main">ACESSE</Link>
    </Container>
  )
}