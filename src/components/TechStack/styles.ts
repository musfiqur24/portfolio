import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;

  .tech-stack-header {
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 3rem;
    margin-bottom: 3rem;
  }

  .section-heading {
    max-width: 62rem;

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
      color: var(--text-color);
      font-size: clamp(3.3rem, 4vw, 5rem);
      letter-spacing: -0.05em;
      line-height: 1;
    }
  }

  .section-summary {
    max-width: 39rem;
    color: var(--text-secondary);
    font-size: clamp(1.45rem, 1.7vw, 1.7rem);
    line-height: 1.65;
  }

  .technology-groups {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.4rem;
    align-items: stretch;
  }

  .technology-group {
    display: flex;
    height: 26rem;
    flex-direction: column;
    padding: clamp(1.7rem, 2.2vw, 2.25rem);
    border: 1px solid color-mix(in srgb, var(--green) 24%, var(--border));
    border-radius: 2rem;
    background:
      radial-gradient(
        circle at 100% 0%,
        color-mix(in srgb, var(--pink) 12%, transparent),
        transparent 17rem
      ),
      var(--card-bg);
    box-shadow: 0 1.5rem 3.5rem rgba(0, 0, 0, 0.1);
    transition:
      border-color 0.22s ease,
      box-shadow 0.22s ease;
    will-change: transform;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        border-color: color-mix(in srgb, var(--green) 48%, var(--border));
        box-shadow: 0 2.1rem 4.2rem rgba(0, 0, 0, 0.15);
      }
    }
  }

  .group-heading {
    display: flex;
    align-items: flex-start;
    gap: 1.15rem;
    margin-bottom: 1.45rem;

    .group-number {
      display: grid;
      width: 2.7rem;
      height: 2.7rem;
      flex: 0 0 auto;
      place-items: center;
      border: 1px solid color-mix(in srgb, var(--green) 38%, var(--border));
      border-radius: 0.95rem;
      background: color-mix(in srgb, var(--green) 11%, transparent);
      color: var(--green);
      font-size: 0.95rem;
      font-weight: 800;
      letter-spacing: 0.06em;
    }

    h3 {
      margin-bottom: 0.4rem;
      color: var(--text-color);
      font-size: clamp(1.55rem, 1.7vw, 1.9rem);
      letter-spacing: -0.03em;
    }

    p {
      color: var(--text-secondary);
      font-size: 1.08rem;
      line-height: 1.45;
    }
  }

  .technology-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.65rem;
  }

  .technology-tile {
    display: flex;
    min-width: 0;
    min-height: 4.55rem;
    align-items: center;
    gap: 0.7rem;
    padding: 0.7rem 0.8rem;
    border: 1px solid var(--border);
    border-radius: 0.95rem;
    background: color-mix(in srgb, var(--text-color) 3%, transparent);
    transition:
      border-color 0.2s ease,
      background-color 0.2s ease;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        border-color: color-mix(in srgb, var(--green) 46%, var(--border));
        background: color-mix(in srgb, var(--green) 8%, transparent);
      }
    }
  }

  .technology-icon {
    display: grid;
    width: 2.15rem;
    height: 2.15rem;
    flex: 0 0 auto;
    place-items: center;
    color: var(--text-color);

    svg {
      width: 1.9rem;
      height: 1.9rem;
      fill: currentColor;
    }

    .lucide {
      fill: none;
      stroke: currentColor;
    }

    img {
      width: 1.9rem;
      height: 1.9rem;
      object-fit: contain;
    }
  }

  .technology-copy {
    display: grid;
    min-width: 0;
    gap: 0.2rem;
  }

  .technology-name,
  .technology-description {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .technology-name {
    color: var(--text-color);
    font-size: 1.1rem;
    font-weight: 650;
  }

  .technology-description {
    color: var(--text-secondary);
    font-size: 0.98rem;
    line-height: 1.2;
  }

  @media (max-width: 1080px) {
    .technology-groups {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 780px) {
    margin-top: 9rem;

    .tech-stack-header {
      display: grid;
      align-items: start;
      gap: 1.3rem;
    }
  }

  @media (max-width: 640px) {
    .technology-groups {
      grid-template-columns: 1fr;
    }

    .technology-group {
      height: auto;
      min-height: 0;
    }
  }

  @media (max-width: 390px) {
    .technology-group {
      padding: 1.55rem;
      border-radius: 1.55rem;
    }

    .technology-list {
      grid-template-columns: 1fr;
    }
  }
`;
