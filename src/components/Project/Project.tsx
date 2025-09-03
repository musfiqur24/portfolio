import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";
import Deena from "../../assets/Deena.jpg";
import Tms from "../../assets/Tms.jpg";
import Dineout from "../../assets/dineout.jpg";
import Utmgo from "../../assets/Utmgo.jpg";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        {/* DEENA Project */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://api.be.com.bd/deena/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Digital Education Enclave For All (DEENA)</h3>
              <div className="project-image">
                <img src={Deena} alt="DEENA Project Screenshot" />
              </div>
              <p>
                A comprehensive academic information and management system
                (AIMS) designed to streamline Admission, Registration, Fee
                Collection, Financial Services, and Reporting. Integrated
                financial reporting tools like COA, Income Statement, and Trial
                Balance with secure backend services, providing institutions
                with an all-in-one digital education platform.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>ReactJS</li>
                <li>TypeScript</li>
                <li>Java Spring Boot</li>
                <li>Oracle </li>
                <li>JasperSoft Studio</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Teacher Management System */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/musfiqur24"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
              <div className="project-links">
                <a
                  href="https://tms-ui-blush.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Teacher Management System (TMS)</h3>
              <div className="project-image">
                <img src={Tms} alt="TMS Project Screenshot" />
              </div>
              <p>
                A CRUD-based platform to manage teacher profiles efficiently,
                with dynamic forms and lists for quick access and updates.
                Focused on providing schools with a smooth interface for
                maintaining staff information while ensuring reliability and
                scalability of backend services.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>ReactJS</li>
                <li>Tailwind CSS</li>
                <li>Java Spring Boot</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* UTMGo Ride Sharing */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/musfiqur24/UTM_Go_backbenchers-"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>UTMGo - A Ride Sharing App</h3>
              <div className="project-image">
                <img src={Utmgo} alt="UTMGo Project" />
              </div>
              <p>
                A ride-sharing mobile app enabling users to book rides with
                real-time GPS navigation, ride requests, acceptance/rejection,
                and efficient ride queuing. Designed with a user-centric
                interface and robust backend integration to enhance travel
                convenience for students and daily commuters.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Flutter</li>
                <li>Firebase</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Food Ordering System */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/musfiqur24/dine_out"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
              <div className="project-links">
                <a
                  href="https://dine-out-pi-bay.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Food Ordering System</h3>
              <div className="project-image">
                <img src={Dineout} alt="Dineout Project" />
              </div>
              <p>
                A responsive web-based application allowing users to browse,
                order, and manage food items online. Focused on providing a
                clean, intuitive UI and smooth ordering process to improve user
                experience and streamline restaurant operations.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
