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

function obterProdutosPorCategoria(idCategoria) {
    return new Promise((resolve, reject) => {
        return api.get(`/categoria/${idCategoria}/produtos`)
        .then(response => resolve(response))
        .catch(error => reject(error))
    });
}

export default {
    obterTodos,
    obterProdutoPorId,
    obterProdutosPorCategoria
}
