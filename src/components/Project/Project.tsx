import { useState } from "react";
import { ArrowLeft, ArrowRight, Code2, ExternalLink } from "lucide-react";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { Container } from "./styles";
import { Reveal } from "../motion/Reveal";
import Deena from "../../assets/Deena.jpg";
import MicrofinanceMonitor from "../../assets/MicrofinanceMonitor.jpg";
import BudgetBuddy from "../../assets/budgetbuddy.jpg";
import Utmgo from "../../assets/Utmgo.jpg";

type ProjectLink = {
  href: string;
  label: string;
  type: "source" | "preview";
};

type ProjectDetails = {
  title: string;
  image: string;
  imageAlt: string;
  description: string;
  technologies: string[];
  links: ProjectLink[];
};

const projects: ProjectDetails[] = [
  {
    title: "Digital Education Enclave For All (DEENA)",
    image: Deena,
    imageAlt: "DEENA project screenshot",
    description:
      "A comprehensive academic information and management system that streamlines admission, registration, fee collection, financial services, and reporting in one secure platform.",
    technologies: ["ReactJS", "TypeScript", "Java Spring Boot", "Oracle", "Jaspersoft Studio"],
    links: [
      { href: "https://api.benchmarksoftwarebd.com:9443/deena/user/login", label: "View DEENA", type: "preview" },
    ],
  },
  {
    title: "Microfinance Monitor",
    image: MicrofinanceMonitor,
    imageAlt: "Microfinance Monitor lending and collections dashboard",
    description:
      "Microfinance Monitor helps NGOs manage complete lending and collection operations—from member registration and loan proposals to loan creation, regular and irregular collections, and repayment tracking. Built for field teams and Credit Officers, it shows who to collect from, when to collect, how much is due, and the progress of every loan across communities throughout Bangladesh.",
    technologies: ["React", "Spring Boot", "Oracle Database"],
    links: [
      {
        href: "https://jdev-test.benchmarksoftwarebd.com/",
        label: "View Microfinance Monitor",
        type: "preview",
      },
    ],
  },
  {
    title: "Budget Buddy",
    image: BudgetBuddy,
    imageAlt: "Budget Buddy personal finance dashboard",
    description:
      "A personal finance platform for tracking daily income and expenses, setting category-level budgets, and receiving alerts when spending crosses a limit. Budget Buddy also manages lending and borrowing records so users can keep a clear view of money moving between people.",
    technologies: [
      "React",
      "Express.js",
      "MongoDB",
      "AWS",
      "Nginx",
      "Docker",
      "GitHub Actions CI/CD",
      "Passport.js OAuth",
    ],
    links: [
      {
        href: "https://budget-buddy.mywire.org/",
        label: "View Budget Buddy",
        type: "preview",
      },
    ],
  },
  {
    title: "UTMGo - A Ride Sharing App",
    image: Utmgo,
    imageAlt: "UTMGo ride sharing app screenshot",
    description:
      "A ride-sharing mobile app for booking rides with GPS navigation, ride requests, accept-or-reject flows, and efficient queue management for daily commuters.",
    technologies: ["Flutter", "Firebase"],
    links: [
      {
        href: "https://github.com/musfiqur24/UTM_Go_backbenchers-",
        label: "View UTMGo source on GitHub",
        type: "source",
      },
    ],
  },
];

