import { useReducedMotion } from "framer-motion";
import Particles from "react-tsparticles";
import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Project } from "../Project/Project";
import { TechStack } from "../TechStack/TechStack";
import { Research } from "../Research/Research";
import java from "../../assets/java.svg";
import Experience from "../Experience/Experience";
import {
  siDocker,
  siExpress,
  siHubspot,
  siJavascript,
  siKubernetes,
  siMongodb,
  siN8n,
  siNginx,
  siNodedotjs,
  siNextdotjs,
  siPostgresql,
  siReact,
  siRedis,
  siQuickbooks,
  siSpringboot,
  siTypescript,
  siZapier,
  type SimpleIcon,
} from "simple-icons";

const simpleIconData = (icon: SimpleIcon) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#${icon.hex}" d="${icon.path}"/></svg>`,
  )}`;

const labelIconData = (label: string) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 24"><rect width="72" height="24" rx="5" fill="#64748b" fill-opacity=".24"/><text x="36" y="16" fill="#cbd5e1" font-family="Arial,sans-serif" font-size="9" font-weight="700" text-anchor="middle">${label}</text></svg>`,
  )}`;

const baseBackgroundIcons = [
  { src: simpleIconData(siJavascript), width: 24, height: 24 },
  { src: simpleIconData(siReact), width: 24, height: 24 },
  { src: java, width: 24, height: 24 },
  { src: simpleIconData(siSpringboot), width: 24, height: 24 },
  { src: simpleIconData(siNextdotjs), width: 24, height: 24 },
  { src: simpleIconData(siPostgresql), width: 24, height: 24 },
  { src: simpleIconData(siMongodb), width: 24, height: 24 },
  { src: labelIconData("ORACLE"), width: 72, height: 24 },
  { src: simpleIconData(siExpress), width: 24, height: 24 },
  { src: simpleIconData(siNodedotjs), width: 24, height: 24 },
  { src: simpleIconData(siHubspot), width: 24, height: 24 },
  { src: simpleIconData(siQuickbooks), width: 24, height: 24 },
  { src: simpleIconData(siDocker), width: 24, height: 24 },
  { src: simpleIconData(siKubernetes), width: 24, height: 24 },
  { src: simpleIconData(siNginx), width: 24, height: 24 },
  { src: simpleIconData(siRedis), width: 24, height: 24 },
  { src: simpleIconData(siN8n), width: 24, height: 24 },
  { src: simpleIconData(siZapier), width: 24, height: 24 },
  { src: simpleIconData(siTypescript), width: 24, height: 24 },
];

// Repeat the full set so the background feels intentionally populated rather
// than showing only a handful of randomly selected marks.
const backgroundIcons = [
  ...baseBackgroundIcons,
  ...baseBackgroundIcons,
  ...baseBackgroundIcons,
];

const particleOptions = {
  fullScreen: { enable: false },
  detectRetina: true,
  fpsLimit: 32,
  interactivity: {
    events: {
      onClick: { enable: false },
      onHover: { enable: false },
      resize: true,
    },
  },
  particles: {
    move: {
      enable: true,
      speed: 0.42,
      direction: "none" as const,
      outMode: "out" as const,
    },
    number: {
      density: { enable: true, area: 850 },
      limit: 72,
      value: 52,
    },
    opacity: {
      animation: { enable: false },
      random: true,
      value: 0.94,
    },
    rotate: {
      animation: { enable: false },
      random: true,
      value: 0,
    },
      shape: {
        image: backgroundIcons,
        type: "image" as const,
    },
    size: {
      random: true,
      value: 21,
    },
  },
};

const particleLayers = [
  { id: "tsparticles-small", size: 8, value: 24 },
  { id: "tsparticles-medium", size: 16, value: 24 },
  { id: "tsparticles-large", size: 20, value: 20 },
];

export function Main() {
  const prefersReducedMotion = useReducedMotion() ?? false;

  return (
    <Container>
      {!prefersReducedMotion &&
        particleLayers.map((layer) => (
          <Particles
            id={layer.id}
            key={layer.id}
            options={{
              ...particleOptions,
              particles: {
                ...particleOptions.particles,
                number: {
                  ...particleOptions.particles.number,
                  limit: layer.value + 8,
                  value: layer.value,
                },
                size: {
                  random: false,
                  value: layer.size,
                },
              },
            }}
          />
        ))}
      <Hero />
      <Project />
      <Experience />
      <TechStack />
      <Research />
      <About />
      <Contact />
    </Container>
  );
}
