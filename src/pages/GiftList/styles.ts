import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;

  flex: 1;

  margin: 0 32px 0 32px;
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
    font-size: 16px;
    color: ${({ theme }) => theme["primary-900"]};
  }
`;
