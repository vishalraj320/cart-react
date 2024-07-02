import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com/",
});

export const login = (username, password) => {
  return api.post("/auth/login", { username, password });
};

export const fetchProducts = (limit, skip) => {
  return api.get(`/products?limit=${limit}&skip=${skip}`);
};

export const fetchCart = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};
