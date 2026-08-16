import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  .form-heading {
    margin-bottom: 2.2rem;

    h3 {
      margin-top: 0.9rem;
      font-size: clamp(2.5rem, 3.2vw, 3.4rem);
      line-height: 1.15;
      letter-spacing: -0.06rem;
    }

    p {
      margin-top: 1rem;
      color: var(--text-secondary);
      font-size: 1.6rem;
      line-height: 1.6;
    }
  }

  .form-kicker,
  .success-kicker {
    color: var(--green);
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 0.14rem;
    text-transform: uppercase;
  }

  form {
    display: grid;
    gap: 2rem;
    padding: clamp(2.2rem, 4vw, 3.6rem);
    border: 1px solid rgba(255, 255, 255, 0.13);
    border-color: color-mix(in srgb, var(--text-color) 16%, transparent);
    border-radius: 2.4rem;
    background: var(--card-bg);
    box-shadow: 0 2.4rem 5rem rgba(0, 0, 0, 0.16);
  }

  .field {
    display: grid;
    gap: 0.85rem;
  }

  label {
    color: var(--text-color);
    font-size: 1.45rem;
    font-weight: 650;

    span {
      color: var(--green);
    }
  }

  input,
  textarea {
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-color: color-mix(in srgb, var(--text-color) 18%, transparent);
    border-radius: 1.25rem;
    outline: none;
    background: rgba(255, 255, 255, 0.03);
    background: color-mix(in srgb, var(--text-color) 4%, transparent);
    color: var(--text-color);
    font-size: 1.6rem;
    line-height: 1.5;
    transition: border-color 0.2s ease, box-shadow 0.2s ease,
      background-color 0.2s ease;

    &::placeholder {
      color: var(--text-secondary);
      opacity: 0.78;
    }

    &:hover {
      border-color: color-mix(in srgb, var(--text-color) 32%, transparent);
    }

    &:focus {
      border-color: var(--green);
      background: color-mix(in srgb, var(--green) 7%, transparent);
      box-shadow: 0 0 0 0.4rem color-mix(in srgb, var(--green) 15%, transparent);
    }

    &[aria-invalid="true"] {
      border-color: #ec6a83;
    }
  }

  input {
    height: 5.4rem;
    padding: 0 1.5rem;
  }

  textarea {
    min-height: 16rem;
    padding: 1.4rem 1.5rem;
    resize: vertical;
  }

  .field-hint,
  .field-error,
  .formspree-error {
    font-size: 1.25rem;
    line-height: 1.45;
  }

  .field-hint {
    color: var(--text-secondary);
  }

  .field-error,
  .formspree-error {
    color: #ec6a83;
  }

  .formspree-error:empty {
    display: none;
  }

  .submit-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.6rem;
    padding-top: 0.5rem;

    p {
      color: var(--text-secondary);
      font-size: 1.25rem;
    }

    p span {
      color: var(--green);
      font-weight: 700;
    }

    button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      min-width: 16.5rem;
      padding: 1.25rem 2rem;
      border-radius: 1.25rem;
      font-size: 1.45rem;
      font-weight: 700;
      text-transform: none;
    }
  }

  @media (max-width: 560px) {
    .form-heading {
      margin-bottom: 1.8rem;
    }

    form {
      gap: 1.7rem;
      padding: 2.2rem;
      border-radius: 2rem;
    }

    textarea {
      min-height: 14rem;
    }

    .submit-row {
      align-items: stretch;
      flex-direction: column-reverse;

      button {
        width: 100%;
      }
    }
  }
`;

export const ContainerSucces = styled.div`
  display: grid;
  place-items: center;
  min-height: 42rem;
  padding: clamp(3rem, 7vw, 6rem);
  border: 1px solid rgba(255, 255, 255, 0.13);
  border-color: color-mix(in srgb, var(--text-color) 16%, transparent);
  border-radius: 2.4rem;
  background: var(--card-bg);
  text-align: center;
  box-shadow: 0 2.4rem 5rem rgba(0, 0, 0, 0.16);

  .success-mark {
    display: grid;
    place-items: center;
    width: 6rem;
    height: 6rem;
    margin-bottom: 1.8rem;
    border-radius: 50%;
    background: var(--green);
    color: #fff;
    font-size: 2.7rem;
    font-weight: 700;
    box-shadow: 0 0 0 0.8rem color-mix(in srgb, var(--green) 13%, transparent);
  }

  h3 {
    margin-top: 0.8rem;
    font-size: clamp(2.5rem, 3vw, 3.4rem);
    line-height: 1.2;
  }

  p {
    max-width: 38rem;
    margin-top: 1.1rem;
    color: var(--text-secondary);
    font-size: 1.6rem;
    line-height: 1.65;
  }

  button {
    margin-top: 2.5rem;
    padding: 1.2rem 1.8rem;
    border-radius: 1.2rem;
    font-size: 1.4rem;
    text-transform: none;
  }
`;
