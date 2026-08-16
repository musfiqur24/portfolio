import { m, useReducedMotion } from "framer-motion";
import { Container } from "./styles";
import { Reveal } from "../motion/Reveal";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";

const contactMethods = [
  {
    href: "mailto:musfiqur.utsho@gmail.com",
    icon: emailIcon,
    title: "Email",
    value: "musfiqur.utsho@gmail.com",
    action: "Send an email to Musfiqur Rahman",
  },
  {
    href: "tel:+8801752475486",
    icon: phoneIcon,
    title: "Phone",
    value: "+880 1752 475486",
    action: "Call Musfiqur Rahman",
  },
];

export function Contact() {
  const prefersReducedMotion = useReducedMotion() ?? false;

  return (
    <Container id="contact" aria-labelledby="contact-heading">
      <Reveal>
        <header className="contact-heading">
          <span className="eyebrow">05 / Open a channel</span>
          <h2 id="contact-heading">Let&apos;s ship the next idea.</h2>
          <p>
            Have a project, role, or idea in mind? Send a brief message and
            let&apos;s turn the first conversation into a useful next commit.
          </p>
        </header>
      </Reveal>

      <div className="contact-layout">
        <m.aside
          className="contact-panel"
          initial={prefersReducedMotion ? false : { opacity: 0, x: -22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.58,
            ease: "easeOut",
          }}
          aria-label="Direct contact details"
        >
          <span className="panel-kicker">Direct contact</span>
          <h3>Choose the channel that works best for you.</h3>
          <p className="panel-copy">
            For a quick question, use email or phone. For a project brief,
            the form keeps everything in one place.
          </p>

          <div className="contact-methods">
            {contactMethods.map((method, index) => (
              <m.a
                key={method.href}
                className="contact-card"
                href={method.href}
                aria-label={method.action}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.42,
                  delay: prefersReducedMotion ? 0 : 0.12 + index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.985 }}
              >
                <span className="contact-icon" aria-hidden="true">
                  <img src={method.icon} alt="" />
                </span>
                <span className="contact-details">
                  <span className="method-title">{method.title}</span>
                  <span className="method-value">{method.value}</span>
                </span>
                <span className="contact-arrow" aria-hidden="true">
                  &#8599;
                </span>
              </m.a>
            ))}
          </div>

          <div className="contact-note">
            <span className="note-dot" aria-hidden="true" />
            <p>Every good collaboration starts with a clear conversation.</p>
          </div>
        </m.aside>

        <Reveal className="form-column" direction="right" delay={0.1}>
          <Form />
        </Reveal>
      </div>
    </Container>
  );
}
