import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Payment from "./pages/MainPage";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <MainPage />
        </Route>
        <Route path="/users">
          <ProductDetails />
        </Route>
        <Route path="/dwadaw">
          <SignUp />
        </Route>
        <Route path="/adwdaw">
          <Login />
        </Route>
        <Route path="/dawdawdsdsdds">
          <Checkout />
        </Route>
        <Route path="/sdsdd">
          <Payment />
        </Route>
      </Switch>
    </Router>
  );
}
