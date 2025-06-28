import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  flex: 1;

  margin: 4rem 0 0;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme["primary-500"]};

  h1 {
    font-family: "Parisienne", cursive;
    font-size: 72px;
  }

  p {
    font-size: 32px;
    color: ${({ theme }) => theme["primary-900"]};
  }

  h1 + p {
    margin: 1rem 0 1rem 0;
  }
`;

export const Subtitle = styled.p<{ primary?: boolean }>`
  text-align: center;
  margin-top: ${({ primary }) => (primary ? "12px" : "8px")};
  color: ${({ primary, theme }) =>
    primary ? theme["primary-500"] : theme["primary-900"]};
`;

export const Caption = styled.p`
  text-align: center;
  margin: 24px 0 0 0;
  font-family: "Parisienne", cursive;
  font-size: 24px;
  color: ${({ theme }) => theme["primary-300"]};
`;

export const CountdownTimer = styled.div`
  display: flex;
  gap: 8px;
  margin: 48px 0 0 0;
  border-radius: 16px;
  color: ${({ theme }) => theme["primary-100"]};
`;

export const CountdownTimerUnit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 64px;

  background-color: ${({ theme }) => theme["primary-500"]};
  color: ${({ theme }) => theme["primary-100"]};

  b {
    font-size: 22px;
    font-weight: 700;
  }

  p {
    font-size: 8px;
  }
`;

export const ConfirmationButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 48px 0 0 0;
  padding: 24px 64px 24px 64px;
  cursor: pointer;
  background-color: ${({ theme }) => theme["primary-700"]};
  border: none;
  border-radius: 16px;
  color: ${({ theme }) => theme["primary-100"]};

  &:hover {
    background-color: ${({ theme }) => theme["primary-500"]};
    color: ${({ theme }) => theme["neutral-100"]};
  }
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 156px 0 0 0;
  padding: 32px;
  border-radius: 16px;

  background-color: ${({ theme }) => theme["neutral-300"]};
  color: ${({ theme }) => theme["primary-700"]};

  p + p,
  b + p {
    margin: 12px 0 12px 0;
  }
`;

export const Images = styled.div<{ src: string }>`
  /* width: 50%;
  border-radius: 200px 200px 0 0;
  margin: 1.5rem 0; */

  position: relative;
  width: 100px;
  height: 90px;

  &:before,
  &:after {
    position: absolute;
    content: "";
    left: 50px;
    top: 0;
    width: 50px;
    height: 80px;
    background-image: url(${(props) => props.src});
    border-radius: 50px 50px 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }
  &:after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }
`;
