import styled from "styled-components";

export const Container = styled.section<{ $isMobile: boolean }>`
  display: flex;
  flex-direction: ${({ $isMobile }) => ($isMobile ? "column" : "row")};
  flex-wrap: ${({ $isMobile }) => ($isMobile ? "nowrap" : "wrap")};
  align-items: center;
  gap: 32px;

  width: 70%;
  margin: 32px 0 64px 0;
`;
