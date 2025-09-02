import { Container } from "./styles";
import reactIcon from "../../assets/react-icon.svg";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import telegram from "../../assets/telegram.svg";
import instagramIcon from "../../assets/instagram.svg";

export function Footer() {
  return (
    <Container className="footer">
      <div>
        <p>
          &copy; {new Date().getFullYear()} Musfiqur Rahman. All Rights
          Reserved.
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/musfiqur-rahman-957448256/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/musfiqur24"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=+8801752475486&text=Hello%20Musfiq%2C%20I%20found%20your%20contact%20through%20your%20portfolio%20site."
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <a href="https://t.me/musfiqur_24" target="_blank" rel="noreferrer">
          <img src={telegram} alt="telegram" />
        </a>
      </div>
    </Container>
  );
}
