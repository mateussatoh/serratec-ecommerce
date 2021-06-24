import React from "react";

import Container from "./Container";
import Image from "./Image";
import BookDetails from "./Container";

import Link from "react-router-dom/Link";

const index = () => {
  return (
    <Link to={`/book/1`}>
      <Container>
        <Image>
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/51DV4ZW6l8L._SX335_BO1,204,203,200_.jpg"
            alt=""
          />
        </Image>
        <BookDetails>
          <h4>Trilogia Senhor dos Anéis</h4>
          <p>J. R. R. Tolkien</p>
          <div>
            <p>R$ 99,99</p>
            <p>R$ 89,99</p>
          </div>
        </BookDetails>
      </Container>
    </Link>
  );
};

export default index;
