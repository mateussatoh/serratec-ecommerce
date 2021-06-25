import React, { useState, useEffect } from "react";

import utilStorage from "../../utils/storage.js";

import apiPedido from "../../services/pedido-api";

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

const index = () => {

  const [idUsuario, setIdUsuario] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [idProduto, setIdProduto] = useState("");

  const adicionarAoPedido = (id, prod, qtd) => {
    
    apiPedido.adicionarItemAoPedido(id, prod, qtd)
      .then(resposta => {
        // console.log(resposta)
        alert("Item adicionado ao carrinho!")
        // window.open("/login", "_self")
      })
      .catch(erro => {
        alert("Erro! Verifique o console.")
        console.log(erro);
      })
  }

  useEffect(() => {
  
    const [ , idUsuario ] = utilStorage.obterTokenDaStorage();
    const [ idProduto, quantidade ] = utilStorage.obterItemDoPedidoDaStorage();

    setIdUsuario(idUsuario)
    setQuantidade(quantidade)
    setIdProduto(idProduto);

    // pode ser a solução pra esperar os produtos carrerarem na tela inicial
    if(!idUsuario || !quantidade || !idProduto) {
      return
    }

    // console.log(idUsuario, idProduto, quantidade);
    
    adicionarAoPedido(idUsuario, idProduto, quantidade );    
  }, []);


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
          {/* {console.log(idUsuario, quantidade, idProduto)} */}
          <Product>
            <div>
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/51DV4ZW6l8L._SX335_BO1,204,203,200_.jpg"
                alt=""
              />
              <div>
                <p>Senhor dos anéis</p>
                <p>J. R. R. Tolkien</p>
              </div>
            </div>
            <Quantity>
              <div>
                <p>5</p>
                <button>+</button>
                <button>-</button>
              </div>
              <p>Máximo de 22 unidades</p>
            </Quantity>
            <DeliveryData>30 de junho</DeliveryData>
            <Price>R$ 50</Price>
          </Product>
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
            <p>R$ 100</p>
          </div>
          <Button>Efetuar pagamento</Button>
        </PaymentModal>
      </PaymentMenu>
    </Container>
  );
};

export default index;
