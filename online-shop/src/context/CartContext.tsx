import type React from "react";
import { cartReducer, type CartState } from "./CartReducer"
import type { CartAction } from "../types/Cart";
import { createContext, useContext, useReducer } from "react";

//تعریف نوع کانتکست
type CartContextType = {
  state : CartState;
  dispatch : React.Dispatch<CartAction>
}

//ساخت کانتکست
const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({children} : {children : React.ReactNode}){
  const initialState : CartState = {items:[]};

  const [state,dispatch]=useReducer(cartReducer,initialState);

  return (
    <CartContext.Provider value={{state,dispatch}}>
      {children}
    </CartContext.Provider>
  );

}

//هوک اختصاصی useCart
export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used inside <CartProvider>");
  }
  return ctx;
}

