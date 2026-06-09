import React, { useState } from 'react';
import { PROMPTS, CATEGORIES } from '../data/prompts';
import styles from './Research.module.css';

const DIFFICULTY_COLORS = { Easy: 'diffEasy', Medium: 'diffMedium', Hard: 'diffHard' };

// ── Static summary stats (from experiment data) ──────────────────────────────
const SUMMARY_STATS = [
  { label: 'Scenarios Tested',       value: '23',        sub: 'across 7 categories' },
  { label: 'Models Evaluated',       value: '4',         sub: '3 cloud · 1 local' },
  { label: 'Avg Cloud Response',     value: '3.0s',      sub: 'vs 23.5s local' },
  { label: 'Cloud Energy / Request', value: '561 J',     sub: 'avg across 3 models' },
  { label: 'Local Energy / Scenario',value: '0.163 kWh', sub: '~1,048× more than cloud' },
  { label: 'Total Cloud Runs',       value: '360',       sub: 'NZD $0.047 total cost' },
];

// ── Sub-components ────────────────────────────────────────────────────────────
function RatingBadge({ rating }) {
  return <span className={`${styles.ratingBadge} ${styles['rating' + rating]}`}>{rating}</span>;
}

function StatRow({ label, value }) {
  return (
    <div className={styles.statRow}>
      <span className={styles.statLabel}>{label}</span>
      <span className={styles.statValue}>{value}</span>
    </div>
  );
}

function ModelCard({ model, side }) {
  const customEntries = Object.entries(model.custom || {});
  return (
    <div className={`${styles.modelCard} ${styles[side + 'Card']}`}>
      <div className={styles.modelCardHeader}>
        <h5 className={styles.modelCardName}>{model.model}</h5>
        <RatingBadge rating={model.rating} />
      </div>
      <div className={styles.statsBlock}>
        <StatRow label="Response time" value={model.responseTime} />
        <StatRow label="Input Tokens Count" value={model.inputTokens.toLocaleString()} />
        <StatRow label="Output Tokens Count" value={model.outputTokens?.toLocaleString()} />
        {customEntries.map(([k, v]) => <StatRow key={k} label={k} value={v} />)}
        <StatRow label="Cost" value={model.cost} />
      </div>
    </div>
  );
}

function ModelColumn({ side, models }) {
  return (
    <div className={`${styles.modelColumn} ${styles[side + 'Column']}`}>
      <div className={styles.columnHeader}>
        <span className={styles.columnIcon}>{side === 'local' ? '🖥' : '☁️'}</span>
        <span className={styles.columnTitle}>{side === 'local' ? 'Local AI' : 'Cloud AI'}</span>
        <span className={styles.columnCount}>{models.length} model{models.length !== 1 ? 's' : ''}</span>
      </div>
      <div className={styles.modelCardList}>
        {models.map((m) => <ModelCard key={m.model} model={m} side={side} />)}
      </div>
    </div>
  );
}

