import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  opacity: 1;
  z-index: 1000;
`;

export const Overlay = styled.a`
  cursor: default;
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background-color: rgba(247, 248, 249, 0.75);
`;

export const CloseButton = styled.button<{ $isMobile: boolean }>`
  position: absolute;
  top: 32px;
  right: 32px;
  background: none;
  border: none;
  font-size: 42px;
  font-weight: bold;
  color: ${(props) => props.theme["neutral-900"]};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme["primary-300"]};
  }
`;

export const Header = styled.header<{ $isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 2rem 1.8rem 2rem;
  padding: 3rem 0 16px 0;
  border-bottom: 1px solid ${(props) => props.theme["neutral-700"]};

  h1 {
    font-size: 42px;
    margin: ${(props) => props.$isMobile ? "0 0 16px 0" : "0"};
    color: ${(props) => props.theme["primary-500"]};
  }

  h3 {
    font-family: "Parisienne", cursive;
    text-align: center;
    font-size: ${(props) => props.$isMobile ? "20px" : "22px"};
    font-weight: 500;
  }

  @media screen and (max-width: 1080px) {
    h1 {
      width: 240px;
      color: ${(props) => props.theme["primary-500"]};
    }
  }
`;

export const Content = styled.div<{ $isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: ${(props) => props.$isMobile ? "center" : "flex-start"};
  position: relative;
  width: ${(props) => props.$isMobile ? "100vw" : "50vw"};
  height: ${(props) => props.$isMobile ? "100vh" : "auto"};
  background-color: ${(props) => props.theme["neutral-200"]};
  border-radius: 8px;
  z-index: 1;
  animation: slide-down 0.2s ease 1;
  box-shadow: 0 0.2rem 0.5rem ${(props) => props.theme["neutral-900"]};
`;

export const Body = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 3rem 4rem 3rem;
`;
