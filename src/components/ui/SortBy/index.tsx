import React from "react";
import { Container } from "./styles";

const SortBy: React.FC = () => (
  <Container>
    <label htmlFor="sort-by">Ordenar por:</label>
    <select id="sort-by">
      <option value="name">Maior Preço</option>
      <option value="date">Menor Preço</option>
      <option value="price">Mais Populares</option>
    </select>
  </Container>
);

export { SortBy };
