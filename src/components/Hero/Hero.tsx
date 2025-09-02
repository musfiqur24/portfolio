import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { NavHashLink } from "react-router-hash-link";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import Hello from "../../assets/Hello.gif";
import telegram from "../../assets/telegram.svg";
import illustration from "../../assets/portfolio.jpg";

export function Hero() {
  return (
    <Container id="home">
      {/* Left Section */}
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>
            Hello <img src={Hello} alt="Hello" width="20px" />, I'm
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Musfiqur Rahman</h1>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Software Engineer</h3>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">
            Passionate full-stack developer experienced in <b>ReactJS</b>,{" "}
            <b>TypeScript</b>, and <b>Java Spring Boot</b>, building scalable
            web and enterprise solutions.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <div className="highlights">
            <span>🚀 1+ Years Full-Stack Experience</span>
            <span>💻 ReactJS, TypeScript & Spring Boot</span>
            <span>💾 MySQL,PostgreSql, Oracle</span>
            <span>📊 Financial & Academic Systems</span>
            <span>⚡ REST APIs & Reporting </span>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button primary">
              Contact Me
            </NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={1.2 * 1000}>
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
        </ScrollAnimation>
      </div>

      {/* Right Section */}
      <div className="hero-image">
        <img src={illustration} alt="Hero Illustration" />
      </div>
    </Container>
  );
}
