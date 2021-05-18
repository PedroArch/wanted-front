import { Link } from "react-router-dom";
import { Container } from "./styles";
import { FiArrowLeft } from "react-icons/fi";
import Header from '../../components/Header';

const estados = [{
	"ID": "1",
	"Sigla": "AC",
	"Nome": "Acre"
},
     {
	"ID": "2",
	"Sigla": "AL",
	"Nome": "Alagoas"
},
     {
	"ID": "3",
	"Sigla": "AM",
	"Nome": "Amazonas"
},
     {
	"ID": "4",
	"Sigla": "AP",
	"Nome": "Amapá"
},
     {
	"ID": "5",
	"Sigla": "BA",
	"Nome": "Bahia"
},
     {
	"ID": "6",
	"Sigla": "CE",
	"Nome": "Ceará"
},
     {
	"ID": "7",
	"Sigla": "DF",
	"Nome": "Distrito Federal"
},
     {
	"ID": "8",
	"Sigla": "ES",
	"Nome": "Espírito Santo"
},
     {
	"ID": "9",
	"Sigla": "GO",
	"Nome": "Goiás"
},
     {
	"ID": "10",
	"Sigla": "MA",
	"Nome": "Maranhão"
},
     {
	"ID": "11",
	"Sigla": "MG",
	"Nome": "Minas Gerais"
},
     {
	"ID": "12",
	"Sigla": "MS",
	"Nome": "Mato Grosso do Sul"
},
     {
	"ID": "13",
	"Sigla": "MT",
	"Nome": "Mato Grosso"
},
     {
	"ID": "14",
	"Sigla": "PA",
	"Nome": "Pará"
},
     {
	"ID": "15",
	"Sigla": "PB",
	"Nome": "Paraíba"
},
     {
	"ID": "16",
	"Sigla": "PE",
	"Nome": "Pernambuco"
},
     {
	"ID": "17",
	"Sigla": "PI",
	"Nome": "Piauí"
},
     {
	"ID": "18",
	"Sigla": "PR",
	"Nome": "Paraná"
},
     {
	"ID": "19",
	"Sigla": "RJ",
	"Nome": "Rio de Janeiro"
},
     {
	"ID": "20",
	"Sigla": "RN",
	"Nome": "Rio Grande do Norte"
},
     {
	"ID": "21",
	"Sigla": "RO",
	"Nome": "Rondônia"
},
     {
	"ID": "22",
	"Sigla": "RR",
	"Nome": "Roraima"
},
     {
	"ID": "23",
	"Sigla": "RS",
	"Nome": "Rio Grande do Sul"
},
     {
	"ID": "24",
	"Sigla": "SC",
	"Nome": "Santa Catarina"
},
     {
	"ID": "25",
	"Sigla": "SE",
	"Nome": "Sergipe"
},
     {
	"ID": "26",
	"Sigla": "SP",
	"Nome": "São Paulo"
},
     {
	"ID": "27",
	"Sigla": "TO",
	"Nome": "Tocantins"
}]

export function Signup(){
  return (
		<>
		<Header />
    <Container>
        <form>
          <h1>CADASTRAR</h1>

          <img src="/assets/users/user.jpg" alt="user"/>

          <div className="formRow">
            <input type="text" placeholder="Primeiro nome" />
            <input type="text" placeholder="Último nome" />
          </div>
          
          <input type="email" placeholder="Email" />
          
          <div className="cityState">
            <input type="text" placeholder="Cidade" />
            <select>
              <option selected disabled>UF</option>
              {estados.map(estado => <option>{estado.Sigla}</option>)}
            </select>
          </div>
          
          <div className="formRow">
            <input type="password" placeholder="Senha" />
            <input type="date" />
          </div>
          
          <div className="formRow">
            <input type="password" placeholder="Repita a senha" />
            <button type="button">CADASTRAR</button>
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