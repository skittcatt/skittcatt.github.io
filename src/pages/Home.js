import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const STATS = [
  { value: '8', label: 'Categories'},
  { value: '26', label: 'Prompts' },
  { value: '100+', label: 'Runs' },
  { value: '6', label: 'Dedicated Students'}
];

export default function Home() {
  return (
    <div className={styles.page}>
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
            A team of students studying in their last year of Computer and Information Sciences at AUT with a passion
            to discover and provide insight into this fast-growing technology. See below for our research by comparing the 
            energy usage of different prompts that relate to real everyday cybersecurity scenarios.
          </p>
          <div className={styles.ctas}>
            <Link to="/research" className={styles.ctaPrimary}>View Research</Link>
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
                
              </p>
              <Link to="/proposal" className={styles.textLink}>
                Explore Why we took on this research ⋙
              </Link>
            </div>
            <div className={styles.aboutVisual}>
              <div className={styles.terminalBlock}>
                <div className={styles.terminalHeader}>
                  <span></span><span></span><span></span>
                </div>
                <pre className={styles.terminalCode}>
{`$ ./run_experiment.sh --v2

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
