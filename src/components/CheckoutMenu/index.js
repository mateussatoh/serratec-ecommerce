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
        setPedido(resposta);
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
