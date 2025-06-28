import { Link as RRLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const Container = styled.header`
  margin: 0 0 1.5rem;
`;

export const Image = styled.img`
  position: absolute;
  z-index: -1;
`;

export const Link = styled(RRLink)`
  text-decoration: none;
  color: ${({ theme }) => theme["neutral-900"]};
`;

const fall = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) rotate(180deg);
    opacity: 0;
  }
`;

export const Petal = styled.div<{
  left: number;
  delay: number;
  duration: number;
  color: string;
}>`
  position: absolute;
  top: 0;
  left: ${({ left }) => `${left}vw`};
  width: 10px;
  height: 20px;
  border-radius: 0 50% 0 80% / 100% 100% 0 0;
  background: ${({ color }) => color};
  opacity: 0.8;
  animation: ${fall} linear infinite;
  animation-delay: ${({ delay }) => `${delay}s`};
  animation-duration: ${({ duration }) => `${duration}s`};
`;

export const PetalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  pointer-events: none; /* não interfere em cliques */
  z-index: 999;
`;
