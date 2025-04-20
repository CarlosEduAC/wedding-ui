import styled, { keyframes } from "styled-components";

const uncheck = keyframes`
  0% {
        transform: rotate(-30deg) translateX(13.5px) translateY(8px);
    }
  50% {
        transform: rotate(30deg) translateX(9px);
    }
  75% {
        transform: rotate(30deg) translateX(4.5px) scaleX(1.1);
    }
  100% {
        transform: rotate(30deg);
    }
`;

const check = keyframes`
  0% {
        transform: rotate(30deg);
    }
  25% {
        transform: rotate(30deg) translateX(4.5px) scaleX(1.1);
    }
  50% {
        transform: rotate(30deg) translateX(9px);
    }
  100% {
        transform: rotate(-30deg) translateX(13.5px) translateY(8px);
    }
`;

const Switch = styled.label`
  cursor: pointer;
  position: relative;
  transform: scale(1) translateZ(0);
  transition: transform 0.2s;
  -webkit-tap-highlight-color: transparent;

  &:active {
    transform: scale(0.95) translateZ(0);
  }
`;

const Checkbox = styled.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  position: absolute;
  outline: none;
  border: none;
  pointer-events: none;
  z-index: 1;
  margin: 0;
  padding: 0;
  left: 1px;
  top: 1px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 9, 61, 0.25);

  & + svg {
    width: 36px;
    height: 25px;
    fill: #fff;
    stroke: #d1d6ee;
    stroke-width: 1px;
    stroke-linejoin: round;
    display: block;
    transition: stroke 0.45s, fill 0.45s;
  }

  &:not(:checked) {
    animation: ${uncheck} 0.45s linear forwards;
  }

  &:checked {
    animation: ${check} 0.45s linear forwards;

    & + svg {
      fill: #ec638e;
      stroke: #ec4472;
    }
  }
`;

export { Switch, Checkbox };
