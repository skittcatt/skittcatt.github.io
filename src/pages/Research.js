import React, { useState } from 'react';
import { PROMPTS, CATEGORIES } from '../data/prompts';
import styles from './Research.module.css';

const RATING_ORDER = { Excellent: 4, Good: 3, Okay: 2, Poor: 1 };

const DIFFICULTY_COLORS = { Easy: 'diffEasy', Medium: 'diffMedium', Hard: 'diffHard' };

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
        <StatRow label="Tokens" value={model.tokens.toLocaleString()} />
        <StatRow label="Cost" value={model.cost} />
        {customEntries.map(([k, v]) => <StatRow key={k} label={k} value={v} />)}
      </div>
      <div className={styles.explanationBlock}>
        <p className={styles.explanationLabel}>Quality assessment</p>
        <p className={styles.explanationText}>{model.explanation}</p>
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

function bestRating(models) {
  return models.reduce((best, m) =>
    (RATING_ORDER[m.rating] || 0) > (RATING_ORDER[best] || 0) ? m.rating : best,
    models[0]?.rating
  );
}

function PromptCard({ entry, index }) {
  const [open, setOpen] = useState(false);
  const localBest = bestRating(entry.local);
  const cloudBest = bestRating(entry.cloud);
  const localScore = RATING_ORDER[localBest] || 0;
  const cloudScore = RATING_ORDER[cloudBest] || 0;
  const winner = localScore > cloudScore ? 'local' : cloudScore > localScore ? 'cloud' : 'tie';

  return (
    <div className={`${styles.promptCard} ${open ? styles.promptCardOpen : ''}`}>
      <button
        className={styles.promptHeader}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div className={styles.promptMeta}>
          <span className={styles.promptIndex}>#{String(index + 1).padStart(2, '0')}</span>
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
          {winner === 'local' && <span className={styles.winnerTag}>🖥 wins</span>}
          {winner === 'cloud' && <span className={styles.winnerTag}>☁️ wins</span>}
          {winner === 'tie' && <span className={styles.tieTag}>Tie</span>}
          <span className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}>▾</span>
        </div>
      </button>

      {/* ── Expanded content ── */}
      {open && (
        <div className={styles.expandedContent}>
          {/* Full prompt */}
          <div className={styles.fullPromptSection}>
            <p className={styles.fullPromptLabel}>Full Prompt</p>
            <pre className={styles.fullPromptText}>{entry.fullPrompt}</pre>
          </div>

          {/* Difficulty + category info bar */}
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

          {/* Model comparison columns */}
          <div className={styles.panelsGrid}>
            <ModelColumn side="local" models={entry.local} />
            <ModelColumn side="cloud" models={entry.cloud} />
          </div>
        </div>
      )}
    </div>
  );
}

export default function Research() {
  const [category, setCategory] = useState('All');
  const [difficulty, setDifficulty] = useState('All');

  const filtered = PROMPTS.filter((p) => {
    const catMatch = category === 'All' || p.category === category;
    const diffMatch = difficulty === 'All' || p.difficulty === difficulty;
    return catMatch && diffMatch;
  });

  const allModels = (side) => PROMPTS.flatMap((p) => p[side]);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.pageHeader}>
          <p className={styles.sectionTag}>Research</p>
          <h1 className={styles.pageTitle}>Prompt Comparisons</h1>
          <p className={styles.pageSub}>
            26 cybersecurity prompts tested across local and cloud AI models.
            Click any prompt to see the full scenario, difficulty tier, and model results.
          </p>
        </div>

        <div className={styles.legend}>
          <div className={styles.legendItem}><span className={styles.legendDotLocal} />🖥 Local AI</div>
          <div className={styles.legendItem}><span className={styles.legendDotCloud} />☁️ Cloud AI</div>
          <div className={styles.legendItem}><span className={`${styles.legendDot} ${styles.diffEasyDot}`} />Easy</div>
          <div className={styles.legendItem}><span className={`${styles.legendDot} ${styles.diffMediumDot}`} />Medium</div>
          <div className={styles.legendItem}><span className={`${styles.legendDot} ${styles.diffHardDot}`} />Hard</div>
        </div>

        {/* Filters */}
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

        {/* Prompt list */}
        <div className={styles.promptList}>
          {filtered.length === 0 && <p className={styles.empty}>No prompts match these filters.</p>}
          {filtered.map((entry, i) => <PromptCard key={entry.id} entry={entry} index={i} />)}
        </div>

        {/* Summary */}
        <div className={styles.summarySection}>
          <p className={styles.sectionTag}>Summary</p>
          <h2 className={styles.sectionTitle}>Overall results</h2>
          <div className={styles.summaryGrid}>
            {['local', 'cloud'].map((side) => (
              <div key={side} className={styles.summaryCard}>
                <span className={styles.summaryLabel}>
                  {side === 'local' ? '🖥 Local AI' : '☁️ Cloud AI'}
                  <span className={styles.summaryModelCount}> — {[...new Set(allModels(side).map(m => m.model))].length} models tested</span>
                </span>
                <div className={styles.summaryStats}>
                  {['Excellent', 'Good', 'Okay', 'Poor'].map((r) => {
                    const count = allModels(side).filter((m) => m.rating === r).length;
                    return count > 0 ? (
                      <span key={r} className={`${styles.summaryBadge} ${styles['rating' + r]}`}>{count}× {r}</span>
                    ) : null;
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
