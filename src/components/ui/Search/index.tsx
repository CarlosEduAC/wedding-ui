import React, { InputHTMLAttributes } from "react";
import { IconBaseProps } from "react-icons";
import { Container } from "./styles";

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: React.ComponentType<IconBaseProps>;
}

const Search: React.FC<SearchProps> = ({ icon: Icon, ...rest }) => (
  <Container>
    <input type="text" placeholder="Busque aqui seu presente" {...rest} />
    {Icon && <Icon size={18} />}
  </Container>
);

export { Search };
