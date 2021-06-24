import React from "react";
import { Link } from "react-router-dom";

import Container from "./Container";
import Navbar from "./Navbar";
import Search from "./Search";

import CartIcon from "../../assets/images/icons/shopping-cart.svg";
import SearchIcon from "../../assets/images/icons/search-outline.svg";

import Logo from "../../assets/images/logo.png";

const Topbar = () => {
  return (
    <Container>
      <Navbar>
        <li>
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </li>
        <Search>
          <input type="text" placeholder="Pesquise os melhores produtos.." />
          <button>
            <img src={SearchIcon} alt="" />
          </button>
        </Search>
        {/* <li>
          <div>
            <Link to="/login">Login</Link>
          </div>
        </li> */}
        {/* <li>
          <div>
            <Link to="/signup">Criar conta</Link>
          </div>
        </li> */}
        <li>
          <Link to="/checkout">
            <img src={CartIcon} alt="" />
          </Link>
        </li>
      </Navbar>
    </Container>
  );
};

export default Topbar;
