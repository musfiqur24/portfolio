import React from "react";
import { Container, Card } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

export default function Experience() {
  return (
    <Container>
      <h2>Experience</h2>

      <ScrollAnimation animateIn="fadeInLeft" delay={200}>
        <Card>
          <h3>Junior Software Developer</h3>
          <h4>Benchmark Software Bangladesh Ltd</h4>
          <p>Apr 2025 – Present</p>
          <p>Dhaka, Bangladesh</p>
          <ul>
            <li>Developing the Admin – Financial Module (COA, Trial Balance, Income Statement, A/C Head Config).</li>
            <li>Building RESTFul APIs using Java Spring Boot.</li>
            <li>Designing and generating financial reports using JasperSoft Studio.</li>
          </ul>
        </Card>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeInLeft" delay={400}>
        <Card>
          <h3>Software Developer Intern</h3>
          <h4>Benchmark Software Bangladesh Ltd</h4>
          <p>Sep 2024 – Mar 2025</p>
          <p>Dhaka, Bangladesh</p>
          <ul>
            <li>Developed the Admin Module for the AIMS (User Management, Report Generation) using Agile methodology.</li>
            <li>Built frontend with ReactJS and TypeScript, managed Backend CRUD with Java Spring Boot.</li>
            <li>Prepared SRS, SDD, ERD documentation for the MFI Collector app used by several NGOs.</li>
          </ul>
        </Card>
      </ScrollAnimation>
    </Container>
  );
}
