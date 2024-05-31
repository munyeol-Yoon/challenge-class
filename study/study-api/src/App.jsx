import { useEffect } from "react";
import "./App.css";
import { getBrand, getBrands } from "./api/api.brand";
import { getProduct, getProducts } from "./api/api.product";

function App() {
  // 데이터를 가져온다 -> 통신을 한다. -> http -> 요청 / 응답

  // 요청을 할 때 필요한 정보 -> 서버의 위치 / 주소

  useEffect(() => {
    const productId = 9587059;
    const brandId = 115;

    getProduct(productId);
    getProducts();
    getBrand(brandId);
    getBrands();
  }, []);

  return <main>hello world</main>;
}

export default App;
