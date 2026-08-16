import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { m, useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Code2 } from "lucide-react";
import { Container } from "./styles";
import { Reveal } from "../motion/Reveal";
import Musfiqur from "../../assets/Musfiqur.png";

gsap.registerPlugin(ScrollTrigger);

const careerStart = new Date(2024, 6, 1);

function getExperienceDuration(now: Date) {
  let years = now.getFullYear() - careerStart.getFullYear();
  let months = now.getMonth() - careerStart.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months };
}

export function Hero() {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const heroRef = useRef<HTMLElement | null>(null);
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 60_000);
    return () => window.clearInterval(timer);
  }, []);

  const experience = getExperienceDuration(now);
  const experienceLabel = [
    `${experience.years} yr${experience.years === 1 ? "" : "s"}`,
    experience.months ? `${experience.months} mo` : "",
  ]
    .filter(Boolean)
    .join(" ");

  useLayoutEffect(() => {
    const scope = heroRef.current;

    if (!scope || prefersReducedMotion) {
      return;
    }

    const context = gsap.context(() => {
      const entrance = gsap.timeline({ defaults: { ease: "power3.out" } });

      entrance
        .from(".visual-parallax", {
          autoAlpha: 0,
          y: 34,
          scale: 0.96,
          duration: 0.82,
        })
        .from(
          ".visual-note",
          {
            autoAlpha: 0,
            y: 18,
            scale: 0.92,
            duration: 0.46,
            stagger: 0.12,
          },
          "-=0.36"
        );

      gsap.to(".orbit-one", {
        rotation: 360,
        duration: 28,
        ease: "none",
        repeat: -1,
      });

      gsap.to(".orbit-two", {
        rotation: -360,
        duration: 38,
        ease: "none",
        repeat: -1,
      });

      gsap.to(".portrait-frame", {
        y: -18,
        ease: "none",
        scrollTrigger: {
          trigger: scope,
          start: "top top",
          end: "bottom top",
          scrub: 0.7,
        },
      });
    }, scope);

    return () => context.revert();
  }, [prefersReducedMotion]);

  return (
    <Container id="home" ref={heroRef}>
      <div className="hero-copy">
        <Reveal delay={0.04}>
          <div className="engineer-signature" aria-label="Engineering focus">
            <div className="signature-bar" aria-hidden="true"><i /><i /><i /><span>engineer.ts</span></div>
            <p className="hero-kicker">Software Engineer</p>
            <p className="code-twist">
              <span>const</span> engineer = &#123; stack: [
              <strong>&quot;Java&quot;, &quot;Node.js&quot;, &quot;React&quot;</strong>], ships: <strong>&quot;reliable systems&quot;</strong> &#125;;
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <h1>
            I build scalable web applications <span>and digital experiences.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="hero-description">
            I&apos;m Musfiqur Rahman, a software engineer focused on reliable
            backend systems, clean APIs, and thoughtful product experiences.
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="hero-usp" aria-label="Profile highlights">
            <m.div className="usp-card" whileHover={prefersReducedMotion ? undefined : { y: -3 }}>
              <m.strong
                key={experienceLabel}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.24 }}
              >
                {experienceLabel}
              </m.strong>
              <span>Engineering experience</span>
            </m.div>
            <m.div className="usp-card" whileHover={prefersReducedMotion ? undefined : { y: -3 }}>
              <strong>CRM integration</strong>
              <span>Connected business workflows</span>
            </m.div>
            <m.div className="usp-card" whileHover={prefersReducedMotion ? undefined : { y: -3 }}>
              <strong>Full-stack</strong>
              <span>Product delivery</span>
            </m.div>
            <m.div className="usp-card" whileHover={prefersReducedMotion ? undefined : { y: -3 }}>
              <strong>Fintech systems</strong>
              <span>Financial workflows &amp; APIs</span>
            </m.div>
          </div>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="hero-actions">
            <m.a
              href="#project"
              className="button primary-action"
              whileHover={prefersReducedMotion ? undefined : { y: -3 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
            >
              View my work
            </m.a>
            <m.a
              href="https://github.com/musfiqur24"
              className="secondary-action"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub (opens in a new tab)"
              whileHover={prefersReducedMotion ? undefined : { x: 4 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
            >
              <Code2 size={18} strokeWidth={2.1} aria-hidden="true" />
              GitHub <ArrowUpRight size={17} strokeWidth={2.1} aria-hidden="true" />
            </m.a>
          </div>
        </Reveal>
      </div>

      <div className="hero-visual">
        <div className="visual-parallax">
          <div className="visual-orbit orbit-one" aria-hidden="true" />
          <div className="visual-orbit orbit-two" aria-hidden="true" />
          <div className="portrait-frame">
            <div className="portrait-topbar" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <m.img
              src={Musfiqur}
              alt="Musfiqur Rahman"
              whileHover={prefersReducedMotion ? undefined : { scale: 1.02, y: -4 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            />
          </div>
          <div className="visual-note availability-note">
            <span className="note-dot" aria-hidden="true" />
            <div>
              <strong>Open to collaborate</strong>
              <small>Web & enterprise systems</small>
            </div>
          </div>
          <div className="visual-note stack-note">
            <small>Core stack</small>
            <strong>Java Full Stack &middot; MERN</strong>
            <span>Java / React / SQL</span>
          </div>
        </div>
      </div>
    </Container>
  );
}
