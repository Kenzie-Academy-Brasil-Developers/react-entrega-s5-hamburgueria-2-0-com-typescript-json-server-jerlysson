import { Switch, Route } from "react-router-dom";
import RegisterCard from "../components/RegisterCard";
import Home from "../pages/home";
import Login from "../pages/login";

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <RegisterCard />
    </Route>
  </Switch>
);

export default Routes;
