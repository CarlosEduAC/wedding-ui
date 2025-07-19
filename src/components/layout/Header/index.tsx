import React, { InputHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { useWindow } from "@/hooks/useWindowDimension";
import { Container, CartContainer } from "./styles";
import { Search } from "@/components/ui/Search";

interface HeaderProps extends InputHTMLAttributes<HTMLInputElement> {
  LogoImg: string;
}

const Header: React.FC<HeaderProps> = ({ LogoImg, ...rest }) => {
  const { windowWidth } = useWindow();

  return (
    <Container $isMobile={windowWidth <= 490}>
      <Link to="/">
        <img src={LogoImg} alt="Polyana e Carlos Eduardo" />
      </Link>

      {windowWidth > 490 && <Search icon={FaSearch} {...rest} />}

      <CartContainer>
        Carrinho de Presentes
        <FaShoppingCart />
      </CartContainer>
    </Container>
  );
};

export { Header };
