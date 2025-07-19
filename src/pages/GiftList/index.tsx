import Cards from "@/components/ui/Cards";
import { Header, Footer } from "@/components/layout";
import { Background } from "@/pages/Home/styles";
import { Container, Title } from "./styles";
import LogoImg from "@/assets/logo.png";

function GiftList() {
  return (
    <Background>
      <Header
        LogoImg={LogoImg}
        name="search"
        // value={item}
        // onChange={(e) => setItemName(e.target.value)}
      />

      <Container>
        <Title>
          <h1>Lista de Presentes</h1>
          <p>Dê um presente para Polyana & Carlos Eduardo.</p>
          <p>Torne esse dia ainda mais especial!</p>
        </Title>

        <Cards
          itemList={[
            { id: 1, name: "Gift 1", url: "" },
            { id: 2, name: "Gift 2", url: "" },
            { id: 3, name: "Gift 3", url: "" },
            { id: 4, name: "Gift 4", url: "" },
            { id: 5, name: "Gift 5", url: "" },
            { id: 6, name: "Gift 6", url: "" },
            { id: 7, name: "Gift 7", url: "" },
            { id: 8, name: "Gift 8", url: "" },
            { id: 9, name: "Gift 9", url: "" },
            { id: 10, name: "Gift 10", url: "" },
          ]}
          filter=""
        />
      </Container>

      <Footer />
    </Background>
  );
}

export default GiftList;
