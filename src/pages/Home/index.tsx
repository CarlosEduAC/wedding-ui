import { Fragment, useState, useEffect, useCallback } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Container,
  Title,
  Subtitle,
  Caption,
  Message,
  CountdownTimer,
  CountdownTimerUnit,
  ConfirmationButton,
  // Images,
} from "./styles";

function Home() {
  const calculateTimeLeft = useCallback(() => {
    const eventTime = new Date("2025-10-18T15:00:00Z");
    const difference = +eventTime - +new Date();

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }, []);

  const [timeLeft, setTimeLeft] = useState<
    ReturnType<typeof calculateTimeLeft>
  >(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  if (!timeLeft) {
    return <p>O evento já começou!</p>;
  }

  return (
    <Fragment>
      <Header />

      <Container>
        <Title>
          <h1>Polyana</h1> <p>&</p> <h1>Carlos Eduardo</h1>
        </Title>
        <Subtitle primary>Vão se casar </Subtitle>
        <Subtitle>Em 18 de Outubro de 2025</Subtitle>
        <Subtitle>
          Na Paróquia São Benedito Jardim Mariléia - Rio das Ostras, RJ
        </Subtitle>

        <Caption>Esperamos que você faça parte do nosso dia especial!</Caption>

        <CountdownTimer>
          <CountdownTimerUnit>
            <b>{timeLeft?.days ?? "00"}</b> <p>Dias</p>
          </CountdownTimerUnit>
          <CountdownTimerUnit>
            <b>{timeLeft?.hours ?? "00"}</b> <p>Horas</p>
          </CountdownTimerUnit>
          <CountdownTimerUnit>
            <b>{timeLeft?.minutes ?? "00"}</b> <p>Minutos</p>
          </CountdownTimerUnit>
          <CountdownTimerUnit>
            <b>{timeLeft?.seconds ?? "00"}</b> <p>Segundos</p>
          </CountdownTimerUnit>
        </CountdownTimer>

        <ConfirmationButton>Confirme sua Presença</ConfirmationButton>

        <Message>
          <b>"Um Amor, Uma História, Um Dia Inesquecível"</b>

          <p>Seja bem-vindo ao nosso site de casamento!</p>

          <p>
            Aqui começa um novo capítulo da nossa história — e você faz parte
            dele. Após anos de amor, risos e aprendizados, decidimos dar o passo
            mais importante de nossas vidas: dizer "sim" diante de Deus, da vida
            e das pessoas que mais amamos.
          </p>

          <p>
            Criamos este espaço com carinho para compartilhar os detalhes do
            nosso grande dia. Esperamos que você se sinta envolvido por esse
            momento especial e viva conosco toda a emoção dessa jornada.
          </p>

          <p>Com amor,</p>
          <b>Polyana & Carlos Eduardo</b>
        </Message>

        {/* <Images src={img} /> */}
      </Container>

      <Footer />
    </Fragment>
  );
}

export default Home;
