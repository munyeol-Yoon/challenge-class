class CartAPI {
  #axios;
  constructor(axios) {
    this.#axios = axios;
  }

  async getCart() {
    const path = "/cart";
    const response = await this.#axios.get(path);
    const result = response.data.result;

    return result;
  }

  async addItemToCart(productId) {
    const path = `/cart/products/${productId}`;
    const response = await this.#axios.post(path);
    const result = response.data.result;

    return result;
  }

  async removeItemFromCart(productId) {
    const path = `/cart/products/${productId}`;
    const response = await this.#axios.delete(path);
    const result = response.data.result;

    return result;
  }

  async clearItemInCart(productId) {
    const path = `/cart/products/${productId}/clear`;

    const response = await this.#axios.delete(path);
    const result = response.data.result;

    return result;
  }
}

export default CartAPI;
