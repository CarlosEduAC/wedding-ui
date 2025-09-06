import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;

  span {
    font-size: 12px;
    font-weight: 700;
    text-align: left;
    margin: 0 0 4px 0;
  }
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  border-radius: 8px;
  padding: 12px;
  background-color: ${({ theme }) => theme["neutral-300"]};
  color: ${({ theme }) => theme["primary-900"]};

  &:focus,
  &:hover {
    outline: none;
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme["primary-100"]};
  }
`;

export const TagContainer = styled.div`
  display: flex;
  border-radius: 8px;
  padding: 12px;
  margin: 0 0 8px 0;
  color: ${({ theme }) => theme["primary-900"]};
`;

export const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme["primary-300"]};
  color: ${({ theme }) => theme["neutral-200"]};
  padding: 2px 12px;
  border-radius: 16px;

  span {
    font-family: "Parisienne", cursive;
    font-size: 16px;
    margin: 0 8px 0 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &:not(:last-child) {
    margin: 0 0 8px 0;
  }
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme["neutral-200"]};
  font-size: 18px;
  cursor: pointer;
  font-weight: bold;
`;

export const Dropdown = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme["neutral-200"]};
  border: 1px solid ${({ theme }) => theme["neutral-300"]};
  border-top: none;
  border-radius: 0 0 8px 8px;
  list-style: none;
  margin: 0;
  padding: 4px 0;
  max-height: 200px;
  overflow-y: auto;
  z-index: 10;
`;

export const Option = styled.li`
  padding: 8px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme["neutral-300"]};
  }
`;