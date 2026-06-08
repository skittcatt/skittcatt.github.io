import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const STATS = [
  { value: '7',    label: 'Categories' },
  { value: '23',   label: 'Prompts' },
  { value: '100+', label: 'Runs' },
  { value: '6',    label: 'Dedicated Students' }
];

// ── Featured scenario data ────────────────────────────────────────────────────
const FEATURED = {
  id: 8,
  title: 'Insider Threat — Departing Employee',
  category: 'Threat Detection',
  difficulty: 'Hard',
  prompt: `Flag suspicious insider activity from these user behaviour logs:

User: emily.chen@company.com (Marketing Manager) — Sunday 2:45 AM
• Accessed HR database (outside her role permissions)
• Downloaded 2,500 employee records (names, emails, salaries)
• Exported files to USB drive
• Sent 15 emails to personal Gmail with attachments
• Cleared browser history and deleted temp files
• VPN source: airport Wi-Fi

Context: Emily submitted her resignation on Friday. Her last day is
next Friday. USB exports are policy violations. Access to HR and Sales
data is outside her defined role.

Respond with:
1. Classification: insider threat type and severity (1 sentence)
2. Key Indicators: exactly 3 bullet points identifying high-risk behaviours
3. Immediate Actions: exactly 3 bullet points for HR and IT response
4. Prevention: exactly 2 bullet points on offboarding access controls`,
  results: [
    { model: 'GPT-3.5-turbo', type: 'Cloud', time: '6.0 s', energy: '0.000207 kWh', joules: '744 J', cost: '$0.001327 NZD', best: false },
    { model: 'Gemini Pro',    type: 'Cloud', time: '6.0 s', energy: '0.000146 kWh', joules: '525 J', cost: '$0.000125 NZD', best: true  },
    { model: 'Mistral Small', type: 'Cloud', time: '6.0 s', energy: '0.000182 kWh', joules: '657 J', cost: '$0.001003 NZD', best: false },
    { model: 'LLaMA 2 7B',   type: 'Local', time: '24.82 s', energy: '0.000093 kWh', joules: '335 J', cost: '$0.000028 NZD', best: false },
  ],
  takeaways: [
    { icon: '⚡', bold: 'Cloud model choice matters.', text: ' Gemini Pro used 42% less energy than GPT-3.5-turbo for the exact same task.' },
    { icon: '📏', bold: 'Output length drives energy.', text: ' Not prompt complexity — how long the response is determines how much energy is used.' },
    { icon: '🔒', bold: 'Local keeps data on-premises.', text: ' At the cost of being 4× slower — the right call in regulated environments.' },
    { icon: '💸', bold: 'Pricing ≠ energy efficiency.', text: ' GPT costs ~10× more than Gemini per run but uses only 42% more energy.' },
  ]
};

export default function Home() {
  const [promptOpen, setPromptOpen] = useState(false);

  return (
    <div className={styles.page}>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.badge}>
            <span className={styles.dot}></span>
            Auckland University of Technology 2026 Research &amp; Development Project
          </div>
          <h1 className={styles.headline}>
            Exploring Energy Use of
            <br />
            <span className={styles.accentText}>Artificial Intelligence</span>
            <br />
            in Practical Scenarios
          </h1>
          <p className={styles.sub}>
            A team of students studying in their last year of Computer and Information Sciences at AUT
            with a passion to discover and provide insight into this fast-growing technology. See below
            for our research by comparing the energy usage of different prompts that relate to real
            everyday cybersecurity scenarios.
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

      {/* ── Stats ── */}
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

      {/* ── Featured Scenario ── */}
      <section className={styles.featuredSection}>
        <div className={styles.container}>
          <div className={styles.featuredHeader}>
            <p className={styles.sectionTag}>Example Scenario</p>
            <h2 className={styles.sectionTitle}>See it in action</h2>
            <p className={styles.featuredSub}>
              This is one of 23 cybersecurity prompts we tested across all four models.
              It recorded the highest local energy consumption of any scenario — making it
              the clearest illustration of the cloud vs. local trade-off.
            </p>
          </div>

          {/* Scenario card */}
          <div className={styles.scenarioCard}>

            {/* Card header */}
            <div className={styles.scenarioCardHeader}>
              <div className={styles.scenarioMeta}>
                <span className={styles.scenarioNum}>#{String(FEATURED.id).padStart(2, '0')}</span>
                <span className={styles.scenarioTitle}>{FEATURED.title}</span>
              </div>
              <div className={styles.scenarioBadges}>
                <span className={styles.diffHard}>{FEATURED.difficulty}</span>
                <span className={styles.catBadge}>{FEATURED.category}</span>
              </div>
            </div>

            {/* Prompt toggle */}
            <div className={styles.promptToggleWrap}>
              <button
                className={styles.promptToggle}
                onClick={() => setPromptOpen(o => !o)}
                aria-expanded={promptOpen}
              >
                <span className={styles.promptToggleLabel}>Full Prompt</span>
                <span className={`${styles.promptChevron} ${promptOpen ? styles.promptChevronOpen : ''}`}>▾</span>
              </button>
              {promptOpen && (
                <pre className={styles.promptText}>{FEATURED.prompt}</pre>
              )}
            </div>

            {/* Results table */}
            <div className={styles.resultsWrap}>
              <p className={styles.resultsLabel}>Results — per run</p>
              <div className={styles.tableScroll}>
                <table className={styles.resultsTable}>
                  <thead>
                    <tr>
                      <th>Model</th>
                      <th>Type</th>
                      <th>Response Time</th>
                      <th>Energy / Run</th>
                      <th>Joules</th>
                      <th>Cost / Run</th>
                    </tr>
                  </thead>
                  <tbody>
                    {FEATURED.results.map(r => (
                      <tr key={r.model} className={r.best ? styles.bestRow : ''}>
                        <td>
                          <span className={styles.modelName}>{r.model}</span>
                          {r.best && <span className={styles.bestBadge}>Most efficient</span>}
                        </td>
                        <td>
                          <span className={r.type === 'Cloud' ? styles.typeCloud : styles.typeLocal}>
                            {r.type === 'Cloud' ? '☁️' : '🖥'} {r.type}
                          </span>
                        </td>
                        <td className={r.type === 'Local' ? styles.slowVal : ''}>{r.time}</td>
                        <td>{r.energy}</td>
                        <td>{r.joules}</td>
                        <td>{r.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Takeaways */}
            <div className={styles.takeawaysWrap}>
              <p className={styles.resultsLabel}>What this tells us</p>
              <div className={styles.takeawaysGrid}>
                {FEATURED.takeaways.map((t, i) => (
                  <div key={i} className={styles.takeawayCard}>
                    <span className={styles.takeawayIcon}>{t.icon}</span>
                    <p className={styles.takeawayText}>
                      <strong>{t.bold}</strong>{t.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className={styles.featuredCta}>
            <Link to="/research" className={styles.ctaPrimary}>
              Explore all 23 scenarios →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}