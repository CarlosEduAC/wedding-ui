import React from "react";
import Card from "../Card";
import { Container } from "./styles";

interface CardProps {
  itemList: PokeApiResponse[];
  filter: string;
}

export interface PokeApiResponse {
  id: number;
  name: string;
  url: string;
}

const Cards: React.FC<CardProps> = ({ itemList, filter }) => {
  return (
    <Container>
      {itemList
        .filter((data) => data.name.includes(filter))
        .map((value) => (
          <Card key={value.id} id={value.id} name={value.name} />
        ))}
    </Container>
  );
};
export default Cards;
