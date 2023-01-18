import "./App.css";
import { Switch, Route } from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/Products" component={Products} />
      <Route exact path="/cart" component={Cart} />
    </Switch>
  );
}

export default App;
