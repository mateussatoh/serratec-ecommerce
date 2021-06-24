import React from "react";
import Link from "react-router-dom/Link";

import Container from "./Container";
import Input from "./Input";
import Button from "./Button";
import LoginModal from "./LoginModal";

const index = () => {
  return (
    <Container>
      <LoginModal>
        <Input type="text" placeholder="Digite o seu usuário" />
        <Input type="password" placeholder="Digite sua senha" />
        <Link to="/">
          <Button>Continuar</Button>
        </Link>
        <Link to="/signup">
          <Button>Crie sua conta</Button>
        </Link>
      </LoginModal>
    </Container>
  );
};

export default index;
