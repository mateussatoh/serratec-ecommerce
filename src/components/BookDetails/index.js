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

// const [quantity, setQuantity] = useState(0);

const index = () => {
  return (
    <Container>
      <Image>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/51DV4ZW6l8L._SX335_BO1,204,203,200_.jpg"
          alt=""
        />
      </Image>
      <Description>
        Um clássico de Napoleon Hill que tem mudado milhões de vidas! Sua mente
        é um talismã secreto. De um lado é dominado pelas letras AMP (Atitude
        Mental Positiva) e, por outro , pelas letras AMN (Atitude Mental
        Negativa). Uma atitude positiva irá, naturalmente, atrair sucesso e
        prosperidade. A atitude negativa vai roubá-lo de tudo que torna a vida
        digna de ser vivida. Seu sucesso, saúde, felicidade e riqueza dependem
        de qual lado você irá usar. Quando o pioneiro motivacional Napoleon Hill
        e o CEO Quando o pioneiro motivacional Napoleon Hill e o CEO milionário
        W. Clement Stone se uniram para formar uma das parcerias mais notáveis
        de todos os tempos, o resultado foi Atitude Mental Positiva, o fenômeno
        editorial que sugeriu ao mundo que, com a atitude certa, qualquer um
        pode realizar seus sonhos.
      </Description>
      <BuyModal>
        <Title>
          <h2>Atitude mental positiva</h2>
          <p>Napoleon Hill</p>
        </Title>

        <Quantity>
          <div>
            <p>5</p>
            <button>+</button>
            <button>-</button>
          </div>
          <p>Máximo de 22 unidades</p>
        </Quantity>
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
