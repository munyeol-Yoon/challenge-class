// import { useEffect, useState } from "react";
// import api from "../api/api";
// import Page from "../components/Page";

// function HomePage() {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);

//   useEffect(() => {
//     setIsLoading(true);

//     async function init() {
//       try {
//         const products = await api.products.getProducts();

//         setProducts(products);
//         setIsSuccess(true);
//       } catch (err) {
//         setIsError(true);
//       } finally {
//         setIsLoading(false);
//       }
//     }

//     init();
//   }, []);

//   if (isLoading) return <Page>loading...</Page>;
//   if (isError) return <Page>error...</Page>;

//   return (
//     <Page>
//       <ol>
//         {products.map((product) => (
//           <li key={product.id}>{product.name}</li>
//         ))}
//       </ol>
//     </Page>
//   );
// }

// export default HomePage;

import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import api from "../api/api";
import Page from "../components/Page";

function HomePage() {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["brands"], // 가온 데이터를 어떤 키에다가 저장할 것인지, 첫번째 요소는 모델명 string, 두번째 요소는 설명하는 정보를 obj
    queryFn: () => api.products.getProducts(), // 데이터를 가져오는 함수
  });

  if (isLoading) return <Page>loading...</Page>;
  if (isError) return <Page>error...</Page>;

  return (
    <Page>
      <ol>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ol>
    </Page>
  );
}

export default HomePage;

// import { useQuery } from "@tanstack/react-query";
// import api from "../api/api";
// import Page from "../components/Page";

// function HomePage() {
//   const {
//     data: brands,
//     isLoading,
//     isError,
//   } = useQuery({
//     queryKey: ["brands"],
//     queryFn: () => api.brands.getBrands(),
//   });

//   if (isLoading) return <Page>loading...</Page>;
//   if (isError) return <Page>error...</Page>;

//   return (
//     <Page>
//       <ol>
//         {brands.map((brand) => (
//           <li key={brand.id}>{brand.nameKr}</li>
//         ))}
//       </ol>
//     </Page>
//   );
// }

// export default HomePage;
