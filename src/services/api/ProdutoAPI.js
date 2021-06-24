import axios from "axios";

const api = axios.create({
  baseURL: "https://serratec-ecommerce-grupo2.herokuapp.com/produto",
});

export default api;
