import React from "react";

import Container from "./Container";
import Category from "./Category";
import CategoryContainer from "./CategoryContainer";

const index = () => {
  return (
    <Container>
      <CategoryContainer>
        <Category>Negócios</Category>
        <Category>Biografias</Category>
        <Category>Ficção</Category>
        <Category>Auto conhecimento</Category>
      </CategoryContainer>
    </Container>
  );
};

export default index;
