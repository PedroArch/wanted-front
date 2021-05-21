import { Container } from './styles';
import Header from '../../components/Header';
import { estados } from '../../utils/estados';

export function Perfil() {

  return (
    <>
      <Header />
      <Container >
      <form>
          <h1>PERFIL</h1>

          <img src="/assets/users/user.jpg" alt="user"/>

          <div className="formRow">
            <input type="text" placeholder="Pedro" />
            <input type="text" placeholder="Carvalho" />
          </div>
          
          <input type="email" placeholder="pedro@email.com" />
          
          <div className="cityState">
            <input type="text" placeholder="Porto Alegre" />
            <select>
              <option selected disabled>RS</option>
              {estados.map(estado => <option>{estado.Sigla}</option>)}
            </select>
          </div>
          
          <div className="formRow">
            <input type="password" placeholder="Senha" />
            <input type="date" value="1985-06-17"/>
          </div>
          
          <div className="formRow">
            <input type="password" placeholder="Repita a senha" />
            <button type="button">ATUALIZAR</button>
          </div>
          <div className="terms">
            <input type="checkbox" />
            <span>Concordo com os termos de serviço e privacidade da wanted</span>
          </div>
        </form>
      </Container>
    </>
  )
}