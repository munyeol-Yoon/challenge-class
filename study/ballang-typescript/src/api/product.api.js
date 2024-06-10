class ProductAPI {
  #axios;

  constructor(axios) {
    this.#axios = axios;
  }
  async getProducts() {
    const path = "/products";
    const response = await this.#axios.get(path);
    const result = response.data.result;

    return result;
  }

  async getProduct(productId) {
    const path = `/products/${productId}`;
    const response = await this.#axios.get(path);
    const result = response.data.result;

    return result;
  }
}

export default ProductAPI;
