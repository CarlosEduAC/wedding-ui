import { Container } from "./styles";
// import flower from "@/assets/bflower.png";

function Header() {
  // const { theme, toggleTheme } = useTheme();
  // const petals = Array.from({ length: 30 }, () => ({
  //   id: Math.random(),
  //   left: Math.random() * 100,
  //   delay: Math.random() * 10,
  //   duration: 3 + Math.random() * 5,
  //   color: colors[Math.floor(Math.random() * colors.length)],
  // }));

  return (
    <Container>
      {/* <PetalContainer>
        {petals.map((petal) => (
          <Petal
            key={petal.id}
            left={petal.left}
            delay={petal.delay}
            duration={petal.duration}
            color={petal.color}
          />
        ))}
      </PetalContainer> */}

      {/* <Image src={flower} /> */}
    </Container>
  );
}

export { Header };
