import React from "react";
import { FaHeart, FaMinus, FaPlus } from "react-icons/fa";
import { useCart } from "@/hooks/useCart";
import { CardProps } from "../../../models/Card";
import {
  Figure,
  FigureImage,
  FigureCaption,
  ButtonGroup,
  ButtonAdd,
  FigurePrice,
} from "./styles";
import { useWindow } from "@/hooks/useWindowDimension";

const Card: React.FC<CardProps> = ({ id, name, image, price, quantity }) => {
  const { addToCart, increment, decrement } = useCart();
  const { windowWidth } = useWindow();

  return (
    <Figure key={id}>
      <FigureImage src={image} alt={name} $isMobile={windowWidth <= 490} />

      <FigureCaption $isMobile={windowWidth <= 490}>
        <strong>{name}</strong>

        <FigurePrice $isMobile={windowWidth <= 490}>
          <FaHeart color="red" />
          <span>{price.toFixed(2)}</span>
        </FigurePrice>

        {quantity <= 0 ? (
          <ButtonGroup $isMobile={windowWidth <= 490}>
            <button type="button" onClick={() => decrement(name)}>
              <FaMinus />
            </button>

            <label>{quantity}</label>

            <button type="button" onClick={() => increment(name)}>
              <FaPlus />
            </button>
          </ButtonGroup>
        ) : (
          <ButtonAdd
            type="button"
            onClick={() => addToCart({ id, name, image, price, quantity })}
            $isMobile={windowWidth <= 490}
          >
            Adicionar
          </ButtonAdd>
        )}
      </FigureCaption>
    </Figure>
  );
};

export default Card;
