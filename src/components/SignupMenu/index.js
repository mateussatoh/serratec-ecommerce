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
        <Input type="number" placeholder="CPF" />
        <Input type="email" placeholder="E-mail" />
        <Input type="password" placeholder="Digite sua senha" />
        <Input type="password" placeholder="Confirme sua senha" />
        <Input type="number" placeholder="CEP" />
        <Input type="number" placeholder="Numero" />
        <Input type="text" placeholder="Complemento" />
        <Link to="/">
          <Button>Continuar</Button>
        </Link>
        <Link to="/login">
          <Button>Já tenho uma conta</Button>
        </Link>
      </LoginModal>
    </Container>
  );
};

export default index;
