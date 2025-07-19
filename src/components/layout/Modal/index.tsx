import { Fragment, ReactNode } from "react";
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
  return (
    <Fragment>
      {active && (
        <Container>
          <Overlay onClick={() => hideModal()}></Overlay>
          <Content>
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
