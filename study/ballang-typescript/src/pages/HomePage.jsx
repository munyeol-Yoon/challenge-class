import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

function HomePage() {
  const navigate = useNavigate();
  const { data: products, isLoading } = useQuery({
    queryKey: ["products", { list: true }],
    queryFn: () => api.products.getProducts(),
  });

  const { mutate: addItemToCart } = useMutation({
    mutationFn: (productId) => api.cart.addItemToCart(productId),
  });

  const handleClickAddItemToCart = (productId) => () => {
    addItemToCart(productId, {
      onSuccess: () => {
        const yes = confirm(
          "상품이 장바구니에 추가되었습니다. 장바구니로 가쉴?"
        );

        if (yes) {
          navigate("/cart");
        }
      },
    });
  };

  return (
    <div>
      <h1>HomePage</h1>

      {isLoading ? (
        "loading..."
      ) : (
        <ul style={{ textAlign: "left" }}>
          {products.map((product) => (
            <li key={product.id}>
              <h5>{product.name}</h5>
              <button onClick={handleClickAddItemToCart(product.id)}>
                장바구니에 추가하기
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HomePage;
