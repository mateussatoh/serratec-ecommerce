import React, { useState } from "react";
import { Link } from "react-router-dom";

import apiUsuario from "../../services/usuario-api";

import Container from "./Container";
import Input from "./Input";
import Button from "./Button";
import LoginModal from "./LoginModal";

const index = () => {

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [cep, setCep] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");

  const criarUsuario = (e) => {
    e.preventDefault();

    if (!email || !username || !senha || !nome || !cpf || !cep
      || !numero) {
      alert("Complemento é opcional. Favor, informar todos os demais campos");
      return;
    }

    if(!(senha === confirmarSenha)) {
      alert("Senha não confere com a confirmação de senha.");
      return;
    }

    apiUsuario.cadastrar(email, username, senha, nome, cpf, cep, numero, complemento)
      .then(resposta => {
        console.log(resposta)
        alert("Usuário cadastrado!")
        window.open("/login", "_self")
      })
      .catch(erro => {
        alert("Erro! Verifique o console.")
        console.log(erro);
      })
  }

  return (
    <Container>
      <LoginModal>
        <Input type="email" placeholder="E-mail"
          value={email} onChange={e => setEmail(e.target.value)} />

        <Input type="text" placeholder="Digite o username"
          value={username} onChange={e => setUsername(e.target.value)} />

        <Input type="password" placeholder="Digite sua senha"
          value={senha} onChange={e => setSenha(e.target.value)} />

        <Input type="password" placeholder="Confirme sua senha"
          value={confirmarSenha} onChange={e => setConfirmarSenha(e.target.value)} />

        <Input type="text" placeholder="Digite o seu nome"
          value={nome} onChange={e => setNome(e.target.value)} />

        <Input type="text" placeholder="CPF"
          value={cpf} onChange={e => setCpf(e.target.value)} />

        <Input type="text" placeholder="CEP"
          value={cep} onChange={e => setCep(e.target.value)} />

        <Input type="text" placeholder="Numero"
          value={numero} onChange={e => setNumero(e.target.value)} />

        <Input type="text" placeholder="Complemento"
          value={complemento} onChange={e => setComplemento(e.target.value)} />

        <Link to="/">
          <Button onClick={criarUsuario}>Continuar</Button>
        </Link>

        <Link to="/login">
          <Button>Já tenho uma conta</Button>
        </Link>
      </LoginModal>
    </Container>
  );
};

export default index;
