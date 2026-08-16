import { CSSProperties, ReactNode } from "react";
import { m, useReducedMotion } from "framer-motion";

type Direction = "up" | "down" | "left" | "right";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  style?: CSSProperties;
  viewportAmount?: number;
}

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 28 },
  down: { x: 0, y: -28 },
  left: { x: 28, y: 0 },
  right: { x: -28, y: 0 },
};

/** A one-time, viewport-aware reveal that respects the user's motion preference. */
export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  style,
  viewportAmount = 0.2,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const offset = prefersReducedMotion ? { x: 0, y: 0 } : offsets[direction];

  return (
    <m.div
      className={className}
      style={style}
      initial={{ opacity: prefersReducedMotion ? 1 : 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: viewportAmount }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.58,
        delay: prefersReducedMotion ? 0 : delay,
        ease: "easeOut",
      }}
    >
      {children}
    </m.div>
  );
}
