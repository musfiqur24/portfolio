import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { Container, Card } from "./styles";
import { Reveal } from "../motion/Reveal";

const roles = [
  {
    id: "hubexpert-backend-engineer",
    title: "Junior Backend Engineer",
    company: "Hubexpert",
    period: "Feb 2026 - Present",
    highlights: [
      "Build HubSpot automations that streamline lead, customer, and internal business processes.",
      "Plan and execute data migrations from a range of source systems into HubSpot.",
      "Integrate QuickBooks Online (QBO) with HubSpot to keep financial and CRM data connected.",
      "Contribute to full-stack project development, from user-facing features to backend services.",
      "Design and implement backend solution integrations for connected business workflows.",
      "Create automated workflows with Zapier and n8n.",
      "Deploy and maintain project workloads on Google Cloud Platform (GCP).",
    ],
  },
  {
    id: "benchmark-junior-developer",
    title: "Junior Software Developer",
    company: "Benchmark Software Bangladesh Ltd",
    period: "Apr 2025 - Jan 2026",
    location: "Dhaka, Bangladesh",
    highlights: [
      "Developed the Admin - Financial Module, including COA, Trial Balance, Income Statement, and A/C Head Config.",
      "Built REST APIs with Java Spring Boot.",
      "Designed and generated financial reports using Jaspersoft Studio.",
    ],
  },
  {
    id: "benchmark-intern",
    title: "Software Developer Intern",
    company: "Benchmark Software Bangladesh Ltd",
    period: "Sep 2024 - Mar 2025",
    location: "Dhaka, Bangladesh",
    highlights: [
      "Developed the Admin Module for AIMS, including user management and report generation, using agile methodology.",
      "Built the frontend with ReactJS and TypeScript and managed backend CRUD with Java Spring Boot.",
      "Prepared SRS, SDD, and ERD documentation for the MFI Collector app used by several NGOs.",
    ],
  },
];

export default function Experience() {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const [openRoleId, setOpenRoleId] = useState(null);

  const drawerTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.34, ease: [0.22, 1, 0.36, 1] };

  const listVariants = {
    hidden: {},
    visible: {
      transition: prefersReducedMotion
        ? { duration: 0 }
        : { delayChildren: 0.08, staggerChildren: 0.055 },
    },
  };

  const highlightVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 9 },
    visible: {
      opacity: 1,
      y: 0,
      transition: prefersReducedMotion
        ? { duration: 0 }
        : { duration: 0.24, ease: "easeOut" },
    },
  };

  return (
    <Container id="experience">
      <Reveal>
        <div className="section-heading">
          <div>
            <span className="eyebrow">02 / Shipping history</span>
            <h2>Experience in the real world</h2>
          </div>
          <p>
            Building dependable backend systems, thoughtful automations, and
            connected workflows from ticket to deploy.
          </p>
        </div>
      </Reveal>

      <div className="experience-list">
        {roles.map((role, index) => {
          const isOpen = openRoleId === role.id;
          const drawerId = `experience-drawer-${role.id}`;
          const titleId = `experience-title-${role.id}`;

          return (
            <Reveal key={role.id} delay={index * 0.12}>
              <m.div
                whileHover={prefersReducedMotion ? undefined : { y: -7 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.995 }}
                transition={{ duration: 0.24, ease: "easeOut" }}
              >
                <Card data-open={isOpen ? "true" : "false"}>
                  <div className="role-index" aria-hidden="true">
                    0{index + 1}
                  </div>
                  <div className="role-content">
                    <div className="role-summary">
                      <button
                        aria-controls={drawerId}
                        aria-expanded={isOpen}
                        aria-label={`${isOpen ? "Hide" : "Show"} highlights for ${role.title} at ${role.company}`}
                        className="drawer-trigger"
                        onClick={() =>
                          setOpenRoleId((currentRoleId) =>
                            currentRoleId === role.id ? null : role.id,
                          )
                        }
                        type="button"
                      >
                        <span className="sr-only">
                          {isOpen ? "Hide highlights" : "Show highlights"}
                        </span>
                      </button>
                      <div className="role-heading">
                        <span className="role-label">
                          {index === 0 ? "Current role" : "Previous role"}
                        </span>
                        <h3 id={titleId}>{role.title}</h3>
                        <h4>{role.company}</h4>
                      </div>
                      <div className="role-actions">
                        <div className="role-meta" aria-label="Role details">
                          <span>{role.period}</span>
                          {role.location ? <span>{role.location}</span> : null}
                        </div>
                        <span className="drawer-indicator" aria-hidden="true">
                          <span>
                            {isOpen ? "Hide highlights" : "View highlights"}
                          </span>
                          <ChevronDown size={18} strokeWidth={2.15} />
                        </span>
                      </div>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <m.div
                          animate={{ height: "auto", opacity: 1 }}
                          aria-labelledby={titleId}
                          className="role-drawer"
                          exit={{ height: 0, opacity: 0 }}
                          id={drawerId}
                          initial={
                            prefersReducedMotion
                              ? false
                              : { height: 0, opacity: 0 }
                          }
                          key={drawerId}
                          role="region"
                          transition={drawerTransition}
                        >
                          <div className="drawer-inner">
                            <div className="drawer-heading">
                              <span>Key contributions // shipped</span>
                              <span>{role.highlights.length} highlights</span>
                            </div>
                            <m.ul
                              animate="visible"
                              initial={prefersReducedMotion ? false : "hidden"}
                              variants={listVariants}
                            >
                              {role.highlights.map((highlight) => (
                                <m.li key={highlight} variants={highlightVariants}>
                                  {highlight}
                                </m.li>
                              ))}
                            </m.ul>
                          </div>
                        </m.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                </Card>
              </m.div>
            </Reveal>
          );
        })}
      </div>
    </Container>
  );
}
