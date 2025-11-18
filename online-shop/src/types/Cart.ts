export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export type CartItem = Product & {
  quantity: number;
};

export type CartAction =
  | { type: "ADD_TO_CART"; payload: Product }
  | { type: "REMOVE_FROM_CART"; payload: number }
  | { type: "INCREASE"; payload: number } 
  | { type: "DECREASE"; payload: number }; 
