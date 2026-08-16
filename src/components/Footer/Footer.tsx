import { m, useReducedMotion } from "framer-motion";
import { Container } from "./styles";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import telegram from "../../assets/telegram.svg";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/musfiqur-rahman-957448256/",
    icon: linkedin,
    label: "LinkedIn",
  },
  { href: "https://github.com/musfiqur24", icon: githubIcon, label: "GitHub" },
  {
    href: "https://api.whatsapp.com/send/?phone=+8801752475486&text=Hello%20Musfiq%2C%20I%20found%20your%20contact%20through%20your%20portfolio%20site.",
    icon: whatsapp,
    label: "WhatsApp",
  },
  { href: "https://t.me/musfiqur_24", icon: telegram, label: "Telegram" },
];

export function Footer() {
  const prefersReducedMotion = useReducedMotion() ?? false;

  return (
    <Container className="footer">
      <div className="footer-inner">
        <a className="footer-brand" href="#home" aria-label="Back to the top">
          <span className="brand-mark" aria-hidden="true">
            MR
          </span>
          <span>
            <strong>Musfiqur Rahman</strong>
            <small>Software Engineer // build, ship, iterate</small>
          </span>
        </a>

        <p className="copyright">
          <span>&copy; {new Date().getFullYear()} Musfiqur Rahman</span>
          <span>Built with care.</span>
        </p>

        <nav className="social-media" aria-label="Social media links">
          {socialLinks.map(({ href, icon, label }) => (
            <m.a
              href={href}
              key={label}
              target="_blank"
              rel="noreferrer"
              aria-label={`${label} (opens in a new tab)`}
              whileHover={prefersReducedMotion ? undefined : { y: -4, scale: 1.06 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
            >
              <img src={icon} alt="" />
            </m.a>
          ))}
        </nav>
      </div>
    </Container>
  );
}
