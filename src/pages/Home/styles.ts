import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("/images/background.png");
    background-size: 100%;
    z-index: -1;
    opacity: 0.2;
  }
`;

export const Container = styled.main<{ $isMobile?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;

  flex: 1;

  margin: ${({ $isMobile }) => ($isMobile ? "4rem 2rem 0" : "4rem 0 0")};
`;

export const Title = styled.div<{ $isMobile?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme["primary-500"]};

  h1 {
    font-family: "Parisienne", cursive;
    font-size: ${({ $isMobile }) => ($isMobile ? "48px" : "72px")};
  }

  p {
    font-size: ${({ $isMobile }) => ($isMobile ? "24px" : "32px")};
    color: ${({ theme }) => theme["primary-900"]};
  }

  h1 + p {
    margin: ${({ $isMobile }) =>
      $isMobile ? "0.5rem 0 0.1rem 0" : "1rem 0 1rem 0"};
  }

  h2 {
    font-family: "Parisienne", cursive;
    font-size: ${({ $isMobile }) => ($isMobile ? "32px" : "48px")};
    margin: 48px 0 8px 0;
  }
`;

export const Subtitle = styled.p<{
  $primary?: boolean;
  $isMobile?: boolean;
  $isLabel?: boolean;
  $isLink?: boolean;
}>`
  text-align: ${({ $isLabel }) => ($isLabel ? "left" : "center")};
  font-size: ${({ $isMobile }) => ($isMobile ? "12px" : "16px")};
  margin-top: ${({ $primary }) => ($primary ? "12px" : "8px")};
   color: ${({ $primary, theme }) =>
      $primary ? theme["primary-500"] : theme["primary-900"]};

  a {
    text-decoration: none;
    color: ${({ $primary, $isLink, theme }) => {
      let color;
      if ($primary) {
        color = theme["primary-500"];
      } else if ($isLink) {
        color = theme["primary-300"];
      } else {
        color = theme["primary-900"];
      }
      return color;
    }};

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Caption = styled.p<{ $isMobile?: boolean }>`
  text-align: center;
  margin: 24px 0 0 0;
  font-family: "Parisienne", cursive;
  font-size: ${({ $isMobile }) => ($isMobile ? "20px" : "24px")};
  color: ${({ theme }) => theme["primary-300"]};
`;

export const CountdownTimer = styled.div<{ $isMobile?: boolean }>`
  display: flex;
  gap: 8px;
  margin: ${({ $isMobile }) => ($isMobile ? "24px 0 0 0" : "48px 0 0 0")};
  border-radius: 16px;
  color: ${({ theme }) => theme["primary-100"]};
`;

export const CountdownTimerUnit = styled.div<{ $isMobile?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${({ $isMobile }) => ($isMobile ? "60px" : "80px")};
  height: ${({ $isMobile }) => ($isMobile ? "60px" : "80px")};
  border-radius: 64px;

  background-color: ${({ theme }) => theme["primary-500"]};
  color: ${({ theme }) => theme["primary-100"]};

  b {
    font-size: ${({ $isMobile }) => ($isMobile ? "18px" : "22px")};
    font-weight: 700;
  }

  p {
    font-size: ${({ $isMobile }) => ($isMobile ? "7px" : "8px")};
  }
`;

export const ConfirmationButton = styled.button<{ $isMobile?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: ${({ $isMobile }) => ($isMobile ? "24px 0 24px 0" : "48px 0 48px 0")};
  padding: ${({ $isMobile }) =>
    $isMobile ? "16px 32px 16px 32px" : "24px 120px 24px 120px"};
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

export const GiftListButton = styled.button<{ $isMobile?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: ${({ $isMobile }) => ($isMobile ? "12px 0 0 0" : "16px 0 0 0")};
  padding: ${({ $isMobile }) =>
    $isMobile ? "16px 32px 16px 32px" : "24px 120px 24px 120px"};
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

export const Message = styled.div<{ $isMobile?: boolean, $center?: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ $isMobile }) => ($isMobile ? "100%" : "60%")};
  margin: 0 0 0 0;
  padding: 32px;

  ${({ $center }) =>
    $center &&
    `
    align-items: center;
    text-align: center;
  `}
  border-radius: 16px;
  font-size: ${({ $isMobile }) => ($isMobile ? "12px" : "16px")};

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

  margin: 0 0 0 0;

  iframe {
    width: 100%;
    height: 360px;
    border: none;
    border-radius: 8px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  border-radius: 16px;
  width: 625px;

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

export const ConfirmationFormInputContainer = styled.div<{ $isMobile?: boolean }>`
  display: flex;
  flex-direction: column;

  label {
    font-size: 12px;
    font-weight: 700;
    text-align: left;
    margin: 0 0 4px 0;
  }

  input {
    font-size: ${({ $isMobile }) => ($isMobile ? "14px" : "16px")};
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

export const ConfirmationFormButton = styled.button<{ $isMobile?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $isMobile }) => ($isMobile ? "100%" : "70%")};

  padding: 12px 24px;
  margin: ${({ $isMobile }) => ($isMobile ? "16px 0 0 0" : "32px 0 0 0")};
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

export const PreWeddingContainer = styled.div``;

export const PreWeddingVideoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;