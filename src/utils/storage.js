function salvarTokenNaStorage(token, idUsuario){
    localStorage.setItem('token', token)
    localStorage.setItem('idUsuario', idUsuario)
}

function obterTokenDaStorage(){
    return [
        localStorage.getItem('token'),
        localStorage.getItem('idUsuario'),
    ];
}

function removerAutenticacao(){
    localStorage.removeItem("token");
    localStorage.removeItem("idUsuario");
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
