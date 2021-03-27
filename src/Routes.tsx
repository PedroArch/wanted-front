import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Signin } from "./pages/Signin"
import { LandingPage } from "./pages/LandingPage"
import { Main } from "./pages/Main"

export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/main" component={Main} />
        <Route path="/signin" component={Signin} />
      </Switch>
    </BrowserRouter>
  )
}