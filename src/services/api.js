import axios from "axios";
import utilStorage from "../utils/storage";

const api = axios.create({
    baseURL: 'https://serratec-ecommerce-grupo2.herokuapp.com'
})

api.interceptors.request.use((config) => {
    let token = utilStorage.obterTokenDaStorage();

    if(token) {
        config.headers.Authorization = token; 
    }

    return config;
});

export default api;
