import React, { useState, useEffect } from "react";

import utilStorage from "../utils/storage.js";

import apiUsuario from "../services/usuario-api";
import apiPedido from "../services/pedido-api";

import CheckoutMenu from "../components/CheckoutMenu";

const Checkout = () => {
  const [idUsuario, setIdUsuario] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [idProduto, setIdProduto] = useState("");
  const [idPedido, setIdPedido] = useState();

  const recuperarDadosStorage = () => {
    const [, idUsuario] = utilStorage.obterTokenDaStorage();
    const [idProduto, quantidade] = utilStorage.obterItemDoPedidoDaStorage();

    setIdUsuario(idUsuario)
    setQuantidade(quantidade)
    setIdProduto(idProduto);
  }

  const recuperarCliente = () => {

    apiUsuario.obterCliente(idUsuario)
      .then(resposta => {
        setIdPedido(resposta.data.pedidoAtivo);
        // console.log(resposta)
      })
      .catch(erro => {
        alert("Erro! Verifique o console.")
        console.log(erro);
      })
  }

  const adicionarAoPedido = () => {

    apiPedido.adicionarItemAoPedido(idUsuario, idProduto, quantidade)
      .then(resposta => {
        // console.log(resposta)
        // alert("Item adicionado ao carrinho!")
        // window.open("/login", "_self")
      })
      .catch(erro => {
        // alert("Erro! Verifique o console.")
        console.log(erro);
      })
  }

  useEffect(() => {
    recuperarDadosStorage();

    if (!idUsuario || !quantidade || !idProduto) {
      return
    }

    adicionarAoPedido();

    if (idUsuario) {
      recuperarCliente();
    }

    
  });

  return (
    <div>
      {/* {idPedido == null ? '' : console.log(idPedido)} */}
      <CheckoutMenu dados={idPedido} />
    </div>
  );
};

export default Checkout;
