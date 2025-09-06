import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px 0 24px 0;
`;

export const QRImage = styled.img<{ size: number }>`
  width: ${({ size }) => size}px;
  border-radius: 16px;
`;

export const Label = styled.p`
  margin: 8px 0 0 0 ;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
`;
