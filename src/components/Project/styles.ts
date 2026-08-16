import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;

  .section-heading {
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 3rem;
    margin-bottom: 3.4rem;

    .eyebrow {
      display: inline-block;
      margin-bottom: 0.85rem;
      color: var(--green);
      font-size: 1.15rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
    }

    h2 {
      max-width: 60rem;
      color: var(--text-color);
      font-size: clamp(2.8rem, 3.35vw, 4.2rem);
      letter-spacing: -0.05em;
      line-height: 1;
    }

    p {
      max-width: 43rem;
      color: var(--text-secondary);
      font-size: 1.3rem;
      line-height: 1.65;
    }
  }

  .project-carousel {
    position: relative;
    z-index: 1;
    overflow: visible;
    border: 1px solid color-mix(in srgb, var(--green) 24%, var(--border));
    border-radius: 2.6rem;
    background:
      radial-gradient(
        circle at 96% 6%,
        color-mix(in srgb, var(--pink) 17%, transparent),
        transparent 32rem
      ),
      var(--card-surface);
    outline: 1px solid color-mix(in srgb, var(--green) 34%, var(--border));
    box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--green) 18%, transparent),
      0 2.4rem 6rem rgba(0, 0, 0, 0.15);

    &::before,
    &::after {
      position: absolute;
      z-index: -1;
      top: -1.15rem;
      right: 1.4%;
      left: 1.4%;
      height: 1.15rem;
      border: 0;
      border-top: 1px solid color-mix(in srgb, var(--green) 24%, var(--border));
      border-radius: 2.6rem 2.6rem 0 0;
      background: color-mix(in srgb, var(--card-surface) 92%, var(--surface-solid));
      content: "";
    }

    &::after {
      top: -2.25rem;
      right: 2.8%;
      left: 2.8%;
      opacity: 0.72;
    }
  }

  /* Stacked project deck: every shipped build remains visible in one scan. */
  .project-deck {
    display: none;
  }

  .project-deck-card {
    display: grid;
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    gap: clamp(2rem, 4vw, 5rem);
    overflow: hidden;
    padding: clamp(2rem, 4vw, 4rem);
    border: 1px solid color-mix(in srgb, var(--green) 24%, var(--border));
    border-radius: 2.2rem;
    background: var(--card-surface);
    box-shadow: 0 1.8rem 4rem rgba(0, 0, 0, 0.12);

    &:not(:first-child) {
      margin-top: -2rem;
    }

    &:hover,
    &:focus-within {
      position: relative;
      z-index: 2;
    }
  }

  .project-deck-copy {
    display: flex;
    min-width: 0;
    flex-direction: column;
    justify-content: center;
  }

  .project-deck-card {
    .tech-list li,
    .project-links a {
      border-color: #8e7dff;
      background: #7257a8;
      color: #ffffff;
    }

    .project-links a:hover {
      border-color: #a997ff;
      background: #624693;
      color: #ffffff;
    }
  }

  .project-deck-card .project-preview {
    min-height: 0;
  }

  .project-slide {
    display: grid;
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    gap: clamp(2.2rem, 4vw, 5rem);
    height: 40rem;
    min-height: 0;
    padding: clamp(2rem, 3.2vw, 3.4rem);
    touch-action: pan-y;

    &:focus-visible {
      outline: 0;
    }
  }

  .project-copy {
    display: flex;
    min-width: 0;
    flex-direction: column;
    justify-content: center;
    padding: clamp(0.5rem, 1vw, 1.1rem) 0;
  }

  .project-topline {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
  }

  .project-label,
  .stack-label {
    color: var(--green);
    font-size: 1.05rem;
    font-weight: 700;
    letter-spacing: 0.13em;
    text-transform: uppercase;
  }

  .project-count {
    color: var(--text-secondary);
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 0.1em;
  }

  h3 {
    max-width: 50rem;
    margin: 1.3rem 0 1.45rem;
    color: var(--text-color);
    font-size: clamp(2.4rem, 2.75vw, 3.5rem);
    letter-spacing: -0.05em;
    line-height: 1.06;
  }

  .project-description {
    max-width: 50rem;
    color: var(--text-secondary);
    font-size: clamp(1.2rem, 1.3vw, 1.45rem);
    line-height: 1.7;
  }

  .project-stack {
    margin-top: 1.8rem;
  }

  .stack-label {
    display: block;
    margin-bottom: 0.85rem;
  }

  .tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.65rem;

    li {
      padding: 0.58rem 0.9rem;
      border: 1px solid color-mix(in srgb, var(--green) 22%, var(--border));
      border-radius: 999px;
      background: color-mix(in srgb, var(--green) 8%, transparent);
      color: var(--text-secondary);
      font-size: 1.12rem;
      font-weight: 600;
    }
  }

  .project-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.85rem;
    margin-top: 2rem;

    a {
      display: inline-flex;
      min-height: 4.1rem;
      align-items: center;
      gap: 0.75rem;
      padding: 0.9rem 1.25rem;
      border: 1px solid color-mix(in srgb, var(--green) 42%, var(--border));
      border-radius: 999px;
      background: color-mix(in srgb, var(--green) 13%, transparent);
      color: var(--text-color);
      font-size: 1.18rem;
      font-weight: 700;
      transition: border-color 0.2s ease, background-color 0.2s ease;

      @media (hover: hover) and (pointer: fine) {
        &:hover {
          border-color: var(--green);
          background: color-mix(in srgb, var(--green) 22%, transparent);
        }
      }
    }
  }

  .project-preview {
    display: flex;
    min-width: 0;
    height: auto;
    aspect-ratio: 16 / 9;
    min-height: 0;
    flex-direction: column;
    align-self: center;
    padding: 1rem;
    border: 1px solid color-mix(in srgb, var(--pink) 42%, var(--border));
    border-radius: 2rem;
    background: linear-gradient(
      135deg,
      color-mix(in srgb, var(--pink) 76%, #ff3f8d),
      color-mix(in srgb, var(--green) 32%, #ff3f8d)
    );
    box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.16);
  }

  .browser-bar {
    display: flex;
    height: 3.1rem;
    align-items: center;
    gap: 0.65rem;
    padding: 0 1.35rem;
    border-radius: 1.15rem 1.15rem 0 0;
    background: var(--black);

    span {
      width: 0.82rem;
      height: 0.82rem;
      border-radius: 50%;
      background: #ff754f;

      &:nth-child(2) {
        background: #f4be4f;
      }

      &:nth-child(3) {
        background: #42dca0;
      }
    }
  }

  .project-image {
    position: relative;
    min-height: 0;
    flex: 1;
    overflow: hidden;
    border-radius: 0 0 1.15rem 1.15rem;
    background: var(--surface-solid);

    &::after {
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, transparent 70%, rgba(0, 0, 0, 0.12));
      content: "";
      pointer-events: none;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      /* Fill the normalized browser viewport edge-to-edge. */
      object-fit: cover;
      object-position: center;
      background: var(--surface-solid);
    }
  }

  .carousel-footer {
    position: relative;
    z-index: 3;
    display: flex;
    align-items: center;
    gap: 2.4rem;
    margin-top: 1.2rem;
    padding: 0 0 2.2rem clamp(2.2rem, 4vw, 4.2rem);
  }

  .slide-progress {
    display: grid;
    min-width: 0;
    flex: 1;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.75rem;

    button {
      position: relative;
      display: flex;
      height: 3.4rem;
      align-items: center;
      padding: 0;
      border: 0;
      background: transparent;
      cursor: pointer;

      &::before {
        width: 100%;
        height: 0.38rem;
        border-radius: 999px;
        background: color-mix(in srgb, var(--text-secondary) 26%, transparent);
        content: "";
      }

      &:focus-visible {
        outline: 2px solid var(--green);
        outline-offset: 0.45rem;
      }
    }

    .progress-fill {
      position: absolute;
      top: calc(50% - 0.19rem);
      left: 0;
      width: 100%;
      height: 0.38rem;
      border-radius: 999px;
      background: var(--green);
      transform-origin: left center;
    }

    button.is-active {
      .progress-fill {
        box-shadow: 0 0 1.2rem color-mix(in srgb, var(--green) 45%, transparent);
      }
    }
  }

  .carousel-controls {
    display: flex;
    gap: 0.85rem;
    padding-right: clamp(2.2rem, 4vw, 4.2rem);

    button {
      display: grid;
      width: 5rem;
      height: 5rem;
      place-items: center;
      border: 1px solid color-mix(in srgb, var(--green) 30%, var(--border));
      border-radius: 50%;
      background: var(--surface-solid);
      color: var(--text-color);
      cursor: pointer;
      transition: border-color 0.2s ease, background-color 0.2s ease;

      @media (hover: hover) and (pointer: fine) {
        &:hover {
          border-color: var(--green);
          background: color-mix(in srgb, var(--green) 14%, var(--surface-solid));
        }
      }

      &:focus-visible {
        outline: 2px solid var(--green);
        outline-offset: 0.35rem;
      }
    }
  }

  @media (max-width: 800px) {
    margin-top: 9rem;

    .section-heading {
      display: grid;
      gap: 1.2rem;
      margin-bottom: 2.5rem;
    }

    .project-slide {
      grid-template-columns: 1fr;
      gap: 2.5rem;
      height: auto;
      min-height: 0;
    }

    .project-deck-card {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .project-copy {
      order: 2;
      padding: 0;
    }

    .project-preview {
      height: auto;
      aspect-ratio: 16 / 9;
      order: 1;
      min-height: 0;
    }
  }

  @media (max-width: 560px) {
    .project-carousel {
      border-radius: 1.8rem;
    }

    .project-slide {
      gap: 2rem;
      padding: 1.6rem;
    }

    h3 {
      font-size: 2.65rem;
    }

    .project-preview {
      height: auto;
      aspect-ratio: 16 / 9;
      min-height: 0;
      padding: 0.75rem;
      border-radius: 1.45rem;
    }

    .browser-bar {
      height: 2.65rem;
      padding: 0 1.05rem;
    }

    .project-links {
      margin-top: 2rem;
    }

    .carousel-footer {
      gap: 1.4rem;
      padding: 0 1.6rem 1.5rem;
    }

    .slide-progress {
      gap: 0.45rem;
    }

    .carousel-controls {
      gap: 0.55rem;
      padding-right: 0;

      button {
        width: 4.2rem;
        height: 4.2rem;
      }
    }
  }
`;
