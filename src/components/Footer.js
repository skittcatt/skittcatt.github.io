import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.logoMark}>2025-2026 R&amp;D</span>
          <p className={styles.tagline}>Exploring Energy Use of AI in Practical Scenarios</p>
        </div>
        <nav className={styles.links}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/research">Research</NavLink>
          <NavLink to="/team">Team</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <p className={styles.copy}>© {new Date().getFullYear()} Exploring Energy Use of AI in Practical Scenarios. All rights reserved.</p>
      </div>
    </footer>
  );
}
