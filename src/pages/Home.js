import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const STATS = [
  { value: '8', label: 'Categories'},
  { value: '20+', label: 'Prompts' },
  { value: '?', label: 'Runs' },
  { value: '6', label: 'Dedicated People'}
];

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.badge}>
            <span className={styles.dot}></span>
            Auckland University of Technology 2026 Research & Development Project
          </div>
          <h1 className={styles.headline}>
            Exploring Energy Use of
            <br />
            <span className={styles.accentText}>Artifical Intelligence</span>
            <br />
            in Practical Scenarios
          </h1>
          <p className={styles.sub}>
            A focused R&D initiative pushing the boundaries of applied engineering.
            Rigorous methodology. Real-world impact. Reproducible results.
          </p>
          <div className={styles.ctas}>
            <Link to="/research" className={styles.ctaPrimary}>View Research</Link>
            <Link to="/contact" className={styles.ctaSecondary}>Get in Touch</Link>
          </div>
        </div>
        <div className={styles.grid} aria-hidden="true">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className={styles.gridCell}></div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {STATS.map(({ value, label }) => (
              <div key={label} className={styles.statCard}>
                <span className={styles.statValue}>{value}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About blurb */}
      <section className={styles.about}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <p className={styles.sectionTag}>About the Project</p>
              <h2 className={styles.sectionTitle}>We wanted answers,<br />so we didn't stop testing</h2>
              <p className={styles.body}>
                lalalal
              </p>
              <Link to="/research" className={styles.textLink}>
                Explore our findings →
              </Link>
            </div>
            <div className={styles.aboutVisual}>
              <div className={styles.terminalBlock}>
                <div className={styles.terminalHeader}>
                  <span></span><span></span><span></span>
                </div>
                <pre className={styles.terminalCode}>
{`$ ./run_experiment.sh --v2

> Initializing pipeline...
> Loading dataset      [OK]
> Running inference    [OK]
> Evaluating metrics   [OK]

Accuracy:  94.7%
Latency:   12ms avg
Delta:     +3.2% vs baseline

> Results saved to /output/v2`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
