import React, { InputHTMLAttributes } from "react";
import { IconBaseProps } from "react-icons";
import { Container } from "./styles";
import { useWindow } from "@/hooks/useWindowDimension";

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: React.ComponentType<IconBaseProps>;
}

const Search: React.FC<SearchProps> = ({ icon: Icon, ...rest }) => {
  const { windowWidth } = useWindow();

  return (
    <Container isMobile={windowWidth <= 490}>
      <input type="text" placeholder="Busque aqui seu presente" {...rest} />
      {Icon && <Icon size={18} />}
    </Container>
  );
};

export { Search };
