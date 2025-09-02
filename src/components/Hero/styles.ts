import styled from "styled-components";

export const Container = styled.section`
  margin-top: 10rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  .hero-text {
    /* Intro Text */
    p {
      font-size: 2.8rem;
      color: var(--text-color); /* theme-aware */
    }

    /* Name Styling */
    h1 {
      font-size: 4.5rem;
      line-height: 1.2;
      font-weight: bold;
      letter-spacing: 1px;
      background: linear-gradient(90deg, var(--green), #00ffaa);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    /* Role / Title */
    h3 {
      color: var(--green);
      margin: 1rem 0;
      font-size: 2.8rem;
    }

    /* Short Description */
    .small-resume {
      font-size: 2.4rem;
      margin-bottom: 2rem;
      color: var(--text-secondary); /* theme-aware secondary text */
    }

    /* Highlights Section */
    .highlights {
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;
      margin-bottom: 3rem;

      span {
        background: rgba(0, 204, 102, 0.15);
        color: var(--green);
        padding: 0.6rem 1.2rem;
        border-radius: 20px;
        font-size: 1.2rem;
        font-weight: 500;
        transition: background 0.3s ease, transform 0.3s ease;
      }

      span:hover {
        background: rgba(0, 204, 102, 0.3);
        transform: translateY(-2px);
      }
    }

    /* Buttons */
    .button {
      display: inline-block;
      padding: 1.2rem 3rem;
      margin-right: 1rem;
      border-radius: 8px;
      font-weight: bold;
      text-decoration: none;
      transition: 0.3s ease;
    }

    .primary {
      background: var(--green);
      color: #fff;
    }

    .primary:hover {
      background: #00cc66;
      transform: translateY(-3px);
    }

    .secondary {
      border: 2px solid var(--green);
      color: var(--green);
    }

    .secondary:hover {
      background: var(--green);
      color: #fff;
      transform: translateY(-3px);
    }

    /* Social Media Icons */
    .social-media {
      display: flex;
      gap: 1rem;
      padding-top: 3rem;

      a {
        transition: transform 0.3s;
      }

      a:hover {
        transform: scale(1.2);
      }

      img {
        width: 3.5rem;
      }
    }
  }

  /* Hero Image */
  .hero-image {
    display: flex;
    justify-content: center;

    img {
      max-width: 500px;
      transition: transform 0.4s ease;
    }

    img:hover {
      transform: scale(1.05);
    }
  }

  /* Responsive Layout */
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    text-align: center;

    .hero-image {
      order: -1;
      margin-bottom: 2rem;
    }
  }
`;
