import styled from "styled-components";

const Switch = styled.div`
  position: relative;
  width: 48px;
  height: 24px;
  border-radius: 50%;
`;

const Checkbox = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  cursor: pointer;
  opacity: 0;
  z-index: 2;

  &:checked + span {
    background-color: #000;
  }

  &:active + span {
    opacity: 0.5;
  }

  &:checked + span:before {
    background-color: #000;
    transform: translate(20px, -4px);
  }

  &:checked + span:after {
    background-color: #fff;
    transform: translate(25px, 0);
  }
`;

const Slider = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  opacity: 1;
  background-color: #fff;
  box-shadow: 0 2px 25px #d9d9d9;
  border-radius: 40px;
  transition: 0.2s ease background-color, 0.2s ease opacity;

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 4px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    transition: 0.5s ease transform, 0.2s ease background-color;
  }

  &:before {
    background-color: #fff;
    transform: translate(-8px, 0);
    z-index: 1;
  }

  &:after {
    background-color: #000;
    transform: translate(8px, 0);
    z-index: 0;
  }
`;

export { Switch, Checkbox, Slider };
