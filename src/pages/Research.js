import React, { useState } from 'react';
import styles from './Research.module.css';

const FEATURES = [
  {
    tag: 'Core System',
    title: 'Feature One',
    description:
      'Describe a key technical component or research area here. What did you build? What problem does it solve? Be specific about the engineering decisions.',
    status: 'Complete',
    statusType: 'complete',
  },
  {
    tag: 'Methodology',
    title: 'Feature Two',
    description:
      'Another major area of your research. Explain your approach, any novel techniques you used, and what the results showed. Link out to papers if relevant.',
    status: 'In Progress',
    statusType: 'active',
  },
  {
    tag: 'Infrastructure',
    title: 'Feature Three',
    description:
      'Describe the tooling, pipeline, or infrastructure supporting your experiments. What tech stack? What scale? This is what impresses engineers reading the site.',
    status: 'Complete',
    statusType: 'complete',
  },
  {
    tag: 'Future Work',
    title: 'Feature Four',
    description:
      "What's next? Describe the research roadmap, open problems, or planned experiments. Shows you're thinking long-term and have a clear direction.",
    status: 'Planned',
    statusType: 'planned',
  },
];

const PUBLICATIONS = [
  {
    year: '2024',
    title: 'Your Paper Title Goes Here',
    venue: 'Conference / Journal Name',
    authors: 'Author A, Author B, Author C',
    link: '#',
  },
  {
    year: '2023',
    title: 'Earlier Publication or Report',
    venue: 'Workshop / Preprint',
    authors: 'Author A, Author B',
    link: '#',
  },
];

export default function Research() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Complete', 'In Progress', 'Planned'];

  const filtered =
    activeFilter === 'All'
      ? FEATURES
      : FEATURES.filter((f) => f.status === activeFilter);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.pageHeader}>
          <p className={styles.sectionTag}>Research &amp; Features</p>
          <h1 className={styles.pageTitle}>What we're building</h1>
          <p className={styles.pageSub}>
            An overview of the core technical areas, experiments, and findings.
            Update these cards with your actual research components.
          </p>
        </div>

        {/* Filter */}
        <div className={styles.filters}>
          {filters.map((f) => (
            <button
              key={f}
              className={`${styles.filterBtn} ${activeFilter === f ? styles.filterActive : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Feature Cards */}
        <div className={styles.featureGrid}>
          {filtered.map((item) => (
            <div key={item.title} className={styles.featureCard}>
              <div className={styles.cardTop}>
                <span className={styles.cardTag}>{item.tag}</span>
                <span className={`${styles.cardStatus} ${styles[item.statusType]}`}>
                  {item.status}
                </span>
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </div>
          ))}
        </div>

        {/* Publications */}
        <div className={styles.pubSection}>
          <p className={styles.sectionTag}>Publications &amp; Reports</p>
          <h2 className={styles.sectionTitle}>Written output</h2>
          <div className={styles.pubList}>
            {PUBLICATIONS.map((pub) => (
              <a
                key={pub.title}
                href={pub.link}
                className={styles.pubCard}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.pubYear}>{pub.year}</span>
                <div className={styles.pubInfo}>
                  <h4 className={styles.pubTitle}>{pub.title}</h4>
                  <p className={styles.pubMeta}>
                    {pub.venue} · {pub.authors}
                  </p>
                </div>
                <span className={styles.pubArrow}>↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
