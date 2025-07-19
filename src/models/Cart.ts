export interface Item {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export type CartContextData = {
  itemListSelected: Item[];
  totalPrice: number;
  addToCart(selectedItem: Item): void;
  increment(name: string): void;
  decrement(name: string): void;
  setEmpty(): void;
};
