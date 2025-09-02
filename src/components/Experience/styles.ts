import styled from "styled-components";

export const Container = styled.section`
  margin-top: 10rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  h2 {
    grid-column: 1 / -1;
    font-size: 3rem;
    color: var(--green);
    text-align: center;
    margin-bottom: 3rem;
  }

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const Card = styled.div`
  background: #2b2b2b;
  border-radius: 1rem;
  padding: 2rem;
  color: #f1f1f1;
  box-shadow: 0 8px 18px rgba(0,0,0,0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.45);
  }

  h3 {
    font-size: 1.8rem;
    color: var(--green);
    margin-bottom: 0.3rem;
  }

  h4 {
    font-size: 1.4rem;
    font-weight: 500;
    color: #ffcc00;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.2rem;
    color: #bbb;
    margin: 0.2rem 0;
  }

  ul {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-top: 1rem;
    padding-left: 1.5rem;
    text-align: left;

    li {
      margin-bottom: 0.6rem;
    }
  }
`;
