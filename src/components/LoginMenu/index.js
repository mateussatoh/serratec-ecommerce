import React, { useState } from "react";
import { Link } from "react-router-dom";

import apiUsuario from "../../services/usuario-api";
import utilStorage from "../../utils/storage.js";

import Container from "./Container";
import Input from "./Input";
import Button from "./Button";
import LoginModal from "./LoginModal";

const index = () => {

  const [username, setUsername] = useState("");
  const [senha, setSenha] = useState("");

  const adicionarItemDoPedidoAoCarrinhoDeCompras = () => {

  }

  const efetuarLogin = (e) => {
    e.preventDefault();

    if (!username || !senha) {
      alert("Favor informar username e senha");
      return;
    }

    apiUsuario.logar(username, senha)
      .then(resposta => {
        console.log(resposta)

        const { Authorization } = resposta.data;
        // const { Authorization, idUsuario } = resposta.data;
        utilStorage.salvarTokenNaStorage(Authorization);
        window.open("/", "_self");
      })
      .catch(erro => {
        alert("Erro! Verifique o console.")
        console.log(erro);
      })
  }

  return (
    <Container>
      <LoginModal>
        <Input type="text" placeholder="Digite o seu usuário"
          value={username} onChange={e => setUsername(e.target.value)} />

        <Input type="password" placeholder="Digite sua senha"
          value={senha} onChange={e => setSenha(e.target.value)} />
        <Link to="/">
          <Button onClick={efetuarLogin}>Continuar</Button>
        </Link>
        <Link to="/signup">
          <Button>Crie sua conta</Button>
        </Link>
      </LoginModal>
    </Container>
  );
};

export default index;
