import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const STATS = [
  { value: '3+', label: 'Years Active' },
  { value: '12', label: 'Experiments' },
  { value: '4', label: 'Publications' },
  { value: '2', label: 'Active Prototypes' },
];

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.badge}>
            <span className={styles.dot}></span>
            Active Research Project
          </div>
          <h1 className={styles.headline}>
            Engineering
            <br />
            <span className={styles.accentText}>Next-Generation</span>
            <br />
            Solutions
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
              <h2 className={styles.sectionTitle}>Built for depth,<br />not breadth</h2>
              <p className={styles.body}>
                Replace this with your project description. What problem are you solving?
                What makes your approach different? This is where you hook engineers,
                collaborators, and stakeholders.
              </p>
              <p className={styles.body}>
                Describe your methodology, your tooling, or your core hypothesis here.
                Keep it specific — vague abstractions lose technical audiences fast.
              </p>
              <Link to="/research" className={styles.textLink}>
                Explore the research →
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
