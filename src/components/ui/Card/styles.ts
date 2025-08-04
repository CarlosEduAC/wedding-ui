import styled from "styled-components";

export const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme["primary-700"]};
  border-radius: 8px;
  padding: 24px 16px 24px 16px;
  transition: transform 0.2s;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;

export const FigureImage = styled.img`
  width: 132px;
  margin: 0 0 8px 0;
`;

export const FigureCaption = styled.figcaption`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  strong {
    font-size: 14px;
    margin: 0 0 8px 0;
    color: ${(props) => props.theme["primary-500"]};
  }
`;

export const FigurePrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 14px;
    color: ${(props) => props.theme["primary-500"]};
    margin: 0 0 0 8px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px 0 0 0;
  gap: 16px;

  button {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background-color: ${(props) => props.theme["primary-500"]};
    color: ${(props) => props.theme["neutral-100"]};
    border: none;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme["primary-700"]};
    }
  }

  label {
    font-size: 1.2em;
    color: ${(props) => props.theme["primary-500"]};
  }
`;

export const ButtonAdd = styled.button`
  width: 100%;
  height: 32px;
  border-radius: 8px;
  margin: 8px 0 0 0;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;
  background: ${(props) => props.theme["primary-500"]};
  border: 2px solid ${(props) => props.theme["primary-500"]};
  color: ${(props) => props.theme["neutral-100"]};
  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => props.theme["primary-700"]};
    border-color: ${(props) => props.theme["primary-700"]};
  }
`;
