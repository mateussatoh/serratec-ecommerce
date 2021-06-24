import React, { useState } from "react";

import utilStorage from "../../utils/storage";

import Container from "./Container";
import BuyModal from "./BuyModal";
import Description from "./Description";
import Title from "./Title";
import Image from "./Image";
import Quantity from "./Quantity";
import Shipping from "./Shipping";
import Buttons from "./Buttons";
import Price from "./Price";

const index = (props) => {
  const [quantity, setQuantity] = useState(1);

  const addQuantity = () => {
    if (props.dados.quantidadeEmEstoque > quantity) {
      setQuantity(quantity + 1);
    }
  };

  const removeQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAdicionarAoCarrinho = () => {
    utilStorage.salvarItemDoPedidoNaStorage(props.dados.id, quantity);
    
    window.open("/login", "_self");
  }

  return (
    <Container>
      <Image>
        <img src={props.dados.url} alt="" />
      </Image>
      <Description>{props.dados.descricao}</Description>
      <BuyModal>
        <Title>
          <h2>{props.dados.nome}</h2>
          <p>{props.dados.autor}</p>
        </Title>

        <Quantity>
          {quantity === props.dados.quantidadeEmEstoque ? (
            <p>{`Máximo de ${props.dados.quantidadeEmEstoque} unidades`}</p>
          ) : null}
          <div>
            <p>{quantity}</p>
            <button onClick={addQuantity}>+</button>
            <button onClick={removeQuantity}>-</button>
          </div>
        </Quantity>
        <Price>
          <s>{`De R$ ${props.dados.preco}`}</s>
          <p>{`Por RS ${props.dados.preco - 10}`}</p>
        </Price>
        <Shipping>
          <p>Calcular frete</p>
          <input type="text" placeholder="Digite seu CEP" />
        </Shipping>
        <Buttons>
          <button onClick={handleAdicionarAoCarrinho}>Adicionar ao carrinho</button>
          <button>Comprar agora</button>
        </Buttons>
      </BuyModal>
    </Container>
  );
};

export default index;
