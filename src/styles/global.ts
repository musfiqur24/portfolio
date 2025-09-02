import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --pink: #E31F71;
    --black: #212121;
    --green: #23ce6b;
    --blue: #016fb9;

    /* Text and background variables */
    --text-color: #ffffff;
    --text-secondary: #cccccc;
    --background: var(--black);
    --card-bg: #2b2b2b;

    scroll-padding-top: 10rem;

    &.light {
      /* Override variables for light mode */
      --text-color: #212121;
      --text-secondary: #555555;
      --background: #FDF5E6; /* Changed to a warmer off-white */
      --card-bg: #ffffff;

      body {
        transition: 0.5s;
        background-color: var(--background);
        color: var(--text-color);
      }

      .logo {
        color: var(--text-color);
      }

      header.header-fixed {
        transition: 0.5s;
        background-color: #f5f5f550;
        a {
          transition: 0.5s;
          color: var(--text-color);
        }
        .menu, .menu:before, .menu:after {
          background-color: var(--text-color);
        }
        .menu.active {
          background-color: transparent;
        }
      }

      footer.footer {
        transition: 0.5s;
        background-color: rgba(0, 0, 0, 0.1);
        color: var(--text-color);
      }

      form {
        input, textarea {
          transition: 0.5s;
          border: solid 1px var(--text-color);
          color: var(--text-color);
          &::placeholder {
            transition: 0.5s;
            color: var(--text-color);
          }
        }
      }
    }
  }

  /* Reset & Defaults */
  ul, li {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    background-color: var(--background);
    color: var(--text-color);
    transition: background-color 0.3s, color 0.3s;
  }

  body, input, textarea, button {
    font-family: 'Red Hat Display', sans-serif;
    font-weight: 400;
  }

  a {
    text-decoration: none;
  }

  button, .button {
    border: none;
    cursor: pointer;
    background-color: var(--green);
    color: #fff;
    border-radius: 2rem;
    font-weight: 500;
    transition: filter 0.25s;
    &:hover {
      filter: brightness(0.8);
    }
  }

  button:disabled, .button:disabled {
    filter: brightness(0.8);
    cursor: not-allowed;
  }

  .logo {
    font-size: 3rem;
    color: var(--text-color);
  }
`;