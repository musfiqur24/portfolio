import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --black: #09111f;
    --background: #09111f;
    --surface: rgba(17, 29, 49, 0.76);
    --surface-solid: #111d31;
    --card-bg: #14223a;
    --card-bg-hover: #182a46;
    --card-surface: #14223a;
    --border: rgba(165, 190, 224, 0.16);
    --text-color: #f6f9ff;
    --text-secondary: #a8b7ce;
    --green: #42dca0;
    --green-strong: #24bd81;
    --pink: #8e7dff;
    --blue: #4aa3ff;
    --highlight-start: #2e9a73;
    --highlight-end: #14504a;
    --highlight-mid: #267a65;
    --section-start: #142b4a;
    --section-end: #0f1c33;
    --section-accent-start: #1c5260;
    --section-accent-end: #143746;
    --research-highlight-start: #244f78;
    --research-highlight-end: #152f4d;
    --research-highlight-mid: #1d4167;
    --shadow: 0 2.4rem 7rem rgba(0, 0, 0, 0.22);

    color-scheme: dark;
    scroll-padding-top: 9.6rem;

    &.light {
      --black: #33254f;
      --background: #f8f6ff;
      --surface: rgba(222, 216, 245, 0.88);
      --surface-solid: #ded8f5;
      --card-bg: #ebe7fa;
      --card-bg-hover: #d1c8ed;
      --card-surface: #ebe7fa;
      --border: rgba(61, 43, 102, 0.2);
      --text-color: #33254f;
      --text-secondary: #7257a8;
      --green: #7257a8;
      --green-strong: #5b428f;
      --pink: #7257a8;
      --blue: #7257a8;
      --highlight-start: #7257a8;
      --highlight-end: #4b367b;
      --highlight-mid: #664b98;
      --section-start: #ded8f5;
      --section-end: #cfc5eb;
      --section-accent-start: #7257a8;
      --section-accent-end: #4b367b;
      --research-highlight-start: #7257a8;
      --research-highlight-end: #4b367b;
      --research-highlight-mid: #664b98;
      --shadow: 0 2rem 5.5rem rgba(29, 50, 82, 0.14);

      color-scheme: light;

      body {
        background:
          radial-gradient(circle at 8% 2%, rgba(222, 216, 245, 0.95), transparent 32%),
          radial-gradient(circle at 86% 12%, rgba(114, 87, 168, 0.2), transparent 30%),
          radial-gradient(circle at 52% 88%, rgba(61, 43, 102, 0.08), transparent 34%),
          var(--background);
      }

      header.header-fixed {
        background: rgba(248, 246, 255, 0.92);
        border-bottom-color: var(--border);
      }

      main [id^="tsparticles"] {
        filter: saturate(1.25) contrast(1.28) drop-shadow(0 0 0.35rem rgba(31, 52, 84, 0.24));
        opacity: 0.82;
      }

      main .about-layout,
      main .education-panel,
      main .skills-panel,
      main .project,
      main .contact-panel,
      main form,
      .footer.footer {
        border-color: var(--border);
        box-shadow: var(--shadow);
      }

      main .about-layout,
      main .education-panel,
      main .project,
      main .contact-panel,
      main form {
        background: var(--card-surface);
      }

      main .education-panel {
        background: #ffffff;
      }

      main .about-layout {
        background:
          radial-gradient(circle at 0% 0%, rgba(114, 87, 168, 0.13), transparent 34rem),
          var(--surface-solid);
      }

      main .education-panel,
      main .skills-panel,
      main .project,
      main .contact-panel,
      main form {
        background: var(--surface-solid);
      }

      main .hability,
      main .project-links a,
      main .contact-card,
      main input,
      main textarea {
        border-color: var(--border);
        background: var(--card-bg-hover);
      }

      main .portrait-frame {
        border-color: var(--border);
        background:
          linear-gradient(145deg, #ebe7fa, #c6bbe5 55%, #b3a4d4),
          var(--card-bg);
        box-shadow: var(--shadow);
      }

      main .visual-note {
        border-color: var(--border);
        background: #f8f6ff;
        box-shadow: var(--shadow);
      }

      footer.footer {
        background: rgba(248, 246, 255, 0.92);
      }
    }
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    min-width: 320px;
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    background:
      radial-gradient(circle at 4% 4%, rgba(74, 163, 255, 0.12), transparent 30%),
      radial-gradient(circle at 88% 14%, rgba(66, 220, 160, 0.1), transparent 26%),
      var(--background);
    color: var(--text-color);
    overflow-x: hidden;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  body,
  input,
  textarea,
  button {
    font-family: "Red Hat Display", sans-serif;
    font-weight: 400;
  }

  ::selection {
    background: var(--green);
    color: #07120f;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul,
  li {
    list-style: none;
  }

  button,
  .button {
    border: 0;
    cursor: pointer;
    border-radius: 1.2rem;
    background: var(--green);
    color: #06130e;
    font-weight: 700;
    transition: transform 0.24s ease, filter 0.24s ease, box-shadow 0.24s ease,
      background-color 0.24s ease;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        filter: brightness(1.05);
        box-shadow: 0 1.2rem 2.8rem rgba(66, 220, 160, 0.2);
        transform: translateY(-2px);
      }
    }

    &:active {
      transform: translateY(0);
    }
  }

  button:disabled,
  .button:disabled {
    cursor: not-allowed;
    filter: grayscale(0.4) opacity(0.6);
  }

  a:focus-visible,
  button:focus-visible,
  input:focus-visible,
  textarea:focus-visible {
    outline: 0.3rem solid var(--green);
    outline-offset: 0.35rem;
  }

  .section-kicker {
    color: var(--green);
    font-size: 1.15rem;
    font-weight: 800;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      scroll-behavior: auto !important;
      transition-duration: 0.01ms !important;
    }

    html {
      scroll-behavior: auto;
    }
  }
`;
