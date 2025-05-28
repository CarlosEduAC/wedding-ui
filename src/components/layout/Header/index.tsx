import { FaBars } from "react-icons/fa";
import { Container, LogoImage } from "./styles";
import logo from "@/assets/logo.png";

function Header() {
  return (
    <Container>
      {/* <Link to="/">Início</Link>
      <Link to="/our-story">Nossa História</Link> */}
      <LogoImage src={logo} />

      <FaBars size={32} />

      {/* <Link to="/ceremony">Cerimônia</Link>
      {/* <Link to="/pre-wedding">Fotos</Link>
      <Link to="/guestbook">Lista de Presentes</Link> */}
    </Container>
  );
}

export { Header };
