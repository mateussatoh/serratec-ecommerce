import React, { useState, useEffect } from "react";

import apiProduto from "../services/produto-api";
import utilStorage from "../utils/storage.js";

import BookDetails from "../components/BookDetails";
import CategoryBar from "../components/CategoryBar";

const ProductDetails = () => {

  const [produto, setProduto] = useState({});

  const recuperarProduto = () => {
    // recupera id do produto a partir da url
    const id = window.location.href.split('book/')[1];

    apiProduto.obterProdutoPorId(id)
      .then(resposta => {
        setProduto(resposta.data);
      })
      .catch(erro => {
        alert("Erro ao listar produtos! Verifique o console.")
        console.log(erro);
      })
  }

  useEffect(() => {

    let token = utilStorage.obterTokenDaStorage();

    if (!token) {
      window.open("/login", "_self");
      return;
    }

    recuperarProduto();
  }, []);

  return (
    <div>
      <CategoryBar />
      <BookDetails dados={produto} />
    </div>
  );
};

export default ProductDetails;
