// import { ToggleButton } from "@/components/ui/ToggleButton";
// import { HeartSwitch } from "@/components/ui/HeartSwitch";
import { Fragment } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container, Title, Subtitle, Image } from "./styles";
import img from "@/assets/img1.jpeg";
// import { useTheme } from "@/hooks/useTheme";

function Home() {
  // const { theme, toggleTheme } = useTheme();

  return (
    <Fragment>
      <Header />

      <Container>
        <Title>
          <h2>Polyana</h2> <h2>&</h2> <h2>Carlos Eduardo</h2>
        </Title>
        <Subtitle>18 de Outubro de 2025</Subtitle>

        <Image src={img} />
      </Container>

      <Footer />

      {/* <HeartSwitch
        id="theme-heart"
        isActive={theme === "light"}
        onToggle={toggleTheme}
      />

      <ToggleButton
        id="theme-toggle"
        isActive={theme === "light"}
        onToggle={toggleTheme}
      /> */}
    </Fragment>
  );
}

export default Home;
