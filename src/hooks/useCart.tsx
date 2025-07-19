import { useContext } from "react";
import { CartContext } from "@/providers/CartProvider";
import { type CartContextData } from "@/models/Cart";

const useCart = (): CartContextData => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};

export { useCart };
