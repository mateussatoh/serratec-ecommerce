import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Payment from "../pages/Payment";
import ProductDetails from "../pages/ProductDetails";
import Checkout from "../pages/Checkout";
import Topbar from "../components/Topbar";

const Routes = () => (
  <BrowserRouter>
    <Topbar />
    <Switch>
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route path="/checkout">
        <Checkout />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route path="/book/:id">
        <ProductDetails />
      </Route>
      <Route path="/:id/payment">
        <Payment />
      </Route>
      <Route path="/negocios">
        <MainPage />
      </Route>
      <Route path="/biografias">
        <MainPage />
      </Route>
      <Route path="/ficcao">
        <MainPage />
      </Route>
      <Route path="/auto-conhecimento">
        <MainPage />
      </Route>

      {/* Redirect all 404's to home */}
      <Redirect to='/' />
    </Switch>
  </BrowserRouter>
);

export default Routes;
