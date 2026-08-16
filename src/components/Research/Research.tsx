import { ArrowUpRight, BarChart3, BookOpen, BrainCircuit, CheckCircle2, Database, Target } from "lucide-react";
import { m, useReducedMotion } from "framer-motion";
import { Container } from "./styles";
import { Reveal } from "../motion/Reveal";

const models = ["Support Vector Machine (SVM)", "Decision Tree"];
const featureMethods = ["Correlation-based Feature Selection", "Recursive Feature Elimination (RFE)"];
const comparisonMetrics = ["Accuracy", "Precision", "Recall", "F1-score"];
const inputs = ["Android permissions", "API-call features", "DREBIN 215 dataset"];
const reportedResults = [
  { label: "DREBIN 215", value: "98%", detail: "Both models" },
  { label: "Correlation", value: "93.5%", detail: "Decision Tree" },
  { label: "Balanced set", value: "97.8%", detail: "SVM" },
  { label: "RFE", value: "81.9%", detail: "Decision Tree" },
];

export function Research() {
  const prefersReducedMotion = useReducedMotion() ?? false;

  return (
    <Container id="research" aria-labelledby="research-heading">
      <Reveal>
        <div className="section-heading">
          <div>
            <span className="eyebrow">05 / Research &amp; publications</span>
            <h2 id="research-heading">Research with measurable outcomes.</h2>
          </div>
          <p>
            A machine-learning study exploring practical ways to identify Android
            malware from permissions and API-call behavior.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <m.article
          className="research-card"
          whileHover={prefersReducedMotion ? undefined : { y: -5 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.25, ease: "easeOut" }}
        >
          <div className="research-main">
            <div className="research-meta">
              <span className="research-icon" aria-hidden="true"><BookOpen size={19} /></span>
              <span>Short paper · 2024</span>
            </div>
            <h3>Comparative Analysis of Android Malware Detection Using Machine Learning Techniques</h3>
            <p className="research-authors">Musfiqur Rahman · Hishamudin B. Asmuni</p>
            <p className="research-summary">
              The study compares Support Vector Machines and Decision Trees for
              classifying malicious and benign Android applications, using app
              permissions and API-call signatures as the primary signals.
            </p>

            <div className="research-objective">
              <div className="research-block-title"><Target size={16} aria-hidden="true" /> Research objective</div>
              <p>
                Balance detection accuracy, precision, recall, and model
                interpretability while reducing noisy features through
                Correlation-based Feature Selection and RFE.
              </p>
            </div>

            <div className="research-snapshot">
              <div className="research-block-title"><BarChart3 size={16} aria-hidden="true" /> Reported accuracy snapshots</div>
              <div className="snapshot-grid">
                {reportedResults.map((result) => (
                  <div className="snapshot-card" key={result.label}>
                    <span>{result.label}</span>
                    <strong>{result.value}</strong>
                    <small>{result.detail}</small>
                  </div>
                ))}
              </div>
              <p className="snapshot-note">Accuracy varies with feature selection and dataset balancing; the paper compares all four metrics for each scenario.</p>
            </div>
          </div>

          <aside className="research-results" aria-label="Research models, methods, and results">
            <div className="research-result-group">
              <div className="research-block-title"><BrainCircuit size={16} aria-hidden="true" /> Machine-learning models</div>
              <div className="research-tags">
                {models.map((model) => <span key={model}>{model}</span>)}
              </div>
            </div>

            <div className="research-result-group">
              <div className="research-block-title">Feature-selection methods</div>
              <ul className="detail-list">
                {featureMethods.map((item) => (
                  <li key={item}><CheckCircle2 size={15} aria-hidden="true" /><span>{item}</span></li>
                ))}
              </ul>
            </div>

            <div className="research-result-group comparison-group">
              <div className="research-block-title"><BarChart3 size={16} aria-hidden="true" /> Result comparison metrics</div>
              <div className="metric-grid">
                {comparisonMetrics.map((metric) => (
                  <span key={metric}>{metric}</span>
                ))}
              </div>
              <p className="comparison-note">Each metric compares how well the two models distinguish malware from benign apps.</p>
            </div>

            <div className="research-result-group">
              <div className="research-block-title">Data signals</div>
              <ul className="detail-list">
                {inputs.map((item) => (
                  <li key={item}><Database size={15} aria-hidden="true" /><span>{item}</span></li>
                ))}
              </ul>
            </div>

            <div className="research-finding">
              <span>Key finding</span>
              <strong>Hybrid SVM + Decision Tree detection can combine precision with sensitivity.</strong>
              <small>Reported results vary by feature-selection strategy and dataset balance.</small>
            </div>
          </aside>

          <a className="research-link" href="#contact">
            Discuss the research <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </m.article>
      </Reveal>
    </Container>
  );
}
