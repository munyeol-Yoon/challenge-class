import { client } from "./api";

// axios.get();
// axios.post();

// const myAxiosInstance = axios.create({ baseURL: "https://www.naver.com" });
// const myAxiosInstance2 = axios.create({ baseURL: "https://www.daum.net" });
/**
 * 1. 나만의 인스턴스니까 커스텀 할 수 있다.
 * 2. 여러 개의 나만의 인스턴스를 만들 수 있다.
 */

export async function getBrands() {
  const endpoint = `/brands`;
  const response = await client.get(endpoint);
  const data = response.data;

  return data;
}

export async function getBrand(brandId) {
  const endpoint = `/brands/${brandId}`;
  const response = await client.get(endpoint);
  const data = response.json();

  return data;
}
