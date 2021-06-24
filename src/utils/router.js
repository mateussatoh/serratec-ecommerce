import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
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
      <Route path="/book/1">
        <ProductDetails />
      </Route>
      <Route path="/:id/payment">
        <Payment />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
