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

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  font-size: 32px;
  font-weight: bold;
  color: ${(props) => props.theme["neutral-900"]};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme["primary-500"]};
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 2rem 1.8rem 2rem;
  padding: 3rem 0 16px 0;
  border-bottom: 1px solid ${(props) => props.theme["neutral-700"]};

  h1 {
    font-size: 42px;
    color: ${(props) => props.theme["primary-500"]};
  }

  h3 {
    font-family: "Parisienne", cursive;
    font-size: 22px;
    font-weight: 500;
  }

  @media screen and (max-width: 1080px) {
    h1 {
      font-size: 42px;
      width: 240px;
      color: ${(props) => props.theme["primary-500"]};
    }
  }
`;

export const Content = styled.div<{ $isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
  width: ${(props) => props.$isMobile ? "100vw" : "50vw"};
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
