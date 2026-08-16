import { FormEvent, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import validator from "validator";
import { Container, ContainerSucces } from "./styles";

export function Form() {
  const [state, handleSubmit] = useForm("xknkpqry");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validEmail = validator.isEmail(email.trim());
  const hasMessage = message.trim().length > 0;
  const showEmailError = email.length > 0 && !validEmail;

  function submitForm(event: FormEvent<HTMLFormElement>) {
    handleSubmit(event);
  }

  if (state.succeeded) {
    return (
      <ContainerSucces role="status" aria-live="polite">
        <span className="success-mark" aria-hidden="true">
          &#10003;
        </span>
        <span className="success-kicker">Message sent</span>
        <h3>Thanks for getting in touch.</h3>
        <p>I&apos;ll have everything I need to follow up on your message.</p>
        <button
          type="button"
          onClick={() => {
            const prefersReducedMotion = window.matchMedia(
              "(prefers-reduced-motion: reduce)"
            ).matches;
            window.scrollTo({
              top: 0,
              behavior: prefersReducedMotion ? "auto" : "smooth",
            });
          }}
        >
          Back to the top
        </button>
      </ContainerSucces>
    );
  }

  return (
    <Container>
      <div className="form-heading">
        <span className="form-kicker">Project enquiry</span>
        <h3>Tell me a little about it.</h3>
        <p>Share the essentials, and I&apos;ll have the context to respond.</p>
      </div>

      <form onSubmit={submitForm}>
        <div className="field">
          <label htmlFor="email">
            Email address <span aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            autoComplete="email"
            inputMode="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            aria-invalid={showEmailError || undefined}
            aria-describedby={showEmailError ? "email-format-error" : undefined}
            required
          />
          {showEmailError && (
            <p className="field-error" id="email-format-error" role="alert">
              Enter a valid email address.
            </p>
          )}
          <div className="formspree-error" aria-live="polite">
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
        </div>

        <div className="field">
          <label htmlFor="message">
            Your message <span aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="A short note about your project, goal, or question."
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            aria-describedby="message-hint"
            required
          />
          <p className="field-hint" id="message-hint">
            A few details are enough to get the conversation started.
          </p>
          <div className="formspree-error" aria-live="polite">
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>
        </div>

        <div className="submit-row">
          <p>
            <span aria-hidden="true">*</span> Required fields
          </p>
          <button type="submit" disabled={state.submitting || !validEmail || !hasMessage}>
            {state.submitting ? "Sending..." : "Send message"}
            <span aria-hidden="true">&#8594;</span>
          </button>
        </div>
      </form>
    </Container>
  );
}
