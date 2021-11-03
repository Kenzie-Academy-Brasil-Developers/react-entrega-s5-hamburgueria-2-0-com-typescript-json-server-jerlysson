import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import LoginForm from "../components/Login";
import ProductsLists from "../components/ProductList";
import Register from "../components/Register";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <LoginForm />
      </Route>
      <Route path="/signup">
        <Register />
      </Route>
      <Route path="/dashboard">
        <ProductsLists />
      </Route>
    </Switch>
  );
};

export default Routes;
