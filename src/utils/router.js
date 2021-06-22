import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from "../pages/MainPage";
import Login from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import Payment from "../pages/Payment";
import ProductDetails from "../pages/ProductDetails";
import Checkout from "../pages/Checkout";
import Topbar from "../components/Topbar";

const Routes = () => (
    <BrowserRouter>
        <Topbar>
            <Switch>
                <Route exact path="/" component={MainPage}></Route>
                <Route path="/carrinho" component={Checkout}></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/login/cadastro" component={SignUp}></Route>
                <Route path="/:id/detalhes" component={ProductDetails}></Route>
                {/* <Route path="/" component={Payment}></Route> */}
            </Switch>
        </Topbar>
    </BrowserRouter>
);

export default Routes;