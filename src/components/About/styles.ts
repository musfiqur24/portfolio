import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  /* Section headings */
  h2 {
    display: inline-block;
    margin-bottom: 2rem;
    font-size: 3.2rem;
    font-weight: 700;
    color: var(--green);
    letter-spacing: 0.05rem;
    position: relative;
  }

  h3 {
    margin-top: 2.5rem;
    color: var(--green);
    font-size: 2.2rem;
    font-weight: 600;
  }

  /* Paragraphs */
  p {
    font-size: 1.9rem;
    line-height: 1.8;
    letter-spacing: 0.05rem;
    font-weight: 400;
    color: var(--text-secondary); /* theme-aware */
    margin-bottom: 1.2rem;
    transition: transform 0.2s ease, color 0.2s ease;

    &:hover {
      transform: translateX(5px);
      color: var(--text-color); /* highlight on hover */
    }
  }

  /* Skills Section */
  .hard-skills {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .hability {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease;

    img {
      width: 3.6rem;
      transition: transform 0.3s ease, filter 0.3s ease;
    }

    &:hover {
      transform: translateY(-6px);
      img {
        transform: scale(1.2);
        filter: drop-shadow(0px 0px 6px var(--green));
      }
    }
  }

  /* Education Grid */
  .education-grid {
    margin-top: 2.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: stretch;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  /* About Image */
  .about-image {
    text-align: center;

    img {
      margin-top: 2rem;
      width: 75%;
      border-radius: 1rem;
      box-shadow: 0 8px 18px rgba(0, 0, 0, 0.3);
      transition: transform 0.4s ease, filter 0.4s ease;

      &:hover {
        transform: scale(1.05);
        filter: brightness(1.1);
      }
    }
  }

  /* Responsive adjustments */
  @media (max-width: 960px) {
    display: block;
    text-align: center;

    .hard-skills {
      justify-content: center;
    }

    .about-image img {
      width: 100%;
    }
  }
`;

export const EducationCard = styled.div`
  background: var(--card-bg); /* theme-aware background */
  border-radius: 1rem;
  padding: 2rem;
  color: var(--text-color);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.45);
  }

  h4 {
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--green);
    margin-bottom: 0.6rem;
  }

  .institute {
    font-size: 1.5rem;
    font-weight: 500;
    color: #ffcc00;
    margin-bottom: 0.4rem;
  }

  .duration {
    font-size: 1.3rem;
    font-style: italic;
    color: var(--text-secondary);
    margin-bottom: 0.3rem;
  }

  .location {
    font-size: 1.3rem;
    color: var(--text-secondary);
    margin-bottom: 0.5rem;
  }

  .details {
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--text-color);
    border-left: 3px solid var(--green);
    padding-left: 0.8rem;
  }
`;
