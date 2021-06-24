import React, { useState, useEffect } from "react";

import apiProduto from "../services/produto-api";

import CategoryBar from "../components/CategoryBar";
import BookCard from "../components/BookCard";
import BookCardContainer from "../components/BookCardContainer";

const MainPage = () => {
  const [produtos, setProdutos] = useState([]);

  const enumCategorias = {
    Autoconhecimento : 1,
    Biografia : 2,
    Ficcao : 3,
    Negocios : 4,
  }

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

  const recuperarProdutosPorCategoria = (idCategoria) => {
    apiProduto.obterProdutosPorCategoria(idCategoria)
      .then((resposta) => {
        console.log(resposta)
        resposta === [] ? setProdutos([]) : setProdutos(resposta.data)
      })
      .catch((erro) => {
        alert("Erro ao listar produtos! Verifique o console.");
        console.log(erro);
      });
  }

  useEffect(() => {
    const recurso = window.location.href.split(":3000")[1];

    switch(recurso) {
      case '/':
        recuperarProdutos();
        break;
      case '/negocios':
        recuperarProdutosPorCategoria(enumCategorias.Negocios);
        break;
      case '/biografias':
        recuperarProdutosPorCategoria(enumCategorias.Biografia);
        break;
      case '/ficcao':
        recuperarProdutosPorCategoria(enumCategorias.Ficcao);
        break;
      case '/auto-conhecimento':
        recuperarProdutosPorCategoria(enumCategorias.Autoconhecimento);
        break;
      default: // should never be reached        
        break;
    }

    console.log(produtos)
  });

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
