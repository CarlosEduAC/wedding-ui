import styled from "styled-components";

export const Container = styled.header<{ $isMobile: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${({ $isMobile }) =>
    $isMobile ? "center" : "space-between"};
  padding: 8px 32px 0 32px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    img {
      width: 120px;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme["primary-500"]};
  font-family: "Parisienne", cursive;
  font-size: 72px;
`;

export const CartContainer = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${(props) => props.theme["primary-700"]};
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  background: transparent;

  &:hover {
    color: ${(props) => props.theme["primary-500"]};
    opacity: 0.8;
  }
`;

