import React, { useState, useEffect } from "react";

import Container from "./Container";
import Image from "./Image";
import BookDetails from "./BookDetails";

import Link from "react-router-dom/Link";

const index = (props) => {
  const [quantidade, setQuantidade] = useState(1);
  // console.log(props);
  return (
    <Container>
      <Link to={`/book/${props.children.id}`}>
        <Image>
          <img src={props.children.url} alt="" />
        </Image>
        <BookDetails>
          <h4>{props.children.nome}</h4>
          <p>{props.children.autor}</p>
          <div>
            <s>De R$ {props.children.preco}</s>
            <p>Por R$ {props.children.preco - 10}</p>
          </div>
        </BookDetails>
      </Link>
    </Container>
  );
};

export default index;
