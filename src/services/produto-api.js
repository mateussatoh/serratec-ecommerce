import api from './api';

function obterTodos(){
    return new Promise((resolve, reject) => {
        return api.get('/produto')
        .then(response => resolve(response))
        .catch(error => reject(error))
    });
}

function obterProdutoPorId(idProduto) {
    return new Promise((resolve, reject) => {
        return api.get(`/produto/${idProduto}`)
        .then(response => resolve(response))
        .catch(error => reject(error))
    });
}

// function obterProdutosPorCategoria() {}

export default {
    obterTodos,
    obterProdutoPorId
}
