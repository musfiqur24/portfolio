import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(30rem, 0.9fr);
  align-items: center;
  gap: clamp(4rem, 7vw, 10rem);
  min-height: min(76rem, 100vh);
  padding: 10.5rem 0 4.5rem;

  .hero-copy {
    max-width: 69rem;
  }

  .hero-kicker {
    display: inline-flex;
    align-items: center;
    color: var(--green);
    font-size: 1.2rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .code-twist {
    display: block;
    width: fit-content;
    margin-top: 0.9rem;
    padding: 0.45rem 0.8rem;
    border-left: 2px solid var(--green);
    border-radius: 0 0.5rem 0.5rem 0;
    background: color-mix(in srgb, var(--surface-solid) 58%, transparent);
    color: var(--text-secondary);
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
    font-size: 1.05rem;
    line-height: 1.6;
    letter-spacing: 0.01em;
    max-width: 100%;

    @media (max-width: 560px) {
      margin-inline: auto;
      font-size: 0.95rem;
    }

    span {
      color: var(--pink);
    }

    strong {
      color: var(--green);
      font-weight: 700;
    }
  }

  h1 {
    max-width: 72rem;
    margin-top: 1.2rem;
    color: var(--text-color);
    font-size: clamp(4.1rem, 5.1vw, 6.5rem);
    font-weight: 700;
    letter-spacing: -0.065em;
    line-height: 0.98;

    span {
      color: var(--green);
    }
  }

  .hero-description {
    max-width: 55rem;
    margin-top: 1.8rem;
    color: var(--text-secondary);
    font-size: clamp(1.75rem, 2.1vw, 2.05rem);
    line-height: 1.55;
  }

  .hero-usp {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.75rem;
    margin-top: 2rem;
  }

  .usp-card {
    display: grid;
    min-height: 6.2rem;
    align-content: center;
    gap: 0.35rem;
    padding: 0.9rem 1rem;
    border: 1px solid color-mix(in srgb, var(--green) 24%, var(--border));
    border-radius: 1rem;
    background: var(--card-bg);
    transition: border-color 0.2s ease, background-color 0.2s ease;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        border-color: color-mix(in srgb, var(--green) 52%, var(--border));
        background: color-mix(in srgb, var(--green) 8%, var(--surface-solid));
      }
    }

    strong {
      overflow: hidden;
      color: var(--text-color);
      font-size: 1.18rem;
      font-weight: 800;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    span {
      overflow: hidden;
      color: var(--text-secondary);
      font-size: 0.98rem;
      line-height: 1.25;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 2rem;
    margin-top: 2.4rem;
  }

  .primary-action {
    display: inline-flex;
    align-items: center;
    min-height: 5.2rem;
    padding: 0 2.1rem;
    border-radius: 1rem;
    box-shadow: 0 1.4rem 3rem rgba(66, 220, 160, 0.17);
    font-size: 1.45rem;
  }

  .secondary-action {
    display: inline-flex;
    align-items: center;
    gap: 0.65rem;
    min-height: 5.2rem;
    padding: 0 1.55rem;
    border: 1px solid var(--border);
    border-radius: 1rem;
    background: var(--surface);
    color: var(--text-color);
    font-size: 1.35rem;
    font-weight: 700;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        border-color: rgba(66, 220, 160, 0.55);
        background: rgba(66, 220, 160, 0.08);
      }
    }
  }

  .hero-visual {
    position: relative;
    display: grid;
    width: min(100%, 56rem);
    min-height: 46rem;
    justify-self: end;
    place-items: center;
    isolation: isolate;
  }

  .visual-parallax {
    position: relative;
    display: grid;
    width: min(100%, 52rem);
    min-height: inherit;
    overflow: visible;
    place-items: center;
    border: 1px solid color-mix(in srgb, var(--green) 18%, var(--border));
    border-radius: 3rem;
    background:
      radial-gradient(circle at 50% 42%, color-mix(in srgb, var(--blue) 18%, transparent), transparent 52%),
      linear-gradient(145deg, var(--surface-solid), var(--card-bg-hover));
  }

  .portrait-frame {
    position: relative;
    z-index: 2;
    display: flex;
    width: min(100%, 28rem);
    height: 36rem;
    align-items: flex-end;
    justify-content: center;
    overflow: hidden;
    border: 1px solid var(--border);
    border-radius: 2.4rem;
    background:
      linear-gradient(155deg, color-mix(in srgb, var(--blue) 22%, var(--card-bg)), transparent 42%),
      linear-gradient(25deg, color-mix(in srgb, var(--green) 22%, var(--card-bg-hover)), transparent 52%),
      var(--card-bg);
    box-shadow: var(--shadow);

    &::after {
      position: absolute;
      inset: 4.8rem 1.1rem 1.1rem;
      z-index: -1;
      border: 1px solid rgba(255, 255, 255, 0.07);
      border-radius: 1.7rem;
      content: "";
    }

    img {
      width: auto;
      max-width: 88%;
      height: 32.2rem;
      object-fit: contain;
      object-position: bottom;
    }
  }

  .portrait-topbar {
    position: absolute;
    top: 1.5rem;
    left: 1.7rem;
    display: flex;
    gap: 0.55rem;

    span {
      width: 0.7rem;
      height: 0.7rem;
      border-radius: 50%;
      background: rgba(246, 249, 255, 0.48);

      &:first-child {
        background: var(--green);
      }
    }
  }

  .visual-orbit {
    position: absolute;
    z-index: 0;
    border: 1px solid rgba(66, 220, 160, 0.3);
    border-radius: 50%;
  }

  .orbit-one {
    width: 42rem;
    height: 42rem;
  }

  .orbit-two {
    width: 49rem;
    height: 49rem;
    border-color: rgba(74, 163, 255, 0.2);
  }

  .visual-note {
    position: absolute;
    z-index: 3;
    border: 1px solid var(--border);
    border-radius: 1.2rem;
    background: rgba(17, 29, 49, 0.88);
    box-shadow: 0 1.5rem 3.5rem rgba(0, 0, 0, 0.19);
    backdrop-filter: blur(12px);
  }

  .availability-note {
    top: 7rem;
    right: -1.2rem;
    display: flex;
    align-items: flex-start;
    gap: 0.9rem;
    padding: 1.2rem 1.4rem;

    strong,
    small {
      display: block;
    }

    strong {
      font-size: 1.2rem;
    }

    small {
      margin-top: 0.3rem;
      color: var(--text-secondary);
      font-size: 1.05rem;
    }
  }

  .note-dot {
    width: 0.8rem;
    height: 0.8rem;
    margin-top: 0.35rem;
    border-radius: 50%;
    background: var(--green);
  }

  .stack-note {
    bottom: 3.5rem;
    left: -1.2rem;
    padding: 1.15rem 1.35rem;

    small,
    strong,
    span {
      display: block;
    }

    small {
      color: var(--green);
      font-size: 1rem;
      font-weight: 800;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    strong {
      margin-top: 0.35rem;
      font-size: 1.15rem;
    }

    span {
      margin-top: 0.25rem;
      color: var(--text-secondary);
      font-size: 1rem;
    }
  }

  @media (max-width: 1050px) {
    grid-template-columns: minmax(0, 1fr) minmax(27rem, 0.8fr);
    gap: 4rem;

    .visual-note {
      transform: scale(0.9);
    }

    .hero-visual {
      width: 100%;
    }

    .availability-note {
      right: -3.5rem;
    }

  }

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    min-height: 0;
    padding-top: 12rem;
    text-align: center;

    .hero-copy {
      max-width: 72rem;
      margin: 0 auto;
    }

    .hero-kicker,
    .hero-actions {
      justify-content: center;
    }

    .hero-visual {
      order: -1;
      min-height: 42rem;
      justify-self: center;
    }

    .visual-parallax {
      width: min(100%, 50rem);
    }

    .portrait-frame {
      width: 25rem;
      height: 32rem;

      img {
        height: 28.5rem;
      }
    }

    .orbit-one {
      width: 36rem;
      height: 36rem;
    }

    .orbit-two {
      width: 41rem;
      height: 41rem;
    }

    .hero-usp {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 560px) {
    gap: 3.2rem;
    padding: 10.5rem 0 5rem;

    h1 {
      font-size: clamp(4rem, 12vw, 5.4rem);
    }

    .hero-description {
      font-size: 1.7rem;
    }

    .hero-actions {
      gap: 1.5rem;
    }

    .primary-action {
      width: 100%;
      justify-content: center;
    }

    .hero-visual {
      min-height: 34rem;
    }

    .visual-parallax {
      min-height: inherit;
      border-radius: 2.2rem;
    }

    .portrait-frame {
      width: 21rem;
      height: 29rem;
      border-radius: 1.9rem;

      img {
        height: 24rem;
      }
    }

    .orbit-one {
      width: 28rem;
      height: 28rem;
    }

    .orbit-two {
      width: 33rem;
      height: 33rem;
    }

    .visual-note {
      transform: scale(0.74);
    }

    .availability-note {
      top: 2.5rem;
      right: 0.3rem;
      transform-origin: top right;
    }

    .stack-note {
      bottom: 0.3rem;
      left: 0.3rem;
      transform-origin: bottom left;
    }

    .secondary-action {
      width: 100%;
      justify-content: center;
    }
  }
`;
