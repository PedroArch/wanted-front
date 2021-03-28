import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --background: #022340;
    --pink: #F20789;
    --white: #FFFFFF;
    --black: #000000;
    --burgundy: #730237;
    --blue:#3C6AA6;
    --purple: #735A8C;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: var(--background);
    color: var(--white);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem 'Roboto Condensed', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }


  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .react-modal-overlay {
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }


  .react-modal-content {
    width: 100%;
    max-width: 300px;
    background: var(--burgundy);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    
    border: 0;
    background: transparent;
    color: var(--white);

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.7)
    }
  }
`


