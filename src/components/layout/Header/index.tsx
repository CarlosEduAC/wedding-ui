import React from "react";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { useWindow } from "@/hooks/useWindowDimension";
import { Container, CartContainer, Title } from "./styles";

interface HeaderProps {
  LogoImg: string;
}

const Header: React.FC<HeaderProps> = ({ LogoImg }) => {
  const { windowWidth } = useWindow();

  return (
    <Container $isMobile={windowWidth <= 490}>
      <Link to="/">
        <img src={LogoImg} alt="Polyana e Carlos Eduardo" />
      </Link>

      <Title>Lista de Presentes</Title>

      <CartContainer>
        <TiShoppingCart size={46} />
        Carrinho
      </CartContainer>
    </Container>
  );
};

export { Header };
