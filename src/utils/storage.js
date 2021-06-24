function salvarTokenNaStorage(token){
    localStorage.setItem('token', token)
}

function obterTokenDaStorage(){
    return localStorage.getItem('token');
}

function removerAutenticacao(){
    localStorage.removeItem("token");
}

function salvarItemDoPedidoNaStorage(idProduto, quantidade){
    localStorage.setItem('idProduto', idProduto);
    localStorage.setItem('quantidade', quantidade);
}

function obterItemDoPedidoDaStorage(){
    return [
        localStorage.getItem('idProduto'),
        localStorage.getItem('quantidade')
    ];
}

export default {
    salvarTokenNaStorage,
    obterTokenDaStorage,
    removerAutenticacao,
    salvarItemDoPedidoNaStorage,
    obterItemDoPedidoDaStorage
}
