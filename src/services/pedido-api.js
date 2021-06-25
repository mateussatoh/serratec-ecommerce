import api from './api';

function adicionarItemAoPedido(idUsuario, idProduto, quantidade){
    // const itemPedido = { 
    //     idDoClienteLogado : idUsuario,
    //     idProduto,
    //     quantidade
    // }

    console.log(idUsuario, idProduto, quantidade)

    return new Promise((resolve, reject) => {
        return api.post('/pedido/detalhes', { idDoClienteLogado : parseInt(idUsuario), idProduto : parseInt(idProduto), quantidade : parseInt(quantidade)})
        .then(response => resolve(response))
        .catch(error => reject(error))
    });
}

export default {
    adicionarItemAoPedido
}
