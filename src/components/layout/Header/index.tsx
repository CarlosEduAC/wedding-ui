import { Fragment } from "react";
// import { Link } from "react-scroll";
// import logo from "@/assets/img1.jpeg";
import { Container, Image, Navbar, List, Item } from "./styles";

// const navbarItens = [
//   { id: "beginning", name: "Começo" },
//   { id: "about", name: "Sobre" },
//   { id: "aplication", name: "Aplicativo" },
//   { id: "contact", name: "Contato" },
//   { id: "login", name: "Login" },
// ];

function Header() {
  // const renderItens = (item: { id: string; name: string }) => {
  //   return (
  //     <Item key={item.id}>
  //       <Link to={item.id} spy={true} smooth={true}>
  //         {item.name}
  //       </Link>
  //     </Item>
  //   );
  // };

  return (
    <Fragment>
      <Container>
        {/* <Image src={logo} alt="Logo polyana + carlos eduardo" /> */}

        {/* <Navbar>
          <List>
            {navbarItens &&
              navbarItens.map((item) => {
                return item && renderItens(item);
              })}
          </List>
        </Navbar> */}
      </Container>
    </Fragment>
  );
}

export { Header };
