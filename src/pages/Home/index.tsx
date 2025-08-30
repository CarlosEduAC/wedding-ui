import api from "@/services/wedding-api";
import VideoPlayer from "@/components/ui/VideoPlayer";
import { useState, useEffect, useCallback } from "react";
import { Footer, Modal } from "@/components/layout";
import { Gallery } from "@/components/ui/Gallery";
import { AutoComplete } from "@/components/ui/AutoComplete";
import { useWindow } from "@/hooks/useWindowDimension";
import { Invited } from "@/models/Invited";
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
  const [invited, setInvited] = useState<Invited[]>([]);
  const [confirmedInviteds, setConfirmedInviteds] = useState<Invited[]>([]);
  const [confirmedPhoneInvited, setConfirmedPhoneInvited] =
    useState<string>("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [videoIsOpen, setvideoIsOpen] = useState(false);
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
  const fetchInvitedGuests = useCallback(async () => {
    try {
      const response = await api.get("/inviteds");
      setInvited(response.data.inviteds);
    } catch (error) {
      console.error("Error fetching invited guests:", error);
    }
  }, []);
  const { windowWidth } = useWindow();

  const [timeLeft, setTimeLeft] = useState<
    ReturnType<typeof calculateTimeLeft>
  >(calculateTimeLeft());

  useEffect(() => {
    fetchInvitedGuests();
  }, [fetchInvitedGuests]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  useEffect(() => {
    const alreadyVisited = localStorage.getItem("Wedding:HasVisited");

    if (!alreadyVisited) {
      setvideoIsOpen(true);
      localStorage.setItem("Wedding:HasVisited", "true");
    }
  }, []);

  const changeModalStatus = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const changeVideoStatus = () => {
    setvideoIsOpen(!videoIsOpen);
  };

  const handleConfirmedInvitedPhone = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let input = e.target.value.replace(/\D/g, "");

    if (input.length > 0) {
      input = "(" + input;
    }
    if (input.length > 3) {
      input = input.slice(0, 3) + ") " + input.slice(3);
    }
    if (input.length > 10) {
      input = input.slice(0, 10) + "-" + input.slice(10, 14);
    }

    setConfirmedPhoneInvited(input);
  };

  const handleConfirmedInviteds = (value: Invited[]) => {
    setConfirmedInviteds(value);
  };

  const handleConfirmationSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const whatsapp = confirmedPhoneInvited.replace(/\D/g, "");

    for (const confirmedInvited of confirmedInviteds) {
      const data = {
        id: confirmedInvited.id,
        name: confirmedInvited.name,
        whatsapp,
        confirm: true,
      };

      console.log(data);

      api.put(`/inviteds/${confirmedInvited.id}`, data);
    }

    setConfirmedInviteds([]);
    setConfirmedPhoneInvited("");
  };

  return (
    <Background>
      <Container $isMobile={windowWidth <= 490}>
        <Title $isMobile={windowWidth <= 490}>
          <h1>Polyana</h1> <p>&</p> <h1>Carlos Eduardo</h1>
        </Title>
        <Subtitle $primary $isMobile={windowWidth <= 490}>
          Vão se casar
        </Subtitle>
        <Subtitle $isMobile={windowWidth <= 490}>
          Em 18 de Outubro de 2025
        </Subtitle>
        <Subtitle $isMobile={windowWidth <= 490}>
          Na Paróquia São Benedito Jardim Mariléia - Rio das Ostras, RJ
        </Subtitle>

        <Caption $isMobile={windowWidth <= 490}>
          Esperamos que você faça parte do nosso dia especial!
        </Caption>

        <CountdownTimer $isMobile={windowWidth <= 490}>
          <CountdownTimerUnit $isMobile={windowWidth <= 490}>
            <b>{timeLeft?.days ?? "00"}</b> <p>Dias</p>
          </CountdownTimerUnit>
          <CountdownTimerUnit $isMobile={windowWidth <= 490}>
            <b>{timeLeft?.hours ?? "00"}</b> <p>Horas</p>
          </CountdownTimerUnit>
          <CountdownTimerUnit $isMobile={windowWidth <= 490}>
            <b>{timeLeft?.minutes ?? "00"}</b> <p>Minutos</p>
          </CountdownTimerUnit>
          <CountdownTimerUnit $isMobile={windowWidth <= 490}>
            <b>{timeLeft?.seconds ?? "00"}</b> <p>Segundos</p>
          </CountdownTimerUnit>
        </CountdownTimer>

        <ConfirmationButton
          onClick={() => changeModalStatus()}
          $isMobile={windowWidth <= 490}
        >
          Confirme sua Presença
        </ConfirmationButton>

        <Message $isMobile={windowWidth <= 490}>
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

        <Title $isMobile={windowWidth <= 490}>
          <h2>Pré Wedding</h2>
        </Title>

        <PreWeddingContainer>
          <Gallery
            photos={[
              "/images/IMG-2.jpg",
              "/images/IMG-3.jpg",
              "/images/IMG-16.jpeg",
              "/images/IMG-23.jpg",
              "/images/IMG-25.jpeg",
              "/images/IMG-27.jpg",
              "/images/IMG-29.jpg",
              "/images/IMG-35.jpeg",
              "/images/IMG-39.jpg",
              "/images/IMG-45.jpg",
              "/images/IMG-46.jpg",
              "/images/IMG-47.jpg",
              "/images/IMG-48.jpeg",
              "/images/IMG-49.jpg",
              "/images/IMG-55.jpeg",
              "/images/IMG-60.jpg",
              "/images/IMG-62.jpg",
              "/images/IMG-63.jpg",
              "/images/IMG-65.jpg",
              "/images/IMG-66.jpg",
              "/images/IMG-68.jpg",
              "/images/IMG-69.jpg",
              "/images/IMG-83.jpeg",
              "/images/IMG-87.jpg",
              "/images/IMG-96.jpg",
              "/images/IMG-98.jpg",
              "/images/IMG-101.jpg",
            ]}
          />
        </PreWeddingContainer>

        <Title $isMobile={windowWidth <= 490}>
          <h2>Nosso Filme</h2>
        </Title>

        <PreWeddingContainer>
          <VideoPlayer autoPlay={false} />
        </PreWeddingContainer>

        <Title $isMobile={windowWidth <= 490}>
          <h2>Informações do Evento</h2>
        </Title>

        <CardContainer>
          <Card>
            <div>
              <Subtitle $primary $isMobile={windowWidth <= 490} $isLabel>
                Data:
              </Subtitle>
              <Subtitle $isMobile={windowWidth <= 490} $isLabel>
                18 de Outubro de 2025
              </Subtitle>
            </div>

            <div>
              <Subtitle $primary $isMobile={windowWidth <= 490} $isLabel>
                Horário:
              </Subtitle>
              <Subtitle $isMobile={windowWidth <= 490} $isLabel>
                15:00
              </Subtitle>
            </div>

            <div>
              <Subtitle $primary $isMobile={windowWidth <= 490} $isLabel>
                Local:
              </Subtitle>
              <Subtitle $isMobile={windowWidth <= 490} $isLabel>
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
              <Subtitle $primary $isMobile={windowWidth <= 490} $isLabel>
                Data:
              </Subtitle>
              <Subtitle $isMobile={windowWidth <= 490} $isLabel>
                18 de Outubro de 2025
              </Subtitle>
            </div>

            <div>
              <Subtitle $primary $isMobile={windowWidth <= 490} $isLabel>
                Horário:
              </Subtitle>
              <Subtitle $isMobile={windowWidth <= 490} $isLabel>
                17:00
              </Subtitle>
            </div>

            <div>
              <Subtitle $primary $isMobile={windowWidth <= 490} $isLabel>
                Local:
              </Subtitle>
              <Subtitle $isMobile={windowWidth <= 490} $isLabel $isLink>
                <a
                  href="https://www.google.com.br/maps/place/Lux+Party/@-22.4765806,-42.0261507,17z/data=!3m1!4b1!4m6!3m5!1s0x97b3a5b94b1407:0x50b1b03a3180ad8d!8m2!3d-22.4765806!4d-42.0261507!16s%2Fg%2F11sbl6nh84?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lux Party - Rio das Ostras, RJ
                </a>
              </Subtitle>
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
        <ConfirmationForm onSubmit={handleConfirmationSubmit}>
          <ConfirmationFormContainer>
            <ConfirmationFormInputContainer $isMobile={windowWidth <= 490}>
              <label htmlFor="phone">WhatsApp</label>
              <ConfirmationFormInput
                name="phone"
                type="text"
                value={confirmedPhoneInvited}
                onChange={(e) => handleConfirmedInvitedPhone(e)}
                placeholder="(99) 99999-9999"
                required
              />
            </ConfirmationFormInputContainer>

            <ConfirmationFormInputContainer $isMobile={windowWidth <= 490}>
              <AutoComplete
                id="names"
                options={invited}
                placeholder="Informe o nome do convidado"
                onChange={handleConfirmedInviteds}
              />
            </ConfirmationFormInputContainer>
          </ConfirmationFormContainer>

          <ConfirmationFormButton type="submit" $isMobile={windowWidth <= 490}>
            Confirmar Presença
          </ConfirmationFormButton>
        </ConfirmationForm>
      </Modal>

      <Modal hideModal={changeVideoStatus} active={videoIsOpen} fullWidth>
        <VideoPlayer autoPlay={true} />
      </Modal>
    </Background>
  );
}

export default Home;
