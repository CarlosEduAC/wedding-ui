import { useState, useEffect, useCallback } from "react";
import { Footer, Modal } from "@/components/layout";
import { Gallery } from "@/components/ui/Gallery";
import { AutoComplete } from "@/components/ui/AutoComplete";
import {
  Background,
  Container,
  Title,
  Subtitle,
  Caption,
  Message,
  CountdownTimer,
  CountdownTimerUnit,
  ConfirmationButton,
  CardContainer,
  Card,
  ConfirmationForm,
  ConfirmationFormContainer,
  ConfirmationFormInputContainer,
  ConfirmationFormInput,
  ConfirmationFormButton,
  PreWeddingContainer,
} from "./styles";

function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
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

  const changeModalStatus = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <Background>
      <Container>
        <Title>
          <h1>Polyana</h1> <p>&</p> <h1>Carlos Eduardo</h1>
        </Title>
        <Subtitle $primary>Vão se casar </Subtitle>
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

        <ConfirmationButton onClick={() => changeModalStatus()}>
          Confirme sua Presença
        </ConfirmationButton>

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

        <Title>
          <h2>Pré Wedding</h2>
        </Title>

        <PreWeddingContainer>
          <Gallery
            photos={[
              "/image.jpg",
              "/image2.jpeg",
              "/image.jpg",
              "/image2.jpeg",
              "/image.jpg",
              "/image2.jpeg",
              "/image.jpg",
              "/image2.jpeg",
              "/image.jpg",
            ]}
          />
        </PreWeddingContainer>

        <Title>
          <h2>Informações do Evento</h2>
        </Title>

        <CardContainer>
          <Card>
            <div>
              <Subtitle $primary>Data:</Subtitle>
              <Subtitle>18 de Outubro de 2025</Subtitle>
            </div>

            <div>
              <Subtitle $primary>Horário:</Subtitle>
              <Subtitle>15:00</Subtitle>
            </div>

            <div>
              <Subtitle $primary>Local:</Subtitle>
              <Subtitle>
                Paróquia São Benedito Jardim Mariléia - Rio das Ostras, RJ
              </Subtitle>
            </div>

            <iframe
              title="Igreja"
              loading="lazy"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-41.929769%2C-22.500405%2C-41.929769%2C-22.500405&layer=mapnik&marker=-22.500405%2C-41.929769"
            ></iframe>
          </Card>
          <Card>
            <div>
              <Subtitle $primary>Data:</Subtitle>
              <Subtitle>18 de Outubro de 2025</Subtitle>
            </div>

            <div>
              <Subtitle $primary>Horário:</Subtitle>
              <Subtitle>17:00</Subtitle>
            </div>

            <div>
              <Subtitle $primary>Local:</Subtitle>
              <Subtitle>Lux Party - Rio das Ostras, RJ</Subtitle>
            </div>

            <iframe
              title="Lux Party"
              loading="lazy"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-42.0187256%2C-22.4765806%2C-42.0657256%2C-22.4665806&amp;layer=mapnik&marker=-22.4765806%2C-42.0287256"
            ></iframe>
          </Card>
        </CardContainer>
      </Container>

      <Footer />

      <Modal
        hideModal={changeModalStatus}
        active={modalIsOpen}
        title="Confirme sua Presença !"
        subtitle="Sua presença é muito importante para nós!"
      >
        <ConfirmationForm>
          <ConfirmationFormContainer>
            <ConfirmationFormInputContainer>
              <label htmlFor="phone">WhatsApp</label>
              <ConfirmationFormInput
                name="phone"
                type="tel"
                placeholder="(99) 99999-9999"
                required
              />
            </ConfirmationFormInputContainer>

            <ConfirmationFormInputContainer>
              <AutoComplete
                options={[
                  "Carlos Eduardo Alves Cardoso",
                  "Polyana Pinheiro Cardoso",
                  "Laura Salles Cardoso",
                  "Marlene Alves Cardoso",
                ]}
                placeholder="Informe o nome do convidado"
              />
            </ConfirmationFormInputContainer>
          </ConfirmationFormContainer>

          <ConfirmationFormButton type="submit">
            Confirmar Presença
          </ConfirmationFormButton>
        </ConfirmationForm>
      </Modal>
    </Background>
  );
}

export default Home;
