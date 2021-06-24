function salvarTokenNaStorage(token){
    localStorage.setItem('token', token)
}

function obterTokenDaStorage(){
    return localStorage.getItem('token');
}

function removerAutenticacao(){
    localStorage.removeItem("token");
}

export default {
    salvarTokenNaStorage,
    obterTokenDaStorage,
    removerAutenticacao
}
