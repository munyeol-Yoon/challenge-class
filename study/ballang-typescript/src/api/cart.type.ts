export type GetCartData = {
  error: null;
  success: true;
  result: { id: number; items: CartItem[] };
};

export type CartItem = {
  cartId: number;
  id: number;
  product: any;
  productId: number;
  quantity: number;
  createdAt: string;
  updatedAt: string;
};
