import { useState } from "react";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { Container, EducationCard } from "./styles";
import { Reveal } from "../motion/Reveal";

const education = [
  {
    degree: "BSc in Computer Science (Software Engineering)",
    institute: "Universiti Teknologi Malaysia",
    duration: "Aug 2020 – Mar 2025",
    location: "Johor, Malaysia",
    details: "CGPA: 3.25",
  },
  {
    degree: "Higher Secondary School (HSC)",
    institute: "Dhaka College",
    duration: "2017 – 2019",
    location: "Dhaka, Bangladesh",
    details: "GPA: 5.00 (Science)",
  },
];

export function About() {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const hoverLift = prefersReducedMotion ? undefined : { y: -5 };
  const [openEducationIndex, setOpenEducationIndex] = useState<number | null>(null);

  const toggleEducationDrawer = (index: number) => {
    setOpenEducationIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <Container id="about">
      <div className="about-layout">
        <Reveal direction="left">
          <div className="section-heading">
            <span className="eyebrow">04 / Developer notes</span>
            <h2>Engineering calm behind complex systems.</h2>
            <p className="intro-copy">
              I&apos;m Musfiqur, a software engineer who enjoys turning ambitious ideas
              into dependable products and straightforward digital experiences.
            </p>
          </div>
        </Reveal>

        <div className="intro-column">
          <div className="about-copy">
            <Reveal direction="right" delay={0.08}>
              <p>
                My work moves comfortably from responsive React interfaces to backend
                services, APIs, databases, and the practical details that make systems
                reliable in production.
              </p>
            </Reveal>
            <Reveal direction="right" delay={0.14}>
              <p>
                I&apos;m especially interested in automation and integrations—connecting
                tools, simplifying repetitive workflows, and helping teams spend more
                time on meaningful work.
              </p>
            </Reveal>
          </div>

          <Reveal direction="right" delay={0.2}>
            <div className="focus-list" aria-label="Professional focus areas">
              <span>Full-stack development</span>
              <span>Systems integration</span>
              <span>Automation workflows</span>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="about-details">
        <section className="education-panel" aria-labelledby="education-heading">
          <Reveal direction="left">
            <div className="panel-heading">
              <span className="eyebrow">Learning path</span>
              <h3 id="education-heading">Education</h3>
            </div>
          </Reveal>
          <div className="education-grid">
            {education.map((item, index) => {
              const isOpen = openEducationIndex === index;
              const drawerId = `education-drawer-${index}`;

              return (
                <Reveal key={item.degree} delay={index * 0.1}>
                  <EducationCard $isOpen={isOpen}>
                    <m.button
                      type="button"
                      className="education-summary"
                      aria-expanded={isOpen}
                      aria-controls={drawerId}
                      onClick={() => toggleEducationDrawer(index)}
                      whileHover={hoverLift}
                      whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
                      transition={{ duration: 0.24, ease: "easeOut" }}
                    >
                      <span className="card-index">0{index + 1}</span>
                      <span className="summary-copy">
                        <span className="degree">{item.degree}</span>
                        <span className="institute">{item.institute}</span>
                      </span>
                      <span className="drawer-toggle">
                        <span>{isOpen ? "Close details" : "View details"}</span>
                        <span className="drawer-chevron" aria-hidden="true" />
                      </span>
                    </m.button>

                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <m.div
                          id={drawerId}
                          className="education-drawer"
                          role="region"
                          aria-label={`${item.degree} details`}
                          initial={
                            prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }
                          }
                          animate={
                            prefersReducedMotion
                              ? { opacity: 1 }
                              : { height: "auto", opacity: 1 }
                          }
                          exit={
                            prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }
                          }
                          transition={{
                            duration: prefersReducedMotion ? 0 : 0.28,
                            ease: "easeOut",
                          }}
                        >
                          <div className="drawer-content">
                            <div className="drawer-item drawer-item-wide">
                              <span>Qualification</span>
                              <p>{item.degree}</p>
                            </div>
                            <div className="drawer-item">
                              <span>Institution</span>
                              <p>{item.institute}</p>
                            </div>
                            <div className="drawer-item">
                              <span>Duration</span>
                              <p>{item.duration}</p>
                            </div>
                            <div className="drawer-item">
                              <span>Location</span>
                              <p>{item.location}</p>
                            </div>
                            <div className="drawer-item drawer-result">
                              <span>Academic result</span>
                              <p>{item.details}</p>
                            </div>
                          </div>
                        </m.div>
                      ) : null}
                    </AnimatePresence>
                  </EducationCard>
                </Reveal>
              );
            })}
          </div>
        </section>
      </div>
    </Container>
  );
}