export function Project() {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const activeProject = projects[activeIndex];

  const showPrevious = () => {
    setDirection(-1);
    setActiveIndex((index) => (index - 1 + projects.length) % projects.length);
  };

  const showNext = () => {
    setDirection(1);
    setActiveIndex((index) => (index + 1) % projects.length);
  };

  const selectProject = (index: number) => {
    if (index === activeIndex) return;

    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  return (
    <Container id="project">
      <Reveal>
        <div className="section-heading">
          <div>
            <span className="eyebrow">01 / Build log</span>
            <h2>Projects shipped with purpose</h2>
          </div>
          <p>
            Production-minded builds shaped around clear workflows, reliable data,
            and interfaces people can use without a manual.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <section className="project-deck" aria-label="All projects">
          {projects.map((project, index) => (
            <m.article
              className="project-deck-card"
              key={project.title}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: prefersReducedMotion ? 0.01 : 0.42, delay: index * 0.06 }}
            >
              <div className="project-deck-copy">
                <div className="project-topline">
                  <span className="project-label">{String(index + 1).padStart(2, "0")} / Build</span>
                  <span className="project-count">{project.technologies.length} technologies</span>
                </div>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-stack">
                  <span className="stack-label">Built with</span>
                  <ul className="tech-list">
                    {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                  </ul>
                </div>
                <div className="project-links">
                  {project.links.map((link) => {
                    const LinkIcon = link.type === "source" ? Code2 : ExternalLink;
                    return <m.a href={link.href} key={link.href} target="_blank" rel="noreferrer" aria-label={link.label} whileHover={prefersReducedMotion ? undefined : { y: -2 }}><LinkIcon size={17} aria-hidden="true" />{link.type === "source" ? "View source" : "View project"}</m.a>;
                  })}
                </div>
              </div>
              <div className="project-preview">
                <div className="browser-bar" aria-hidden="true"><span /><span /><span /></div>
                <div className="project-image"><img src={project.image} alt={project.imageAlt} loading={index === 0 ? "eager" : "lazy"} /></div>
              </div>
            </m.article>
          ))}
        </section>
      </Reveal>

      <Reveal delay={0.1}>
        <section
          className="project-carousel"
          aria-roledescription="carousel"
          aria-label="Featured projects"
        >
          <AnimatePresence initial={false} mode="wait">
            <m.article
              key={activeProject.title}
              id="project-carousel-panel"
              role="tabpanel"
              className="project-slide"
              initial={
                prefersReducedMotion
                  ? false
                  : { opacity: 0, x: direction * 36 }
              }
              animate={{ opacity: 1, x: 0 }}
              exit={
                prefersReducedMotion
                  ? { opacity: 0 }
                  : { opacity: 0, x: direction * -28 }
              }
              transition={{ duration: prefersReducedMotion ? 0.01 : 0.38, ease: "easeOut" }}
              drag={prefersReducedMotion ? false : "x"}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.14}
              onDragEnd={(_, info) => {
                if (Math.abs(info.offset.x) < 60) return;
                if (info.offset.x < 0) showNext();
                else showPrevious();
              }}
            >
              <div className="project-copy">
                <div className="project-topline">
                  <span className="project-label">Featured build // in production</span>
                  <span className="project-count" aria-live="polite">
                    {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                  </span>
                </div>

                <h3>{activeProject.title}</h3>
                <p className="project-description">{activeProject.description}</p>

                <div className="project-stack">
                  <span className="stack-label">Built with</span>
                  <ul className="tech-list">
                    {activeProject.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-links">
                  {activeProject.links.map((link) => {
                    const LinkIcon = link.type === "source" ? Code2 : ExternalLink;

                    return (
                      <m.a
                        href={link.href}
                        key={link.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={link.label}
                        whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                        whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                      >
                        <LinkIcon size={17} strokeWidth={2} aria-hidden="true" />
                        {link.type === "source" ? "View source" : "View project"}
                      </m.a>
                    );
                  })}
                </div>
              </div>

              <div className="project-preview">
                <div className="browser-bar" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="project-image">
                  <img
                    src={activeProject.image}
                    alt={activeProject.imageAlt}
                    loading={activeIndex === 0 ? "eager" : "lazy"}
                  />
                </div>
              </div>
            </m.article>
          </AnimatePresence>

          <div className="carousel-footer">
            <div
              className="slide-progress"
              role="tablist"
              aria-label="Choose a featured project"
              onKeyDown={(event) => {
                if (event.key === "ArrowRight") {
                  event.preventDefault();
                  showNext();
                }
                if (event.key === "ArrowLeft") {
                  event.preventDefault();
                  showPrevious();
                }
              }}
            >
              {projects.map((project, index) => (
                <button
                  type="button"
                  key={project.title}
                  role="tab"
                  aria-selected={index === activeIndex}
                  aria-controls="project-carousel-panel"
                  aria-label={`Show ${project.title}`}
                  className={index === activeIndex ? "is-active" : undefined}
                  onClick={() => selectProject(index)}
                >
                  <m.span
                    className="progress-fill"
                    animate={{ scaleX: index === activeIndex ? 1 : 0 }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.32, ease: "easeOut" }}
                  />
                </button>
              ))}
            </div>

            <div className="carousel-controls">
              <m.button
                type="button"
                aria-label="Show previous project"
                onClick={showPrevious}
                whileHover={prefersReducedMotion ? undefined : { scale: 1.06, x: -1 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.94 }}
              >
                <ArrowLeft size={22} strokeWidth={2.1} aria-hidden="true" />
              </m.button>
              <m.button
                type="button"
                aria-label="Show next project"
                onClick={showNext}
                whileHover={prefersReducedMotion ? undefined : { scale: 1.06, x: 1 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.94 }}
              >
                <ArrowRight size={22} strokeWidth={2.1} aria-hidden="true" />
              </m.button>
            </div>
          </div>
        </section>
      </Reveal>
    </Container>
  );
}
