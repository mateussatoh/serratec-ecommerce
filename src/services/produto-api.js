import api from './api';

function obterTodos(){
    return new Promise((resolve, reject) => {
        return api.get('/produto')
        .then(response => resolve(response))
        .catch(error => reject(error))
    });
}

export default {
    obterTodos
}
