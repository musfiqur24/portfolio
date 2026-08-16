import { m, useReducedMotion } from "framer-motion";
import { Cloud, Code2, Database, Layers, type LucideIcon } from "lucide-react";
import {
  siDocker,
  siExpress,
  siFramer,
  siHubspot,
  siJavascript,
  siKubernetes,
  siLucide,
  siMongodb,
  siMysql,
  siNginx,
  siNodedotjs,
  siNextdotjs,
  siPostgresql,
  siQuickbooks,
  siReact,
  siRedis,
  siShadcnui,
  siSpringboot,
  siTailwindcss,
  siTypescript,
  siN8n,
  siZapier,
  type SimpleIcon,
} from "simple-icons";
import { Reveal } from "../motion/Reveal";
import { Container } from "./styles";
import javaIcon from "../../assets/java.svg";

type Technology = {
  name: string;
  icon?: SimpleIcon;
  asset?: string;
  fallbackIcon?: LucideIcon;
  monochrome?: boolean;
};

type TechnologyGroup = {
  label: string;
  description: string;
  technologies: Technology[];
};

const technologyGroups: TechnologyGroup[] = [
  {
    label: "Languages",
    description: "The foundations behind clear, maintainable solutions.",
    technologies: [
      { name: "Java", asset: javaIcon },
      { name: "JavaScript", icon: siJavascript },
      { name: "TypeScript", icon: siTypescript },
      { name: "SQL", fallbackIcon: Database },
    ],
  },
  {
    label: "Frontend",
    description: "Responsive interfaces with clear interactions.",
    technologies: [
      { name: "React", icon: siReact },
      { name: "Next.js", icon: siNextdotjs, monochrome: true },
    ],
  },
  {
    label: "Backend & APIs",
    description: "Reliable services and integration layers.",
    technologies: [
      { name: "Spring Boot", icon: siSpringboot },
      { name: "Node.js", icon: siNodedotjs },
      { name: "Express.js", icon: siExpress, monochrome: true },
    ],
  },
  {
    label: "UI Libraries",
    description: "Design systems and motion that make products feel intuitive.",
    technologies: [
      { name: "Tailwind CSS", icon: siTailwindcss },
      { name: "shadcn/ui", icon: siShadcnui, monochrome: true },
      { name: "Flowbite", fallbackIcon: Layers },
      { name: "Framer Motion", icon: siFramer },
      { name: "React Icons", fallbackIcon: Code2 },
      { name: "Lucide React", icon: siLucide },
    ],
  },
  {
    label: "Data & Caching",
    description: "Structured data, fast access, and dependable reporting.",
    technologies: [
      { name: "PostgreSQL", icon: siPostgresql },
      { name: "MySQL", icon: siMysql },
      { name: "MongoDB", icon: siMongodb },
      { name: "Oracle", fallbackIcon: Database },
      { name: "Redis", icon: siRedis },
    ],
  },
  {
    label: "Cloud & Infrastructure",
    description: "Portable builds and production-ready releases.",
    technologies: [
      { name: "Docker", icon: siDocker },
      { name: "Kubernetes", icon: siKubernetes },
      { name: "AWS", fallbackIcon: Cloud },
      { name: "Nginx", icon: siNginx },
    ],
  },
  {
    label: "Automation",
    description: "Connected workflows that remove repetitive work.",
    technologies: [
      { name: "n8n", icon: siN8n },
      { name: "Zapier", icon: siZapier },
    ],
  },
  {
    label: "Platforms",
    description: "Business systems that keep teams and data aligned.",
    technologies: [
      { name: "HubSpot", icon: siHubspot },
      { name: "QBO", icon: siQuickbooks },
    ],
  },
];

export function TechStack() {
  const prefersReducedMotion = useReducedMotion() ?? false;

  return (
    <Container id="tech-stack" aria-labelledby="tech-stack-heading">
      <div className="tech-stack-header">
        <Reveal direction="left">
          <div className="section-heading">
            <span className="eyebrow">03 / Developer toolkit</span>
            <h2 id="tech-stack-heading">The stack behind the ship.</h2>
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.08}>
          <p className="section-summary">
            Languages, interfaces, APIs, data, and infrastructure arranged in the
            same order I use to turn a commit into a dependable product.
          </p>
        </Reveal>
      </div>

      <div className="technology-groups">
        {technologyGroups.map((group, groupIndex) => (
          <Reveal key={group.label} delay={groupIndex * 0.08}>
            <m.section
              className="technology-group"
              layout
              aria-labelledby={`tech-group-${groupIndex}`}
              whileHover={
                prefersReducedMotion ? undefined : { y: -6, scale: 1.012 }
              }
              transition={{ duration: prefersReducedMotion ? 0 : 0.24, ease: "easeOut" }}
            >
              <div className="group-heading">
                <span className="group-number">0{groupIndex + 1}</span>
                <div>
                  <h3 id={`tech-group-${groupIndex}`}>{group.label}</h3>
                  <p>{group.description}</p>
                </div>
              </div>

              <ul className="technology-list">
                {group.technologies.map((technology, technologyIndex) => {
                  const FallbackIcon = technology.fallbackIcon;

                  return (
                    <m.li
                      key={technology.name}
                      className="technology-tile"
                      initial={
                        prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }
                      }
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      whileHover={
                        prefersReducedMotion
                          ? undefined
                          : { y: -2, scale: 1.015, transition: { duration: 0.18 } }
                      }
                      transition={{
                        duration: prefersReducedMotion ? 0 : 0.32,
                        delay: prefersReducedMotion
                          ? 0
                          : groupIndex * 0.04 + technologyIndex * 0.055,
                        ease: "easeOut",
                      }}
                    >
                      <span
                        className="technology-icon"
                        style={
                          technology.monochrome || !technology.icon
                            ? undefined
                            : { color: `#${technology.icon.hex}` }
                        }
                        aria-hidden="true"
                      >
                        {technology.asset ? (
                          <img src={technology.asset} alt="" />
                        ) : technology.icon ? (
                          <svg viewBox="0 0 24 24" focusable="false">
                            <path d={technology.icon.path} />
                          </svg>
                        ) : FallbackIcon ? (
                          <FallbackIcon aria-hidden="true" strokeWidth={1.8} />
                        ) : null}
                      </span>
                      <span className="technology-name">{technology.name}</span>
                    </m.li>
                  );
                })}
              </ul>
            </m.section>
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
