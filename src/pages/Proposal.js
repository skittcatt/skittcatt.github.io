import React from 'react';
import styles from './Proposal.module.css';

export default function Proposal() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>

        <div className={styles.pageHeader}>
          <p className={styles.sectionTag}>AUT BCIS</p>
          <h1 className={styles.pageTitle}>Exploring Energy Usage of AI in Practical Scenarios</h1>
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Abstract</h2>
          <p className={styles.body}>
            TBA
          </p>
        </section>

        <div className={styles.divider} />

        {/* ── Introduction ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Introduction</h2>
          <p className={styles.body}>
            TBA
          </p>
        </section>

        {/* ── Section with a callout box example ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Methodology</h2>
          <p className={styles.body}>
            TBA
          </p>

          {/* Callout / highlight box */}
          <div className={styles.callout}>
            <p className={styles.calloutLabel}>Key detail</p>
            <p className={styles.calloutText}>
              TBA
            </p>
          </div>

          <p className={styles.body}>
            TBA
          </p>
        </section>

        <div className={styles.divider} />

        {/* ── Section with subsections ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Results</h2>
          <p className={styles.body}>
            TBA
          </p>

          <h3 className={styles.subsectionTitle}>Local AI Performance</h3>
          <p className={styles.body}>
            TBA
          </p>

          <h3 className={styles.subsectionTitle}>Cloud AI Performance</h3>
          <p className={styles.body}>
            TBA
          </p>
        </section>

        <div className={styles.divider} />

        {/* ── Section with a simple data table ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Discussion</h2>
          <p className={styles.body}>
            TBA
          </p>

          {/* Simple table */}
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Model</th>
                  <th>Type</th>
                  <th>Avg. Response Time</th>
                  <th>Avg. Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>MODEL</td>
                  <td>TBA</td>
                  <td>TBA</td>
                  <td>TBA</td>
                </tr>
                <tr>
                  <td>MODEL</td>
                  <td>TBA</td>
                  <td>TBA</td>
                  <td>TBA</td>
                </tr>
                <tr>
                  <td>MODEL</td>
                  <td>TBA</td>
                  <td>TBA</td>
                  <td>TBA</td>
                </tr>
              </tbody>
            </table>
            <p className={styles.tableCaption}>Table 1: TBA</p>
          </div>
        </section>

        <div className={styles.divider} />

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Conclusion</h2>
          <p className={styles.body}>
            TBA
          </p>
        </section>

        <div className={styles.divider} />

        {/* ── References ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>References</h2>
          <ol className={styles.referenceList}>
            <li className={styles.reference}>Author, A. (2024). Title of paper. <em>Journal Name</em>, 10(2), 1–15.</li>
          </ol>
        </section>

      </div>
    </div>
  );
}
