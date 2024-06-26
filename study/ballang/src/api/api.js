import axios from "axios";
import AuthAPI from "./auth.api";
import BrandsAPI from "./brands.api";
import CartAPI from "./cart.api";
import ProductAPI from "./product.api";

const BASE_URL = `https://api.ballang.yoojinyoung.com`;

class API {
  #axios;

  auth;
  brands;
  cart;
  products;

  constructor() {
    this.#axios = axios.create({ baseURL: BASE_URL, withCredentials: true }); // withCredentials -> 쿠키관련
    this.auth = new AuthAPI(this.#axios);
    this.brands = new BrandsAPI();
    this.cart = new CartAPI(this.#axios);
    this.products = new ProductAPI(this.#axios);
  }

  setAccessToken(accessToken) {
    this.#axios.defaults.headers.common.Authorization = accessToken
      ? `Bearer ${accessToken}`
      : "";
  }
}

const api = new API();

export default api;
