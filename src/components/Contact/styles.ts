import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  position: relative;

  .contact-heading {
    max-width: 70rem;
    margin: 0 auto;
    text-align: center;

    h2 {
      margin-top: 0.8rem;
      font-size: clamp(3.2rem, 4.4vw, 5rem);
      line-height: 1.08;
      letter-spacing: -0.12rem;
    }

    p {
      max-width: 58rem;
      margin: 1.6rem auto 0;
      color: var(--text-secondary);
      font-size: 1.8rem;
      line-height: 1.7;
    }
  }

  .eyebrow,
  .panel-kicker {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    color: var(--green);
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: 0.16rem;
    text-transform: uppercase;

    &::before {
      content: "";
      width: 2.8rem;
      height: 0.2rem;
      border-radius: 999px;
      background: currentColor;
    }
  }

  .contact-layout {
    display: grid;
    grid-template-columns: minmax(25rem, 0.82fr) minmax(0, 1.18fr);
    gap: clamp(2rem, 4vw, 4.6rem);
    align-items: stretch;
    max-width: 116rem;
    margin: clamp(3.6rem, 6vw, 6rem) auto 0;
  }

  .contact-panel {
    position: relative;
    overflow: hidden;
    isolation: isolate;
    display: flex;
    flex-direction: column;
    min-height: 100%;
    padding: clamp(2.4rem, 4vw, 4rem);
    border: 1px solid rgba(255, 255, 255, 0.13);
    border-color: color-mix(in srgb, var(--text-color) 16%, transparent);
    border-radius: 2.4rem;
    background: var(--card-bg);
    background: linear-gradient(
      145deg,
      color-mix(in srgb, var(--card-bg) 96%, var(--green)),
      var(--card-bg)
    );
    box-shadow: 0 2.4rem 5rem rgba(0, 0, 0, 0.16);

    &::after {
      content: "";
      position: absolute;
      width: 20rem;
      height: 20rem;
      right: -10rem;
      top: -11rem;
      z-index: -1;
      border-radius: 50%;
      background: color-mix(in srgb, var(--green) 18%, transparent);
      filter: blur(0.4rem);
    }

    h3 {
      max-width: 31rem;
      margin-top: 1.5rem;
      font-size: clamp(2.3rem, 3vw, 3.1rem);
      line-height: 1.2;
      letter-spacing: -0.05rem;
    }
  }

  .panel-copy {
    max-width: 34rem;
    margin-top: 1.4rem;
    color: var(--text-secondary);
    font-size: 1.6rem;
    line-height: 1.7;
  }

  .contact-methods {
    display: grid;
    gap: 1.2rem;
    margin-top: clamp(2.4rem, 4vw, 4rem);
  }

  .contact-card {
    display: grid;
    grid-template-columns: 4.8rem minmax(0, 1fr) auto;
    align-items: center;
    gap: 1.2rem;
    width: 100%;
    min-width: 0;
    padding: 1.25rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-color: color-mix(in srgb, var(--text-color) 12%, transparent);
    border-radius: 1.5rem;
    color: var(--text-color);
    background: rgba(255, 255, 255, 0.03);
    background: color-mix(in srgb, var(--text-color) 4%, transparent);
    box-shadow: 0 0.8rem 2rem rgba(0, 0, 0, 0.08);
    transition: background-color 0.24s ease, border-color 0.24s ease,
      box-shadow 0.24s ease;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        border-color: color-mix(in srgb, var(--green) 45%, transparent);
        background: color-mix(in srgb, var(--green) 11%, transparent);
        box-shadow: 0 1.4rem 2.5rem rgba(0, 0, 0, 0.14);

        .contact-arrow {
          color: var(--green);
        }
      }
    }
  }

  .contact-icon {
    display: grid;
    place-items: center;
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 1.3rem;
    background: var(--green);
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.16);

    img {
      width: 2.15rem;
      height: 2.15rem;
      object-fit: contain;
      filter: brightness(0) invert(1);
    }
  }

  .contact-details {
    display: grid;
    min-width: 0;
    gap: 0.35rem;
  }

  .method-title {
    color: var(--text-secondary);
    font-size: 1.25rem;
    font-weight: 600;
    letter-spacing: 0.06rem;
    text-transform: uppercase;
  }

  .method-value {
    overflow: hidden;
    color: var(--text-color);
    font-size: 1.5rem;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .contact-arrow {
    color: var(--text-secondary);
    font-size: 2.2rem;
    line-height: 1;
    transition: color 0.2s ease;
  }

  .contact-note {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-top: auto;
    padding-top: 3rem;
    color: var(--text-secondary);
    font-size: 1.4rem;
    line-height: 1.55;

    p {
      max-width: 29rem;
    }
  }

  .note-dot {
    flex: 0 0 auto;
    width: 0.9rem;
    height: 0.9rem;
    margin-top: 0.6rem;
    border-radius: 50%;
    background: var(--green);
    box-shadow: 0 0 0 0.5rem color-mix(in srgb, var(--green) 16%, transparent);
  }

  .form-column {
    min-width: 0;
  }

  @media (max-width: 960px) {
    .contact-layout {
      grid-template-columns: 1fr;
      max-width: 72rem;
    }

    .contact-panel {
      min-height: auto;
    }

    .contact-note {
      margin-top: 2.8rem;
      padding-top: 0;
    }
  }

  @media (max-width: 560px) {
    margin-top: 9rem;

    .contact-heading p {
      font-size: 1.6rem;
    }

    .contact-layout {
      margin-top: 3.2rem;
    }

    .contact-panel {
      padding: 2.2rem;
      border-radius: 2rem;
    }

    .contact-card {
      grid-template-columns: 4.4rem minmax(0, 1fr);
      padding: 1.1rem;
    }

    .contact-icon {
      width: 4.4rem;
      height: 4.4rem;
      border-radius: 1.15rem;
    }

    .contact-arrow {
      display: none;
    }

    .method-value {
      font-size: 1.4rem;
    }
  }
`;
