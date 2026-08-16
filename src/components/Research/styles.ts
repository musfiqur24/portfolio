import styled from "styled-components";

export const Container = styled.section`
  padding: 8rem 0 3rem;

  .section-heading {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(24rem, 0.7fr);
    gap: 3rem;
    align-items: end;
    margin-bottom: 2.6rem;
  }

  .eyebrow {
    color: var(--green);
    font-size: 1.1rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  h2 {
    margin-top: 0.8rem;
    font-size: clamp(3rem, 4vw, 5rem);
    letter-spacing: -0.055em;
    line-height: 1;
  }

  .section-heading > p {
    color: var(--text-secondary);
    font-size: 1.55rem;
    line-height: 1.65;
  }

  .research-card {
    position: relative;
    display: grid;
    grid-template-columns: minmax(0, 1.25fr) minmax(25rem, 0.75fr);
    gap: 3.5rem;
    align-items: start;
    padding: clamp(2.2rem, 4vw, 4rem);
    border: 1px solid var(--border);
    border-radius: 2rem;
    background: var(--card-surface);
    box-shadow: var(--shadow);

  }

  .research-meta,
  .research-block-title {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    color: var(--green);
    font-size: 1.05rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .research-icon {
    display: inline-grid;
    width: 3.1rem;
    height: 3.1rem;
    place-items: center;
    border: 1px solid color-mix(in srgb, var(--green) 35%, var(--border));
    border-radius: 0.9rem;
    background: color-mix(in srgb, var(--green) 10%, transparent);
  }

  h3 {
    max-width: 70rem;
    margin-top: 1.8rem;
    font-size: clamp(2.2rem, 3vw, 3.6rem);
    letter-spacing: -0.045em;
    line-height: 1.08;
  }

  .research-authors {
    margin-top: 0.9rem;
    color: var(--green);
    font-size: 1.3rem;
    font-weight: 700;
  }

  .research-summary,
  .research-block p {
    color: var(--text-secondary);
    font-size: 1.45rem;
    line-height: 1.7;
  }

  .research-summary {
    max-width: 69rem;
    margin-top: 1.6rem;
  }

  .research-objective {
    margin-top: 2.2rem;
    padding: 1.5rem 1.6rem;
    border: 1px solid var(--research-highlight-start);
    border-radius: 1.2rem;
    background: linear-gradient(135deg, var(--research-highlight-start), var(--research-highlight-end));
    color: #ffffff;
  }

  .research-objective p {
    margin-top: 0.8rem;
    color: rgba(255, 255, 255, 0.88);
  }

  .research-objective .research-block-title {
    color: #ffffff;
  }

  .research-snapshot {
    margin-top: 2rem;
    padding-top: 1.6rem;
    border-top: 1px solid var(--border);
  }

  .snapshot-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.8rem;
    margin-top: 1rem;
  }

  .snapshot-card {
    display: grid;
    gap: 0.3rem;
    min-height: 8rem;
    align-content: center;
    padding: 0.9rem;
    border: 1px solid var(--research-highlight-start);
    border-radius: 0.85rem;
    background: linear-gradient(135deg, var(--research-highlight-start), var(--research-highlight-end));
    color: #ffffff;
  }

  .snapshot-card:nth-child(2),
  .snapshot-card:nth-child(4) {
    background: linear-gradient(135deg, var(--research-highlight-mid), var(--research-highlight-end));
  }

  .snapshot-card span,
  .snapshot-card small {
    color: rgba(255, 255, 255, 0.78);
    font-size: 1rem;
  }

  .snapshot-card strong {
    color: #ffffff;
    font-size: 2rem;
    letter-spacing: -0.04em;
  }

  .snapshot-note {
    margin-top: 0.8rem;
    color: var(--text-secondary);
    font-size: 1.1rem;
    line-height: 1.45;
  }

  .research-results {
    display: grid;
    align-content: start;
    gap: 1.7rem;
    padding-left: 2.8rem;
    border-left: 1px solid color-mix(in srgb, var(--border) 75%, transparent);
  }

  .research-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
    margin-top: 1rem;
  }

  .research-tags span {
    padding: 0.7rem 0.9rem;
    border: 1px solid var(--research-highlight-start);
    border-radius: 0.8rem;
    background: linear-gradient(135deg, var(--research-highlight-start), var(--research-highlight-end));
    color: #ffffff;
    font-size: 1.15rem;
    font-weight: 700;
  }

  .detail-list {
    display: grid;
    gap: 0.55rem;
    margin-top: 1rem;
  }

  .detail-list li {
    display: flex;
    align-items: flex-start;
    gap: 0.7rem;
    color: var(--text-secondary);
    font-size: 1.3rem;
  }

  .detail-list svg {
    flex: 0 0 auto;
    margin-top: 0.2rem;
    color: var(--green);
  }

  .metric-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.65rem;
    margin-top: 1rem;
  }

  .metric-grid span {
    padding: 0.85rem 0.9rem;
    border: 1px solid var(--research-highlight-start);
    border-radius: 0.8rem;
    background: linear-gradient(135deg, var(--research-highlight-start), var(--research-highlight-end));
    color: #ffffff;
    font-size: 1.15rem;
    font-weight: 700;
  }

  .comparison-note {
    margin-top: 0.8rem;
    color: var(--text-secondary);
    font-size: 1.1rem;
    line-height: 1.45;
  }

  .research-finding {
    display: grid;
    gap: 0.5rem;
    padding: 1.5rem 1.6rem;
    border: 1px solid color-mix(in srgb, var(--green) 35%, var(--border));
    border-left: 3px solid var(--green);
    border-radius: 1.1rem;
    background: linear-gradient(135deg, var(--research-highlight-start), var(--research-highlight-end));
    color: #ffffff;
    box-shadow: 0 1rem 2.8rem color-mix(in srgb, var(--green) 8%, transparent);
  }

  .research-finding span {
    color: rgba(255, 255, 255, 0.82);
    font-size: 1rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .research-finding strong {
    font-size: 1.3rem;
    line-height: 1.4;
  }

  .research-finding small {
    color: rgba(255, 255, 255, 0.78);
    font-size: 1.1rem;
    line-height: 1.45;
  }

  .research-link {
    position: absolute;
    right: 3.8rem;
    bottom: 2.2rem;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--green);
    font-size: 1.2rem;
    font-weight: 800;
  }

  @media (max-width: 800px) {
    padding-top: 6rem;

    .section-heading,
    .research-card {
      grid-template-columns: 1fr;
    }

    .snapshot-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .research-results {
      padding-top: 2rem;
      padding-left: 0;
      border-top: 1px solid var(--border);
      border-left: 0;
    }

    .research-link {
      position: static;
      justify-self: start;
      margin-top: -1rem;
    }
  }
`;
