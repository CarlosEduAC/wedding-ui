import React from "react";
import Card from "../Card";
import { CardsProps } from "../../../models/Cards";
import { Container } from "./styles";
import { useWindow } from "@/hooks/useWindowDimension";

const Cards: React.FC<CardsProps> = ({ items, filter }) => {
  const { windowWidth } = useWindow();
  return (
    <Container $isMobile={windowWidth <= 490}>
      {items
        .filter((data) => data.name.includes(filter))
        .map((value) => (
          <Card
            key={value.id}
            id={value.id}
            name={value.name}
            image={value.image}
            price={value.price}
            quantity={value.quantity}
          />
        ))}
    </Container>
  );
};
export default Cards;
