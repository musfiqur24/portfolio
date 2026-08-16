import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;

  .about-layout {
    display: grid;
    grid-template-columns: minmax(0, 1.08fr) minmax(26rem, 0.92fr);
    gap: clamp(3rem, 5vw, 6.5rem);
    align-items: center;
    padding: clamp(2.4rem, 4vw, 4.4rem);
    border: 1px solid color-mix(in srgb, var(--green) 28%, var(--border));
    border-radius: 2.4rem;
    background:
      radial-gradient(
        circle at 0% 0%,
        color-mix(in srgb, var(--green) 14%, transparent),
        transparent 34rem
      ),
      var(--card-bg);
    box-shadow: 0 2.4rem 6rem rgba(0, 0, 0, 0.16);
  }

  .section-heading,
  .panel-heading {
    .eyebrow {
      display: inline-block;
      margin-bottom: 0.85rem;
      color: var(--green);
      font-size: 1.15rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
    }
  }

  .section-heading {
    h2 {
      max-width: 46rem;
      margin-bottom: 1.5rem;
      color: var(--text-color);
      font-size: clamp(3.3rem, 4vw, 5rem);
      line-height: 1.05;
      letter-spacing: -0.045em;
    }

    .intro-copy {
      max-width: 62rem;
      color: var(--text-secondary);
      font-size: clamp(1.7rem, 1.8vw, 1.95rem);
      line-height: 1.72;
    }
  }

  .intro-column {
    padding-left: clamp(2.4rem, 4vw, 5rem);
    border-left: 1px solid var(--border);
  }

  .about-copy {
    display: grid;
    gap: 0.85rem;

    p {
      color: var(--text-secondary);
      font-size: 1.65rem;
      line-height: 1.7;
    }
  }

  .focus-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    margin-top: 2.4rem;
    padding-top: 2.2rem;
    border-top: 1px solid var(--border);

    span {
      padding: 0.7rem 1.05rem;
      border: 1px solid var(--highlight-start);
      border-radius: 999px;
      background: linear-gradient(135deg, var(--highlight-start), var(--highlight-end));
      color: #ffffff;
      font-size: 1.3rem;
      font-weight: 500;
    }
  }

  .about-details {
    margin-top: 2rem;
  }

  .education-panel {
    min-width: 0;
    padding: clamp(2rem, 3vw, 3.2rem);
    border: 1px solid var(--border);
    border-radius: 2rem;
    background: var(--card-surface);

  }

  .panel-heading {
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 1.5rem;
    margin-bottom: 2rem;

    .eyebrow {
      margin-bottom: 0.35rem;
    }

    h3 {
      color: var(--text-color);
      font-size: clamp(2.2rem, 2.6vw, 2.8rem);
      letter-spacing: -0.03em;
    }
  }

  .education-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.2rem;
  }

  @media (max-width: 960px) {
    .about-layout {
      grid-template-columns: minmax(0, 1fr) minmax(23rem, 0.9fr);
      gap: 3rem;
    }

  }

  @media (max-width: 700px) {
    margin-top: 9rem;

    .about-layout {
      grid-template-columns: 1fr;
      gap: 2.8rem;
      padding: 2.2rem;
    }

    .intro-column {
      text-align: center;
      padding-left: 0;
      border-left: 0;
    }

    .section-heading h2 {
      margin-right: auto;
      margin-left: auto;
    }

    .focus-list {
      justify-content: center;
    }
  }

  @media (max-width: 480px) {
    .education-panel {
      padding: 1.7rem;
      border-radius: 1.6rem;
    }

    .education-grid {
      grid-template-columns: 1fr;
    }

  }
`;

export const EducationCard = styled.article<{ $isOpen: boolean }>`
  position: relative;
  overflow: hidden;
  border: 1px solid
    ${({ $isOpen }) =>
      $isOpen
        ? "color-mix(in srgb, var(--green) 56%, var(--border))"
        : "color-mix(in srgb, var(--green) 23%, var(--border))"};
  border-radius: 1.45rem;
  background: linear-gradient(
    145deg,
    ${({ $isOpen }) =>
      $isOpen
        ? "color-mix(in srgb, var(--green) 16%, transparent)"
        : "color-mix(in srgb, var(--green) 10%, transparent)"},
    transparent 58%
  );
  box-shadow: ${({ $isOpen }) =>
    $isOpen ? "0 1.5rem 3.5rem rgba(0, 0, 0, 0.14)" : "none"};
  transition:
    border-color 0.24s ease,
    box-shadow 0.24s ease,
    background 0.24s ease;

  .education-summary {
    display: flex;
    width: 100%;
    min-height: 18.6rem;
    flex-direction: column;
    align-items: flex-start;
    padding: 2.1rem;
    border: 0;
    background: transparent;
    color: inherit;
    cursor: pointer;
    font: inherit;
    text-align: left;
  }

  .education-summary:focus-visible {
    outline: 2px solid var(--green);
    outline-offset: -0.55rem;
  }

  .card-index {
    margin-bottom: 2.4rem;
    color: var(--green);
    font-size: 1.15rem;
    font-weight: 700;
    letter-spacing: 0.12em;
  }

  .summary-copy {
    display: grid;
    gap: 0.65rem;
  }

  .degree {
    max-width: 24rem;
    color: var(--text-color);
    font-size: 1.65rem;
    font-weight: 700;
    line-height: 1.35;
  }

  .institute {
    color: var(--green);
    font-size: 1.35rem;
    font-weight: 600;
    line-height: 1.45;
  }

  .drawer-toggle {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    margin-top: auto;
    color: var(--text-secondary);
    font-size: 1.2rem;
    font-weight: 700;
  }

  .drawer-chevron {
    width: 0.68rem;
    height: 0.68rem;
    margin-top: -0.32rem;
    border-right: 0.16rem solid var(--green);
    border-bottom: 0.16rem solid var(--green);
    transform: ${({ $isOpen }) =>
      $isOpen ? "rotate(225deg) translate(-0.12rem, -0.12rem)" : "rotate(45deg)"};
    transition: transform 0.24s ease;
  }

  .education-drawer {
    overflow: hidden;
  }

  .drawer-content {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.95rem;
    padding: 1.7rem 2.1rem 2.1rem;
    border-top: 1px solid color-mix(in srgb, var(--green) 26%, var(--border));
  }

  .drawer-item {
    min-width: 0;
    padding: 0.95rem 1rem;
    border: 1px solid color-mix(in srgb, var(--text-color) 8%, var(--border));
    border-radius: 0.95rem;
    background: color-mix(in srgb, var(--text-color) 3%, transparent);

    span {
      display: block;
      margin-bottom: 0.42rem;
      color: var(--text-secondary);
      font-size: 1rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    p {
      color: var(--text-color);
      font-size: 1.18rem;
      font-weight: 600;
      line-height: 1.45;
    }
  }

  .drawer-item-wide {
    grid-column: 1 / -1;
  }

  .drawer-result {
    border-color: color-mix(in srgb, var(--green) 38%, var(--border));
    background: color-mix(in srgb, var(--green) 12%, transparent);
  }

  @media (max-width: 480px) {
    .education-summary {
      min-height: 16.5rem;
      padding: 1.75rem;
    }

    .card-index {
      margin-bottom: 1.85rem;
    }

    .drawer-content {
      grid-template-columns: 1fr;
      padding: 1.45rem 1.75rem 1.75rem;
    }

    .drawer-item-wide {
      grid-column: auto;
    }
  }
`;
