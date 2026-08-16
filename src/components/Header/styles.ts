import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 7.2rem;
  padding: 1.1rem clamp(2rem, 6vw, 10rem);
  border-bottom: 1px solid var(--border);
  background: rgba(9, 17, 31, 0.65);
  backdrop-filter: blur(18px);

  .logo {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    min-width: max-content;
  }

  .brand-mark {
    display: grid;
    width: 3.2rem;
    height: 3.2rem;
    place-items: center;
    border: 1px solid rgba(66, 220, 160, 0.52);
    border-radius: 0.9rem;
    background: rgba(66, 220, 160, 0.1);
    color: var(--green);
    font-size: 1.05rem;
    font-weight: 900;
    letter-spacing: -0.06em;
  }

  .brand-copy {
    color: var(--text-color);
    font-size: 1.35rem;
    letter-spacing: 0.04em;
    line-height: 1;
    text-transform: uppercase;
  }

  nav {
    display: flex;
    align-items: center;
    gap: clamp(1.4rem, 2vw, 2.8rem);
    margin-left: auto;

    a {
      position: relative;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 0;
      color: var(--text-secondary);
      font-size: 1.3rem;
      font-weight: 700;
      letter-spacing: 0.015em;
      transition: color 0.2s ease;

      &::after {
        position: absolute;
        right: 0;
        bottom: 0.25rem;
        left: 0;
        height: 0.15rem;
        border-radius: 999px;
        background: var(--green);
        content: "";
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.22s ease;
      }

      &.resume-link {
        padding: 0.85rem 1.1rem;
        border: 1px solid var(--border);
        border-radius: 0.8rem;
        background: transparent;
        color: var(--text-color);
        font-size: 1.2rem;

        &::after {
          display: none;
        }
      }

      @media (hover: hover) and (pointer: fine) {
        &:hover {
          color: var(--text-color);

          &::after {
            transform: scaleX(1);
            transform-origin: left;
          }
        }

        &.resume-link:hover {
          border-color: rgba(66, 220, 160, 0.58);
          background: rgba(66, 220, 160, 0.08);
          box-shadow: none;
          transform: translateY(-1px);
        }
      }
    }
  }

  .theme-toggle {
    display: grid;
    place-items: center;
    flex: 0 0 auto;
    width: 3.6rem;
    height: 3.6rem;
    padding: 0;
    margin-left: 1.2rem;
    border: 1px solid var(--border);
    border-radius: 0.9rem;
    background: var(--surface-solid);
    color: var(--text-secondary);
    box-shadow: none;
    transform: none;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        border-color: rgba(66, 220, 160, 0.58);
        color: var(--green);
        box-shadow: none;
        transform: none;
      }
    }
  }

  .menu {
    position: relative;
    display: none;
    width: 3.8rem;
    height: 3.8rem;
    padding: 0;
    margin-left: 1rem;
    border: 1px solid var(--border);
    border-radius: 0.9rem;
    background: var(--surface-solid);
    box-shadow: none;
    transform: none;

    &::before,
    &::after,
    span {
      position: absolute;
      left: 1rem;
      width: 1.6rem;
      height: 0.15rem;
      border-radius: 99px;
      background: var(--text-color);
      content: "";
      transition: transform 0.24s ease, opacity 0.2s ease;
    }

    &::before {
      top: 1.22rem;
    }

    span {
      top: 1.83rem;
    }

    &::after {
      top: 2.44rem;
    }

    &.active::before {
      top: 1.83rem;
      transform: rotate(45deg);
    }

    &.active span {
      opacity: 0;
    }

    &.active::after {
      top: 1.83rem;
      transform: rotate(-45deg);
    }

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        box-shadow: none;
        transform: none;
      }
    }
  }

  @media (max-width: 960px) {
    nav {
      position: fixed;
      inset: 0;
      display: grid;
      visibility: hidden;
      width: 100%;
      height: 100dvh;
      padding: 10rem 3rem 4rem;
      place-content: center;
      gap: 2.3rem;
      background: var(--background);
      opacity: 0;
      pointer-events: none;
      transform: translateY(-1rem);
      transition: opacity 0.26s ease, transform 0.26s ease, visibility 0.26s;

      a {
        color: var(--text-color);
        font-size: 1.75rem;
        text-align: center;

        &.resume-link {
          justify-content: center;
          margin-top: 0.5rem;
          padding: 1.2rem 2.4rem;
          font-size: 1.45rem;
        }
      }

      &.active {
        visibility: visible;
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0);
      }
    }

    .theme-toggle {
      margin-left: auto;
    }

    .menu {
      display: block;
    }
  }

  @media (max-width: 420px) {
    padding-inline: 1.6rem;

    .brand-mark {
      width: 3rem;
      height: 3rem;
    }
  }
`;
