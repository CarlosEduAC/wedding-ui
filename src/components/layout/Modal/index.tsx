import { Fragment, ReactNode } from "react";
import { useWindow } from "@/hooks/useWindowDimension";
import { Container, Content, Header, Body, Overlay } from "./styles";

export interface ModalProps {
  active: boolean;
  hideModal: () => void;
  title?: string;
  subtitle?: string;
  children?: ReactNode;
}

function Modal({
  active,
  hideModal,
  title,
  subtitle,
  children,
}: Readonly<ModalProps>) {
  const { windowWidth } = useWindow();

  return (
    <Fragment>
      {active && (
        <Container>
          <Overlay onClick={() => hideModal()}></Overlay>
          <Content $isMobile={windowWidth <= 490}>
            <Header>
              {title && <h1>{title}</h1>}
              {subtitle && <h3>{subtitle}</h3>}
            </Header>
            <Body>{children}</Body>
          </Content>
        </Container>
      )}
    </Fragment>
  );
}

export { Modal };
