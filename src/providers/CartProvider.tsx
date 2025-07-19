import {
  createContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { type ProvidersProps } from "@/models/Providers";
import { Item, CartContextData } from "@/models/Cart";

const CartContext = createContext<CartContextData>({} as CartContextData);

const CartProvider = ({ children }: ProvidersProps) => {
  const [itemListSelected, setItemListSelected] = useState<Item[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const addToCart = useCallback((selectedItem: Item) => {
    setItemListSelected((prev) => [...prev, selectedItem]);
  }, []);

  const increment = useCallback((name: string) => {
    setItemListSelected((prev) =>
      prev.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }, []);

  const decrement = useCallback((name: string) => {
    setItemListSelected((prev) =>
      prev.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  }, []);

  const setEmpty = useCallback(() => {
    setItemListSelected([]);
  }, []);

  useEffect(() => {
    const total = itemListSelected.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  }, [itemListSelected]);

  const contextValue = useMemo(
    () => ({
      itemListSelected,
      totalPrice,
      addToCart,
      increment,
      decrement,
      setEmpty,
    }),
    [itemListSelected, totalPrice, addToCart, increment, decrement, setEmpty]
  );

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export { CartContext, CartProvider };
