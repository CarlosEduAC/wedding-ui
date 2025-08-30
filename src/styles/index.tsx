import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *::after, *::before {
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme["neutral-200"]};
    color: ${(props) => props.theme["neutral-900"]};
    --webkit-font-smoothing: antialiased;
    text-rendering: optimizeSpeed;
  }

  div#root {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
  }

  div#root , input, button, textarea {
    font-family: "Cinzel", serif;
    font-weight: 500;
    font-style: normal;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  h1 {
    font-size: 48px;
  }

  h2 {
    font-size: 36px;
  }

  h3 {
    font-size: 32px;
  }

  h4 {
    font-size: 24px;
  }
`;
