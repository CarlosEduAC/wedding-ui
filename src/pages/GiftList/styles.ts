import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;

  flex: 1;

  margin: 0 32px 0 32px;
`;

export const SearchMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 8px;
`;

export const SubTitle = styled.div<{ $isMobile?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: ${({ $isMobile }) => ($isMobile ? "0 0 32px 0" : "0 0 64px 0")};
  color: ${({ theme }) => theme["primary-500"]};

  p {
    font-size: ${({ $isMobile }) => ($isMobile ? "14px" : "16px")};
    color: ${({ theme }) => theme["primary-900"]};
  }
`;

export const Filters = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 16px;
  margin-bottom: 32px;

  p {
    color: ${({ theme }) => theme["primary-500"]};
    font-size: 12px;
    font-weight: 700;
  }
`;
