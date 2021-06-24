import React, { useState, useEffect } from "react";

import Container from "./Container";
import Image from "./Image";
import BookDetails from "./Container";

import Link from "react-router-dom/Link";

const index = (props) => {

  const [quantidade, setQuantidade] = useState(1);

  return (
    <Link to={`/book/${props.children.id}`}>
      <Container>
        <Image>
          <img
            src={props.children.url}
            alt=""
          />
        </Image>
        <BookDetails>
          <h4>{props.children.nome}</h4>
          <p>Autor Not found</p> {/* Atributo não existente na API */}
          <div>
            <p>De R$ {props.children.preco}</p>
            <p>Por R$ {props.children.preco - 10}</p>
          </div>
        </BookDetails>
      </Container>
    </Link>
  );
};

export default index;
