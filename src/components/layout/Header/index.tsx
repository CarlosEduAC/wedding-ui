import React from "react";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { useWindow } from "@/hooks/useWindowDimension";
import {
  Container,
  CartContainer,
  Title,
  ContainerMobile,
  TitleMobile,
  GroupMobile,
} from "./styles";

interface HeaderProps {
  LogoImg: string;
}

const Header: React.FC<HeaderProps> = ({ LogoImg }) => {
  const { windowWidth } = useWindow();

  return (
    <React.Fragment>
      {windowWidth <= 490 ? (
        <ContainerMobile>
          <GroupMobile>
            <Link to="/">
              <img src={LogoImg} alt="Polyana e Carlos Eduardo" />
            </Link>

            <TiShoppingCart size={36} />
          </GroupMobile>

          <TitleMobile>Lista de Presentes</TitleMobile>
        </ContainerMobile>
      ) : (
        <Container>
          <Link to="/">
            <img src={LogoImg} alt="Polyana e Carlos Eduardo" />
          </Link>

          <Title>Lista de Presentes</Title>

          <CartContainer>
            <TiShoppingCart size={46} />
            Carrinho
          </CartContainer>
        </Container>
      )}
    </React.Fragment>
  );
};

export { Header };
