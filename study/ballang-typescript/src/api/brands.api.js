import axios from "axios";

class BrandsAPI {
  async getBrands() {
    const path = "/brands";

    const response = await axios.get(path);
    const result = response.data.result;

    return result;
  }

  async getBrand(brandId) {
    const path = `/brands/${brandId}`;

    const response = await axios.get(path);

    const result = response.data.result;

    return result;
  }
}

export default BrandsAPI;
