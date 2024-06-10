import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../api/api";

function CartPage() {
  const queryClient = useQueryClient();

  const { data: cart, isLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: () => api.cart.getCart(),
  });

  console.log(cart);

  const { mutateAsync: removeItemFromCart } = useMutation<
    unknown,
    Error,
    number
  >({
    mutationFn: (productId) => api.cart.removeItemFromCart(productId),
  });

  const handleClickRemoveItemFromCart = (productId: number) => async () => {
    await removeItemFromCart(productId);

    alert("상품 제거됨 ㅠㅠ");

    queryClient.invalidateQueries({ queryKey: ["cart"] });
  };

  return (
    <div>
      <h1>장바구니</h1>
      {isLoading ? (
        "loading..."
      ) : (
        <ul style={{ textAlign: "left" }}>
          {cart.items.map((cartItem) => (
            <li key={cartItem.id}>
              <h5>{cartItem.product.name}</h5>
              <span>[{cartItem.quantity}개]</span>
              <button
                onClick={handleClickRemoveItemFromCart(cartItem.product.id)}
              >
                장바구니에서 제외하기
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartPage;
