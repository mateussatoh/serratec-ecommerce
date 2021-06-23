import React from "react";

import Container from "./Container";
import Category from "./Category";

const index = () => {
  return (
    <Container>
      <Category>Negócios</Category>
      <Category>Biografias</Category>
      <Category>Ficção</Category>
      <Category>Auto conhecimento</Category>
    </Container>
  );
};

export default index;
