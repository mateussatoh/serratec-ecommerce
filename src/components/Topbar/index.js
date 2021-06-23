import React from "react";
import Link from "react-router-dom/Link";

import Container from "./Container";
import Navbar from "./Navbar";
import Search from "./Search";

const Topbar = () => {
  return (
    <Container>
      <Navbar>
        <li>
          <Link to="/">LOGO</Link>
        </li>
        <li>
          <Search type="text" placeholder="Pesquise os melhores produtos.." />
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Criar conta</Link>
        </li>
        <li>
          <Link to="/checkout">Carrinho</Link>
        </li>
      </Navbar>
    </Container>
  );
};

export default Topbar;
