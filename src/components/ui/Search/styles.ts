import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 720px;
  padding: 8px 16px 8px 16px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme["primary-500"]};
  transition: color 0.2s;

  &:hover {
    border: 1px solid ${(props) => props.theme["primary-300"]};

    svg {
      color: ${(props) => props.theme["primary-300"]};
    }
  }

  input {
    outline: none;
    border: none;
    background: transparent;
    width: 100%;
    color: ${(props) => props.theme["primary-500"]};
    padding: 0 8px 0 0;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  svg {
    color: ${(props) => props.theme["primary-500"]};
  }
`;
