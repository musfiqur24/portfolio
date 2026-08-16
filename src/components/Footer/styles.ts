import styled from "styled-components";

export const Container = styled.footer`
  &.footer {
    margin-top: 12rem;
    padding: 2.6rem clamp(2rem, 7vw, 10rem);
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    border-top-color: color-mix(in srgb, var(--text-color) 14%, transparent);
    background: var(--card-bg);
    color: var(--text-color);
  }

  .footer-inner {
    display: grid;
    grid-template-columns: minmax(20rem, 1fr) auto minmax(20rem, 1fr);
    align-items: center;
    gap: 2.4rem;
    max-width: 130rem;
    margin: 0 auto;
  }

  .footer-brand {
    display: inline-flex;
    align-items: center;
    justify-self: start;
    gap: 1.1rem;
    color: var(--text-color);

    > span:last-child {
      display: grid;
      gap: 0.15rem;
    }

    strong {
      font-size: 1.55rem;
      font-weight: 700;
    }

    small {
      color: var(--text-secondary);
      font-size: 1.2rem;
      font-weight: 500;
    }
  }

  .brand-mark {
    display: grid;
    place-items: center;
    width: 4.2rem;
    height: 4.2rem;
    border-radius: 1.2rem;
    background: var(--green);
    color: #fff;
    font-size: 1.3rem;
    font-weight: 800;
    letter-spacing: 0.04rem;
  }

  .copyright {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    color: var(--text-secondary);
    font-size: 1.3rem;
    text-align: center;
    white-space: nowrap;

    span + span {
      display: inline-flex;
      align-items: center;
      gap: 0.8rem;

      &::before {
        content: "";
        width: 0.35rem;
        height: 0.35rem;
        border-radius: 50%;
        background: var(--green);
      }
    }
  }

  .social-media {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.9rem;

    a {
      display: grid;
      place-items: center;
      width: 4rem;
      height: 4rem;
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-color: color-mix(in srgb, var(--text-color) 14%, transparent);
      border-radius: 1.15rem;
      background: rgba(255, 255, 255, 0.03);
      background: color-mix(in srgb, var(--text-color) 4%, transparent);
      transition: background-color 0.2s ease, border-color 0.2s ease;

      img {
        width: 2.05rem;
        height: 2.05rem;
        object-fit: contain;
      }

      @media (hover: hover) and (pointer: fine) {
        &:hover {
          border-color: color-mix(in srgb, var(--green) 45%, transparent);
          background: color-mix(in srgb, var(--green) 12%, transparent);
        }
      }
    }
  }

  @media (max-width: 900px) {
    .footer-inner {
      grid-template-columns: 1fr auto;
    }

    .copyright {
      grid-column: 1 / -1;
      grid-row: 2;
    }
  }

  @media (max-width: 560px) {
    &.footer {
      margin-top: 9rem;
      padding-top: 2.4rem;
      padding-bottom: 2.4rem;
    }

    .footer-inner {
      grid-template-columns: 1fr;
      gap: 1.8rem;
      justify-items: center;
    }

    .footer-brand,
    .social-media {
      justify-self: center;
    }

    .copyright {
      grid-column: auto;
      grid-row: auto;
      flex-wrap: wrap;
      white-space: normal;
    }
  }
`;
