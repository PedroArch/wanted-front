import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Signup } from "./pages/Signup"
import { LandingPage } from "./pages/LandingPage"
import { Main } from "./pages/Main"
import { FreelancerSignup } from "./pages/FreelancerSignup"
import { Freelancer } from "./pages/Freelancer"
import { Perfil } from "./pages/Perfil"

export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/main" component={Main} />
        <Route path="/signup" component={Signup} />
        <Route path="/freelancersignup/:user" component={FreelancerSignup} />
        <Route path="/freelancer/:id" component={Freelancer} />
        <Route path="/perfil/:id" component={Perfil} />
      </Switch>
    </BrowserRouter>
  )
}