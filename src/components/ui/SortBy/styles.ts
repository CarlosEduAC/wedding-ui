import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  label {
    color: ${(props) => props.theme["primary-500"]};
    margin-right: 8px;
    font-size: 12px;
  }

  select {
    background: transparent;
    outline: none;
    color: ${(props) => props.theme["primary-500"]};
    border: 1px solid ${(props) => props.theme["primary-500"]};
    border-radius: 8px;
    font-size: 14px;
    padding: 8px 16px 8px 16px;
    cursor: pointer;
    transition: 0.4s;
    width: 220px;

    &:hover,
    &:focus {
      border: 1px solid ${(props) => props.theme["primary-300"]};
    }
  }

  select::picker-icon {
    color: ${(props) => props.theme["primary-700"]};
    transition: 0.6s rotate;

    &:hover {
      color: ${(props) => props.theme["primary-500"]};
    }
  }

  select:open::picker-icon {
    rotate: -180deg;
  }

  select,
  ::picker(select) {
    appearance: base-select;
  }

  ::picker(select) {
    border: none;
  }

  option {
    display: flex;
    justify-content: flex-start;
    gap: 16px;

    background: ${(props) => props.theme["neutral-200"]};
    border: 1px solid ${(props) => props.theme["primary-500"]};
    color: ${(props) => props.theme["primary-500"]};
    padding: 8px;
    transition: 0.4s;
  }

  option:first-of-type {
    border-radius: 8px 8px 0 0;
  }

  option:last-of-type {
    border-radius: 0 0 8px 8px;
  }

  option:not(option:last-of-type) {
    border-bottom: none;
  }

  option::checkmark {
    order: 1;
    margin-left: auto;
    content: "✅";
  }

  option:hover,
  option:focus {
    background: ${(props) => props.theme["primary-100"]};
  }

  ::picker(select) {
    opacity: 0;
    transition: all 0.4s allow-discrete;
  }

  ::picker(select):popover-open {
    opacity: 1;
  }

  @starting-style {
    ::picker(select):popover-open {
      opacity: 0;
    }
  }
`;
