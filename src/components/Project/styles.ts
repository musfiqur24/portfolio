import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  padding: 2rem;

  // Light Mode Variables (example values)
  &.light-mode {
    --card-bg: #e0f2f7; // A warm light blue for card background
    --text-color: #333333; // Darker text for readability
    --green: #007bff; // A vibrant blue for accents
    --text-secondary: #555555; // Slightly lighter text
    --pink: #ff6f61; // A warm pink for hover effect
  }
  .project-image {
  margin: 10px 0;
  text-align: center;
}

.project-image img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  transition: transform 0.3s ease-in-out;
}

.project-image img:hover {
  transform: scale(1.05);
}

  h2 {
    text-align: center;
    font-size: 3.5rem;
    font-weight: 700;
    color: var(--green);
    margin-bottom: 4rem;
    letter-spacing: 0.05rem;
    position: relative;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;

    .project {
      background: var(--card-bg, #2b2b2b);
      border-radius: 1.2rem;
      padding: 2.2rem;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: var(--text-color, #fff);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
      transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease,
        color 0.3s ease;

      &:hover {
        transform: translateY(-8px) scale(1.02);
        background: var(--blue, #87CEFA);
        box-shadow: 0 12px 28px rgba(0, 0, 0, 0.45);
      }

      /* 🔥 Light mode hover: turn all text + icons white */
      .light-mode &.project:hover {
        color: #fff;

        h3,
        p,
        footer .tech-list li {
          color: #fff;
        }

        svg {
          stroke: #fff;
        }
      }

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 2.5rem;

        svg {
          stroke: var(--green, #23ce6b);
        }

        .project-links {
          display: flex;
          align-items: center;
          gap: 1.2rem;

          a img {
            width: 4.5rem;
            transition: transform 0.3s ease, filter 0.3s ease;

            &:hover {
              transform: scale(1.15);
              filter: drop-shadow(0px 0px 6px var(--green));
            }
          }
        }
      }


      h3 {
        margin-bottom: 1.5rem;
        font-size: 2.2rem;
        font-weight: 600;
        color: var(--green);
      }

      p {
        font-size: 1.6rem;
        line-height: 1.7;
        letter-spacing: 0.05rem;
        margin-bottom: 2rem;
        color: var(--text-secondary, #ddd);
        transition: transform 0.2s ease, color 0.2s ease;

        &:hover {
          transform: translateX(5px);
          color: var(--text-color, #fff);
        }
      }

      footer {
        margin-top: auto;

        .tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 1.2rem;
          font-size: 1.4rem;
          opacity: 0.75;

          li {
            background: rgba(255, 255, 255, 0.1);
            padding: 0.4rem 1rem;
            border-radius: 0.6rem;
            transition: background 0.3s ease, color 0.3s ease;

            &:hover {
              background: rgba(255, 255, 255, 0.25);
            }
          }
        }
      }
    }
  }

  @media (max-width: 1200px) {
    .projects {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 768px) {
    .projects {
      grid-template-columns: 1fr;
    }

    h2 {
      font-size: 2.8rem;
    }
  }
`;
