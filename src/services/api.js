import axios from "axios";
import utilStorage from "../utils/storage";

const api = axios.create({
    baseURL: 'https://serratec-ecommerce-grupo2.herokuapp.com'
})

api.interceptors.request.use((config) => {
    let [token, idUsuario] = utilStorage.obterTokenDaStorage();

    if(token && idUsuario) {
        config.headers.Authorization = token; 
    }

    return config;
});

export default api;
