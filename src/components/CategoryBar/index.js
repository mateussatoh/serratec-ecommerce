import React from "react";

import { Link } from "react-router-dom";

import Category from "./Category";
import CategoryContainer from "./CategoryContainer";

const index = () => {
  return (
    <CategoryContainer>
      <Link to="/negocios">
        <Category>Negócios</Category>
      </Link>
      <Link to="/biografias">
        <Category>Biografias</Category>
      </Link>
      <Link to="/ficcao">
        <Category>Ficção</Category>
      </Link>
      <Link to="/auto-conhecimento">
        <Category>Auto conhecimento</Category>
      </Link>
    </CategoryContainer>
  );
};

export default index;
