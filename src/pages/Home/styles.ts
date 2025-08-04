import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("/background2.png");
    background-size: 100%;
    z-index: -1;
    opacity: 0.2;
  }
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;

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

  h2 {
    font-family: "Parisienne", cursive;
    font-size: 48px;
    margin: 48px 0 8px 0;
  }
`;

export const Subtitle = styled.p<{ $primary?: boolean }>`
  text-align: center;
  margin-top: ${({ $primary }) => ($primary ? "12px" : "8px")};
  color: ${({ $primary, theme }) =>
    $primary ? theme["primary-500"] : theme["primary-900"]};
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
  padding: 24px 120px 24px 120px;
  cursor: pointer;
  background-color: ${({ theme }) => theme["primary-700"]};
  border: none;
  border-radius: 16px;
  color: ${({ theme }) => theme["primary-100"]};

  &:hover {
    background-color: ${({ theme }) => theme["primary-500"]};
    color: ${({ theme }) => theme["neutral-200"]};
  }
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 48px 0 0 0;
  padding: 32px;
  border-radius: 16px;

  background-color: ${({ theme }) => theme["neutral-300"]};
  color: ${({ theme }) => theme["primary-700"]};

  p + p,
  b + p {
    margin: 12px 0 12px 0;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  border-radius: 16px;
  width: 560px;

  background-color: ${({ theme }) => theme["neutral-200"]};

  div {
    display: flex;
    text-align: center;

    p {
      margin: 0 0 8px 0;
    }

    p + p {
      margin: 0 0 8px 4px;
    }
  }

  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;

export const ConfirmationForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 8px 0 0 0;
`;

export const ConfirmationFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 16px;
  margin: 0 0 46px 0;
`;

export const ConfirmationFormInputContainer = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 12px;
    font-weight: 700;
    text-align: left;
    margin: 0 0 4px 0;
  }
`;

export const ConfirmationFormInput = styled.input`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme["neutral-300"]};
  color: ${({ theme }) => theme["primary-900"]};

  &:focus,
  &:hover {
    outline: none;
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme["primary-100"]};
  }
`;

export const ConfirmationFormButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;

  padding: 12px 24px;
  margin: 32px 0 0 0;
  cursor: pointer;
  background-color: ${({ theme }) => theme["primary-500"]};
  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme["primary-100"]};

  &:hover {
    background-color: ${({ theme }) => theme["primary-500"]};
    color: ${({ theme }) => theme["neutral-200"]};
  }

  &:disabled {
    background-color: ${({ theme }) => theme["neutral-800"]};
    color: ${({ theme }) => theme["neutral-200"]};
    cursor: not-allowed;
  }
`;
