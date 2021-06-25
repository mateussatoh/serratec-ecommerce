import api from './api';

function cadastrar(email, username, senha, nome, cpf, cep, numero, complemento) {
    const produto = {
        email, username, senha, nome, cpf, 
        
        enderecosDoCliente: [{
            cep, numero, complemento
        }]
    }

    return new Promise((resolve, reject) => {
        return api.post('/create', produto)
            .then(response => resolve(response))
            .catch(error => reject(error))
    });
}

function logar(username, senha) {
    return new Promise((resolve, reject) => {
        return api.post('/login', { username, senha })
            .then(response => resolve(response))
            .catch(error => reject(error))
    });
}

function obterCliente(idCliente) {
    return new Promise((resolve, reject) => {
        return api.get(`/cliente/${idCliente}`)
            .then(response => resolve(response))
            .catch(error => reject(error))
    });
}

export default {
    cadastrar,
    logar,
    obterCliente
}