function PromptCard({ entry, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles.promptCard} ${open ? styles.promptCardOpen : ''}`}>
      <button
        className={styles.promptHeader}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div className={styles.promptMeta}>
          <span className={styles.promptIndex}>#{String(index).padStart(2, '0')}</span>
          <span className={styles.promptTitle}>{entry.title}</span>
          <span className={`${styles.diffBadge} ${styles[DIFFICULTY_COLORS[entry.difficulty]]}`}>
            {entry.difficulty}
          </span>
          <span className={styles.categoryPill}>{entry.category}</span>
        </div>
        <div className={styles.promptSummary}>
          <span className={styles.sideCount}>🖥 {entry.local.length}</span>
          <span className={styles.vs}>vs</span>
          <span className={styles.sideCount}>☁️ {entry.cloud.length}</span>
          <span className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}>▾</span>
        </div>
      </button>

      {open && (
        <div className={styles.expandedContent}>
          <div className={styles.fullPromptSection}>
            <p className={styles.fullPromptLabel}>Full Prompt</p>
            <pre className={styles.fullPromptText}>{entry.fullPrompt}</pre>
          </div>

          <div className={styles.infoBar}>
            <div className={styles.infoItem}>
              <span className={styles.infoKey}>Difficulty</span>
              <span className={`${styles.diffBadgeLarge} ${styles[DIFFICULTY_COLORS[entry.difficulty]]}`}>
                {entry.difficulty}
              </span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoKey}>Category</span>
              <span className={styles.infoVal}>{entry.category}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoKey}>Local models</span>
              <span className={styles.infoVal}>{entry.local.length}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoKey}>Cloud models</span>
              <span className={styles.infoVal}>{entry.cloud.length}</span>
            </div>
          </div>

          <div className={styles.panelsGrid}>
            <ModelColumn side="local" models={entry.local} />
            <ModelColumn side="cloud" models={entry.cloud} />
          </div>
        </div>
      )}
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function Research() {
  const [category, setCategory] = useState('All');
  const [difficulty, setDifficulty] = useState('All');

  const filtered = PROMPTS.filter((p) => {
    const catMatch = category === 'All' || p.category === category;
    const diffMatch = difficulty === 'All' || p.difficulty === difficulty;
    return catMatch && diffMatch;
  });

  return (
    <div className={styles.page}>
      <div className={styles.container}>

        {/* ── Page header ── */}
        <div className={styles.pageHeader}>
          <p className={styles.sectionTag}>Research</p>
          <h1 className={styles.pageTitle}>Prompt Comparisons</h1>
          <p className={styles.pageSub}>
            23 cybersecurity prompts tested across local and cloud AI models.
            Click any prompt to see the full scenario, difficulty tier, and model results.
          </p>
        </div>

        <div className={styles.divider} />

        {/* ── Key stats summary ── */}
        <section className={styles.summarySection}>
          <p className={styles.sectionTag}>Overview</p>
          <h2 className={styles.sectionTitle}>Key Statistics</h2>
          <p className={styles.summaryBlurb}>
            This research tested 23 structured cybersecurity prompts across four AI models, 
            GPT-3.5-turbo, Gemini Pro, Mistral Small, and a locally-hosted Meta LLaMA 2 7B,
            spanning seven categories including phishing detection, threat analysis, vulnerability
            assessment, and incident response. The central finding is that output token length,
            not prompt complexity, is the dominant driver of energy consumption in both cloud
            and local deployments. Cloud inference proved dramatically more efficient, averaging
            just 561 J per request at consistent 6-second response times, while the local model
            used approximately 1,048 times more energy per task and responded 3.3× more slowly.
            However, local deployment keeps all data on-premises; a trade-off that may be
            essential in regulated or security-sensitive environments.
          </p>
          <div className={styles.statsGrid}>
            {SUMMARY_STATS.map((s) => (
              <div key={s.label} className={styles.statCard}>
                <span className={styles.statCardValue}>{s.value}</span>
                <span className={styles.statCardLabel}>{s.label}</span>
                <span className={styles.statCardSub}>{s.sub}</span>
              </div>
            ))}
          </div>
        </section>

        <div className={styles.divider} />

        {/* ── Filters ── */}
        <div className={styles.filterRow}>
          <div className={styles.filterGroup}>
            <span className={styles.filterLabel}>Category:</span>
            <div className={styles.filterBtns}>
              {CATEGORIES.map((c) => (
                <button key={c} className={`${styles.filterBtn} ${category === c ? styles.filterActive : ''}`} onClick={() => setCategory(c)}>
                  {c}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.filterGroup}>
            <span className={styles.filterLabel}>Difficulty:</span>
            <div className={styles.filterBtns}>
              {['All', 'Easy', 'Medium', 'Hard'].map((d) => (
                <button key={d} className={`${styles.filterBtn} ${difficulty === d ? styles.filterActive : ''}`} onClick={() => setDifficulty(d)}>
                  {d}
                </button>
              ))}
            </div>
          </div>
        </div>

        <p className={styles.resultCount}>{filtered.length} prompt{filtered.length !== 1 ? 's' : ''} shown</p>

        {/* ── Prompt list ── */}
        <div className={styles.promptList}>
          {filtered.length === 0 && <p className={styles.empty}>No prompts match these filters.</p>}
          {filtered.map((entry) => <PromptCard key={entry.id} entry={entry} index={entry.id} />)}
        </div>
      </div>
    </div>
  );
}