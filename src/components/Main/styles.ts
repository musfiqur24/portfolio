import styled from "styled-components";

export const Container = styled.main`
  position: relative;
  isolation: isolate;
  max-width: 154rem;
  padding: 0 clamp(2rem, 7vw, 12rem);
  margin: 0 auto;
  overflow: hidden;

  [id^="tsparticles"] {
    position: absolute;
    inset: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    opacity: 0.86;
    pointer-events: none;
  }

  > section {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 560px) {
    padding-inline: 1.8rem;

    [id^="tsparticles"] {
      opacity: 0.62;
    }
  }
`;
