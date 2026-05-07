import React, { useState } from 'react';
import { PROMPTS } from '../data/prompts';
import styles from './Research.module.css';

const RATING_ORDER = { Excellent: 4, Good: 3, Okay: 2, Poor: 1 };

function RatingBadge({ rating }) {
  return (
    <span className={styles.ratingBadge + ' ' + styles['rating' + rating]}>
      {rating}
    </span>
  );
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
    <div className={styles.modelCard + ' ' + styles[side + 'Card']}>
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
    <div className={styles.modelColumn + ' ' + styles[side + 'Column']}>
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
  return models.reduce((best, m) => {
    return (RATING_ORDER[m.rating] || 0) > (RATING_ORDER[best] || 0) ? m.rating : best;
  }, models[0]?.rating);
}

function PromptCard({ entry, index }) {
  const [open, setOpen] = useState(false);
  const localBest = bestRating(entry.local);
  const cloudBest = bestRating(entry.cloud);
  const localScore = RATING_ORDER[localBest] || 0;
  const cloudScore = RATING_ORDER[cloudBest] || 0;
  const winner = localScore > cloudScore ? 'local' : cloudScore > localScore ? 'cloud' : 'tie';

  return (
    <div className={styles.promptCard + (open ? ' ' + styles.promptCardOpen : '')}>
      <button className={styles.promptHeader} onClick={() => setOpen(!open)} aria-expanded={open}>
        <div className={styles.promptMeta}>
          <span className={styles.promptIndex}>#{String(index + 1).padStart(2, '0')}</span>
          <span className={styles.promptText}>{entry.prompt}</span>
        </div>
        <div className={styles.promptSummary}>
          <span className={styles.sideCount}>🖥 {entry.local.length}</span>
          <span className={styles.vs}>vs</span>
          <span className={styles.sideCount}>☁️ {entry.cloud.length}</span>
          {winner === 'local' && <span className={styles.winnerTag}>🖥 wins</span>}
          {winner === 'cloud' && <span className={styles.winnerTag}>☁️ wins</span>}
          {winner === 'tie' && <span className={styles.tieTag}>Tie</span>}
          <span className={styles.chevron + (open ? ' ' + styles.chevronOpen : '')}>▾</span>
        </div>
      </button>

      {open && (
        <div className={styles.panelsGrid}>
          <ModelColumn side="local" models={entry.local} />
          <ModelColumn side="cloud" models={entry.cloud} />
        </div>
      )}
    </div>
  );
}

export default function Research() {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Excellent', 'Good', 'Okay', 'Poor'];

  const filtered = filter === 'All'
    ? PROMPTS
    : PROMPTS.filter((p) =>
        p.local.some((m) => m.rating === filter) ||
        p.cloud.some((m) => m.rating === filter)
      );

  const allModels = (side) => PROMPTS.flatMap((p) => p[side]);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.pageHeader}>
          <p className={styles.sectionTag}>Research</p>
          <h1 className={styles.pageTitle}>Prompt Comparisons</h1>
          <p className={styles.pageSub}>
            Each prompt was tested across multiple local and cloud-hosted models.
            Click any prompt to expand and compare results side by side.
          </p>
        </div>

        <div className={styles.legend}>
          <div className={styles.legendItem}><span className={styles.legendDotLocal} />🖥 Local AI</div>
          <div className={styles.legendItem}><span className={styles.legendDotCloud} />☁️ Cloud AI</div>
        </div>

        <div className={styles.filters}>
          <span className={styles.filterLabel}>Filter by rating:</span>
          {filters.map((f) => (
            <button key={f} className={styles.filterBtn + (filter === f ? ' ' + styles.filterActive : '')} onClick={() => setFilter(f)}>
              {f}
            </button>
          ))}
        </div>

        <div className={styles.promptList}>
          {filtered.length === 0 && <p className={styles.empty}>No prompts match this filter.</p>}
          {filtered.map((entry, i) => <PromptCard key={entry.id} entry={entry} index={i} />)}
        </div>

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
                      <span key={r} className={styles.summaryBadge + ' ' + styles['rating' + r]}>{count}× {r}</span>
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
