import styled from "styled-components";

export const Container = styled.header<{ $isMobile: boolean }>`
  width: 100%;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: ${({ $isMobile }) =>
    $isMobile ? "center" : "space-between"};
  padding: 0 32px 0 32px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    img {
      width: 88px;

      &:hover {
        color: ${(props) => props.theme["primary-300"]};
        opacity: 0.8;
      }
    }
  }
`;

export const CartContainer = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${(props) => props.theme["primary-500"]};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  background: transparent;

  &:hover {
    color: ${(props) => props.theme["primary-300"]};
    opacity: 0.8;
  }
`;
