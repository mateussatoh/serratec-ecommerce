import React, { useState, useEffect } from "react";

import utilStorage from "../../utils/storage.js";

import apiPedido from "../../services/pedido-api";
import apiUsuario from "../../services/usuario-api";

import Header from "./Header";
import PaymentModal from "./PaymentModal";
import ProductList from "./ProductList";
import Product from "./Product";
import Container from "./Container";
import Price from "./Price";
import DeliveryData from "./DeliveryData";
import PaymentMenu from "./PaymentMenu";

import Quantity from "../BookDetails/Quantity";
import Button from "./Button";

const index = (props) => {

  const [pedido, setPedido] = useState({});


  

  const recuperarPedido = () => {

    // console.log(props.dados.idPedido)
    
    apiPedido.obterPedido(props.dados)
      .then(resposta => {
        console.log("resposta" + resposta)
        setPedido(resposta.data);
        // alert("Cliente recuperado!")
        // window.open("/login", "_self")
      })
      .catch(erro => {
        alert("Erro! Verifique o console.")
        console.log(erro);
      })
  }

  useEffect(() => {
    if(props.dados) {
      recuperarPedido();
    }
  })
    


  return (
    <Container>
      <Header>
        <h2>Meu carrinho</h2>
        <div>
          <p>Produto</p>
          <p>Quantidade</p>
          <p>Entrega</p>
          <p>Preço</p>
        </div>
      </Header>
      <PaymentMenu>
        <ProductList>
          {console.log(pedido)}
          {pedido.produtosDoPedido ?
          pedido.produtosDoPedido.map(produto => 
          <Product>
            <div>
              <img
                src={produto.produto.url}
                alt=""
              />
              <div>
                <p>{produto.produto.nome}</p>
                <p>{produto.produto.autor}</p>
              </div>
            </div>
            <Quantity>
              <div>
                <p>{produto.produto.quantidadeProdutos}</p>
                <button>+</button>
                <button>-</button>
              </div>
              <p>{`Máximo de ${produto.produto.quantidadeEmEstoque} unidades`}</p>
            </Quantity>
            <DeliveryData>{pedido.dataEntrega}</DeliveryData>
            <Price>{`R$ ${produto.precoDoProduto}`}</Price>
          </Product>) : "nada"}
        </ProductList>
        <PaymentModal>
          <h3>Resumo do pedido</h3>
          <div>
            <p>2X</p>
            <p>Senhor dos anéis</p>
            <p>R$ 100</p>
          </div>
          <div>
            <p>Frete</p>
            <p>GRÁTIS</p>
          </div>
          <div>
            <p>Total</p>
            <p>{pedido.valorTotal}</p>
          </div>
          <Button>Efetuar pagamento</Button>
        </PaymentModal>
      </PaymentMenu>
    </Container>
  );
};

export default index;
