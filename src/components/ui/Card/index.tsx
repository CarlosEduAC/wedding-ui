import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
// import api from "../../services/api";
import { useCart } from "@/hooks/useCart";
import { Item } from "@/models/Cart";
import { FaMinus, FaPlus } from "react-icons/fa";
import {
  Figure,
  FigureImage,
  FigureCaption,
  ButtonGroup,
  ButtonAdd,
  FigurePrice,
} from "./styles";

interface CardProps {
  id: number;
  name: string;
}

const Card: React.FC<CardProps> = ({ id, name }) => {
  const { addToCart, increment, decrement } = useCart();
  const [item, setItem] = useState<Item>({} as Item);

  const existsItem: boolean = Object.keys(item).length > 0;

  useEffect(() => {
    async function getItemInfo() {
      // const response = await api.get(`item/${id}`);

      setItem({
        id,
        image: `https://imgs.casasbahia.com.br/55032021/1g.jpg`,
        name,
        price: 239.0,
        quantity: 0,
      });
    }

    getItemInfo();
  }, [id, name]);

  return (
    existsItem && (
      <Figure key={id}>
        <FigureImage src={item?.image} alt={item?.name} />

        <FigureCaption>
          <strong>{item.name}</strong>

          <FigurePrice>
            <FaHeart color="red" />
            <span>{item.price.toFixed(2)}</span>
          </FigurePrice>

          {item.quantity > 0 ? (
            <ButtonGroup>
              <button type="button" onClick={() => decrement(item.name)}>
                <FaMinus />
              </button>

              <label>{item.quantity}</label>

              <button type="button" onClick={() => increment(item.name)}>
                <FaPlus />
              </button>
            </ButtonGroup>
          ) : (
            <ButtonAdd type="button" onClick={() => addToCart(item)}>
              Adicionar
            </ButtonAdd>
          )}
        </FigureCaption>
      </Figure>
    )
  );
};

export default Card;
