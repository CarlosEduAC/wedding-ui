import { Fragment, ReactNode } from "react";
import { useWindow } from "@/hooks/useWindowDimension";
import {
  Container,
  Content,
  Header,
  Body,
  Overlay,
  CloseButton,
} from "./styles";

export interface ModalProps {
  active: boolean;
  hideModal: () => void;
  title?: string;
  subtitle?: string;
  fullWidth?: boolean;
  children?: ReactNode;
}

function Modal({
  active,
  hideModal,
  title,
  subtitle,
  fullWidth,
  children,
}: Readonly<ModalProps>) {
  const { windowWidth } = useWindow();
  const isMobile = windowWidth <= 490 || (fullWidth ?? false);

  return (
    <Fragment>
      {active && (
        <Container>
          <Overlay onClick={() => hideModal()}></Overlay>
          <Content $isMobile={isMobile}>
            <CloseButton onClick={() => hideModal()}>×</CloseButton>
            {(title != undefined || subtitle != undefined) && (
              <Header>
                {title && <h1>{title}</h1>}
                {subtitle && <h3>{subtitle}</h3>}
              </Header>
            )}
            <Body>{children}</Body>
          </Content>
        </Container>
      )}
    </Fragment>
  );
}

export { Modal };
