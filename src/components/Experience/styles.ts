import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;

  .section-heading {
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 3rem;
    padding: 0 0 2.4rem;
    border-bottom: 1px solid var(--border);

    .eyebrow {
      display: inline-block;
      margin-bottom: 0.8rem;
      color: var(--green);
      font-size: 1.15rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
    }

    h2 {
      color: var(--text-color);
      font-size: clamp(3.3rem, 4vw, 5rem);
      letter-spacing: -0.05em;
      line-height: 1;
    }

    p {
      max-width: 44rem;
      color: var(--text-secondary);
      font-size: 1.55rem;
      line-height: 1.65;
    }
  }

  .experience-list {
    display: grid;
    gap: 1.4rem;
    margin-top: 2.2rem;
  }

  @media (max-width: 700px) {
    margin-top: 9rem;

    .section-heading {
      display: grid;
      gap: 1.2rem;
    }
  }
`;

export const Card = styled.article`
  display: grid;
  grid-template-columns: 7.2rem minmax(0, 1fr);
  position: relative;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 1.9rem;
  background: var(--card-surface);
  box-shadow: 0 1.8rem 4.5rem rgba(0, 0, 0, 0.13);
  transition:
    border-color 0.24s ease,
    background-color 0.24s ease,
    box-shadow 0.24s ease;

  &[data-open="true"] {
    border-color: color-mix(in srgb, var(--green) 44%, var(--border));
    background: color-mix(in srgb, var(--card-bg-hover) 72%, var(--card-bg));
    box-shadow: 0 2.2rem 5.5rem rgba(0, 0, 0, 0.18);
  }

  .role-index {
    display: grid;
    place-items: center;
    align-content: start;
    padding-top: 3.3rem;
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    background: linear-gradient(180deg, var(--section-accent-start), var(--section-accent-end));
    color: #ffffff;
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: 0.1em;
  }

  .role-content {
    min-width: 0;
  }

  .role-summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    min-height: 14.8rem;
    gap: 2.4rem;
    padding: clamp(2.2rem, 3.2vw, 3.5rem);
  }

  .drawer-trigger {
    position: absolute;
    z-index: 1;
    inset: 0;
    width: 100%;
    margin: 0;
    border: 0;
    border-radius: inherit;
    background: transparent;
    color: inherit;
    cursor: pointer;

    &:focus-visible {
      outline: 2px solid var(--green);
      outline-offset: -0.55rem;
    }
  }

  .role-heading,
  .role-actions {
    pointer-events: none;
  }

  .role-heading {
    min-width: 0;
  }

  .role-label {
    display: inline-block;
    margin-bottom: 0.8rem;
    color: var(--green);
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  h3 {
    max-width: 50rem;
    color: var(--text-color);
    font-size: clamp(2rem, 2.5vw, 2.8rem);
    letter-spacing: -0.035em;
    line-height: 1.15;
  }

  h4 {
    margin-top: 0.65rem;
    color: var(--text-secondary);
    font-size: 1.45rem;
    font-weight: 500;
  }

  .role-actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    min-width: 20rem;
    gap: 1.7rem;
  }

  .role-meta {
    display: grid;
    min-width: 17rem;
    gap: 0.45rem;
    align-content: start;
    color: var(--text-secondary);
    font-size: 1.2rem;
    line-height: 1.45;
    text-align: right;
  }

  .drawer-indicator {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 4rem;
    gap: 0.75rem;
    padding: 1rem 1.15rem;
    border: 1px solid var(--highlight-start);
    border-radius: 999px;
    background: linear-gradient(135deg, var(--section-accent-start), var(--section-accent-end));
    color: #ffffff;
    font-size: 1.08rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    line-height: 1;
    text-transform: uppercase;
    white-space: nowrap;

    svg {
      flex: 0 0 auto;
      transition: transform 0.28s ease;
    }
  }

  &[data-open="true"] .drawer-indicator svg {
    transform: rotate(180deg);
  }

  .role-drawer {
    overflow: hidden;
  }

  .drawer-inner {
    padding: 0 clamp(2.2rem, 3.2vw, 3.5rem) clamp(2.4rem, 3.2vw, 3.4rem);
  }

  .drawer-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    padding-top: 2.15rem;
    border-top: 1px solid color-mix(in srgb, var(--border) 84%, transparent);
    color: var(--text-secondary);
    font-size: 1.05rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;

    span:last-child {
      color: var(--green);
      letter-spacing: 0.06em;
      white-space: nowrap;
    }
  }

  ul {
    display: grid;
    gap: 0.9rem;
    margin-top: 1.65rem;

    li {
      position: relative;
      padding-left: 1.9rem;
      color: var(--text-secondary);
      font-size: 1.45rem;
      line-height: 1.6;

      &::before {
        position: absolute;
        top: 0.7rem;
        left: 0;
        width: 0.65rem;
        height: 0.65rem;
        border-radius: 999px;
        background: var(--green);
        content: "";
        box-shadow: 0 0 0 0.35rem color-mix(in srgb, var(--green) 12%, transparent);
      }
    }
  }

  @media (max-width: 700px) {
    grid-template-columns: 4.8rem minmax(0, 1fr);

    .role-index {
      padding-top: 2.8rem;
    }

    .role-summary {
      align-items: start;
      gap: 1.6rem;
    }

    .role-actions {
      display: grid;
      justify-items: end;
      min-width: 0;
      gap: 1rem;
    }

    .role-meta {
      grid-template-columns: repeat(2, minmax(0, max-content));
      gap: 0.8rem 1.2rem;
      min-width: 0;
      text-align: left;
    }
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;

    .role-index {
      display: flex;
      align-items: center;
      padding: 1.2rem 1.8rem;
      border-right: 0;
      border-bottom: 1px solid color-mix(in srgb, var(--green) 24%, var(--border));
      background: linear-gradient(
        90deg,
        color-mix(in srgb, var(--green) 13%, transparent),
        transparent 40%
      );
    }

    .role-summary {
      display: grid;
      min-height: 0;
      gap: 1.8rem;
      padding-top: 2rem;
    }

    .role-actions {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }

    .role-meta {
      grid-template-columns: 1fr;
    }

    .drawer-indicator {
      padding: 0.95rem;

      span {
        display: none;
      }
    }

    .drawer-inner {
      padding-bottom: 2.5rem;
    }

    .drawer-heading {
      align-items: start;
      display: grid;
      gap: 0.5rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    &,
    .drawer-indicator svg {
      transition: none;
    }
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;
