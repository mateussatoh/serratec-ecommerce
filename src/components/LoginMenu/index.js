import React, { useState } from "react";
import { Link } from "react-router-dom";

import apiUsuario from "../../services/usuario-api";
import utilStorage from "../../utils/storage.js";

import Container from "./Container";
import Input from "./Input";
import Button from "./Button";
import LoginModal from "./LoginModal";
import Title from "./Title";

const index = () => {
  const [username, setUsername] = useState("");
  const [senha, setSenha] = useState("");

  // const adicionarItemDoPedidoAoCarrinhoDeCompras = () => { }

  const efetuarLogin = (e) => {
    e.preventDefault();

    if (!username || !senha) {
      alert("Favor informar username e senha");
      return;
    }

    apiUsuario
      .logar(username, senha)
      .then((resposta) => {
        const { Authorization, idUsuario } = resposta.data;
        utilStorage.salvarTokenNaStorage(Authorization, idUsuario);

        window.open("/checkout", "_self");
        // window.open(`/book/${idProduto}`, "_self");
      })
      .catch((erro) => {
        alert("Erro! Verifique o console.");
        console.log(erro);
      });
  };

  return (
    <Container>
      <LoginModal>
        <Title>Faça o seu login</Title>
        <Input
          type="text"
          placeholder="Digite o seu usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <Link to="/">
          <Button onClick={efetuarLogin}>Continuar</Button>
        </Link>
        <Link to="/signup">
          <Button>Crie sua conta</Button>
        </Link>
        <a href="/">Esqueci minha senha</a>
      </LoginModal>
    </Container>
  );
};

export default index;
