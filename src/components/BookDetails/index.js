import React from "react";
// import { useState } from "react";

import Container from "./Container";
import BuyModal from "./BuyModal";
import Description from "./Description";
import Title from "./Title";
import Image from "./Image";
import Quantity from "./Quantity";
import Shipping from "./Shipping";
import Buttons from "./Buttons";
import Price from "./Price";

// const [quantity, setQuantity] = useState(0);

const index = (props) => {
  

  return (
    <Container>
      <Image>
        <img
          src={props.dados.url}
          alt=""
        />
      </Image>
      <Description>{props.dados.descricao}</Description>
      <BuyModal>
        <Title>
          <h2>{props.dados.nome}</h2>
          <p>Autor Not Found</p>
        </Title>

        <Quantity>
          <div>
            <p>5</p>
            <button>+</button>
            <button>-</button>
          </div>
          <p>{`Máximo de ${props.dados.quantidadeEmEstoque} unidades`}</p>
        </Quantity>
        <Price>
          <p>{`R$ ${props.dados.preco}`}</p>
        </Price>
        <Shipping>
          <p>Calcular frete</p>
          <input type="text" placeholder="Digite seu CEP" />
        </Shipping>
        <Buttons>
          <button>Adicionar ao carrinho</button>
          <button>Comprar agora</button>
        </Buttons>
      </BuyModal>
    </Container>
  );
};

export default index;
