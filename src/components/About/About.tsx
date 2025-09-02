import { Container, EducationCard } from "./styles";
import Musfiqur from "../../assets/Musfiqur.png";
import java from "../../assets/java.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={100}>
          <p>
            Hi there! I'm Musfiqur, a keen & enthusiastic Software Engineer skilled in
            Full-Stack Web development, contributing in scalable software solutions.
            Efficient in building generative financial reports and integrating them into
            web applications.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={200} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            I build responsive and user-friendly web applications, implement robust
            backend services and maintain database systems.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={300}>
          <p>
            I usually follow agile methodology to ensure timely delivery and continuous
            improvement.
          </p>
        </ScrollAnimation>



        {/* Education Section */}
        <ScrollAnimation animateIn="fadeInLeft" delay={500}>
          <h3 style={{ marginTop: "3rem" }}>Education</h3>
        </ScrollAnimation>
        <div className="education-grid">
          <ScrollAnimation animateIn="fadeInUp" delay={550}>
            <EducationCard>
              <h4>BSc in Computer Science (Software Engineering)</h4>
              <p className="institute">Universiti Teknologi Malaysia</p>
              <p className="duration">Aug 2020 – Mar 2025</p>
              <p className="location">Johor, Malaysia</p>
              <p className="details">CGPA: 3.25</p>
            </EducationCard>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={650}>
            <EducationCard>
              <h4>Higher Secondary School (HSC)</h4>
              <p className="institute">Dhaka College</p>
              <p className="duration">2017 – 2019</p>
              <p className="location">Dhaka, Bangladesh</p>
              <p className="details">GPA: 5.00 (Science)</p>
            </EducationCard>
          </ScrollAnimation>
        </div>
                <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={110}>
              <img src={java} alt="java" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={120}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={130}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={140}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={180}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={190}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
        </div>
      </div>

      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={210}>
          <img src={Musfiqur} alt="Musfiqur Rahman" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
