import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --black: #09111f;
    --background: #09111f;
    --surface: rgba(17, 29, 49, 0.76);
    --surface-solid: #111d31;
    --card-bg: #14223a;
    --card-bg-hover: #182a46;
    --border: rgba(165, 190, 224, 0.16);
    --text-color: #f6f9ff;
    --text-secondary: #a8b7ce;
    --green: #42dca0;
    --green-strong: #24bd81;
    --pink: #8e7dff;
    --blue: #4aa3ff;
    --shadow: 0 2.4rem 7rem rgba(0, 0, 0, 0.22);

    color-scheme: dark;
    scroll-padding-top: 9.6rem;

    &.light {
      --black: #e8eef5;
      --background: #e8eef5;
      --surface: rgba(242, 246, 251, 0.9);
      --surface-solid: #eef3f8;
      --card-bg: #edf3f8;
      --card-bg-hover: #e4ecf5;
      --border: rgba(31, 52, 84, 0.17);
      --text-color: #17233a;
      --text-secondary: #526681;
      --green: #087a70;
      --green-strong: #056257;
      --pink: #5f61c7;
      --blue: #285f9f;
      --shadow: 0 2rem 5.5rem rgba(29, 50, 82, 0.14);

      color-scheme: light;

      body {
        background:
          radial-gradient(circle at 8% 2%, rgba(69, 123, 205, 0.14), transparent 29%),
          radial-gradient(circle at 86% 12%, rgba(13, 123, 108, 0.11), transparent 27%),
          var(--background);
      }

      header.header-fixed {
        background: rgba(232, 238, 245, 0.9);
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

      main .about-layout {
        background:
          radial-gradient(circle at 0% 0%, rgba(13, 123, 108, 0.09), transparent 34rem),
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
          linear-gradient(145deg, rgba(214, 228, 241, 0.98), rgba(196, 216, 231, 0.98) 52%, rgba(220, 237, 231, 0.98)),
          var(--surface-solid);
        box-shadow: var(--shadow);
      }

      main .visual-note {
        border-color: var(--border);
        background: rgba(238, 243, 248, 0.96);
        box-shadow: var(--shadow);
      }

      footer.footer {
        background: rgba(232, 238, 245, 0.9);
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
