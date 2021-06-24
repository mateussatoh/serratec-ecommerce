import React, { useState, useEffect } from "react";

import apiProduto from "../services/produto-api";
// import apiCategoria from "../services/categoria-api";
import utilStorage from "../utils/storage.js";

import CategoryBar from "../components/CategoryBar";
import BookCard from "../components/BookCard";
import BookCardContainer from "../components/BookCardContainer";

const MainPage = () => {
  const [produtos, setProdutos] = useState([]);

  const recuperarProdutos = () => {
    apiProduto
      .obterTodos()
      .then((resposta) => {
        setProdutos(resposta.data);
      })
      .catch((erro) => {
        alert("Erro ao listar produtos! Verifique o console.");
        console.log(erro);
      });
  };

  // const pegarPorCategoria = () => {  }

  useEffect(() => {
    // let token = utilStorage.obterTokenDaStorage();

    // if (!token) {
    //   window.open("/login", "_self");
    //   return;
    // }

    recuperarProdutos();
  }, []);

  return (
    <div>
      <CategoryBar />
      <BookCardContainer>
        {produtos.length === 0 ? "Não há produtos cadastrados" : ""}

        {produtos.map((produto) => (
          <BookCard key={produto.id}>{produto}</BookCard>
        ))}
      </BookCardContainer>
    </div>
  );
};

export default MainPage;
