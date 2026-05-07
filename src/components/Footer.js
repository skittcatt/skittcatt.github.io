import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.logoMark}>R&amp;D</span>
          <p className={styles.tagline}>Engineering the future, one iteration at a time.</p>
        </div>
        <nav className={styles.links}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/research">Research</NavLink>
          <NavLink to="/team">Team</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <p className={styles.copy}>© {new Date().getFullYear()} ProjectName. All rights reserved.</p>
      </div>
    </footer>
  );
}
