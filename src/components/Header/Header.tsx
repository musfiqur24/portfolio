import { useEffect, useState } from "react";
import { Download, Moon, Sun } from "lucide-react";
import { Container } from "./styles";
import Resume from "../../assets/Musfiqur-Rahman.pdf";

const navigationItems = [
  { href: "#project", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#research", label: "Research" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(() =>
    document.documentElement.classList.contains("light")
  );

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  function toggleTheme() {
    setIsLight((previousTheme) => {
      const nextTheme = !previousTheme;
      document.documentElement.classList.toggle("light", nextTheme);
      return nextTheme;
    });
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <Container className="header-fixed">
      <a
        href="#home"
        className="logo"
        onClick={closeMenu}
        aria-label="Musfiqur Rahman home"
      >
        <span className="brand-mark" aria-hidden="true">MR</span>
        <strong className="brand-copy">Musfiqur</strong>
      </a>

      <nav id="primary-navigation" className={isMenuOpen ? "active" : ""}>
        {navigationItems.map(({ href, label }) => (
          <a href={href} key={href} onClick={closeMenu}>
            {label}
          </a>
        ))}
        <a href={Resume} download className="resume-link" onClick={closeMenu}>
          <span>Resume</span>
          <Download size={15} strokeWidth={2.2} aria-hidden="true" />
        </a>
      </nav>

      <button
        className="theme-toggle"
        type="button"
        aria-label={isLight ? "Use dark theme" : "Use light theme"}
        aria-pressed={isLight}
        onClick={toggleTheme}
      >
        {isLight ? (
          <Moon size={17} strokeWidth={2.1} aria-hidden="true" />
        ) : (
          <Sun size={17} strokeWidth={2.1} aria-hidden="true" />
        )}
        <span className="sr-only">Toggle color theme</span>
      </button>

      <button
        type="button"
        aria-controls="primary-navigation"
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        className={isMenuOpen ? "menu active" : "menu"}
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
      >
        <span />
      </button>
    </Container>
  );
}
