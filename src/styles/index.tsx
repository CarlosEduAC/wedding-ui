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
    background: ${(props) => props.theme["neutral-100"]};
    color: ${(props) => props.theme["neutral-900"]};
    --webkit-font-smoothing: antialiased;
    text-rendering: optimizeSpeed;

    height: 100vh;
    width: 100%;
  }

  div#root {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
  }

  body, div#root , input, button, textarea {
    font-family: "Parisienne", cursive;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;

    /* @media screen and (max-width: 1359px) {
      font-size: 1rem;
    }

    @media screen and (max-width: 1024px) {
      font-size: 0.7rem;
    } */
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


`;
