import React, { useState } from 'react';
import styles from './Contact.module.css';

const CONTACTS = [
  { label: 'Email', value: 'hello@yourproject.com', href: 'mailto:hello@yourproject.com' },
  { label: 'GitHub', value: 'github.com/yourorg', href: 'https://github.com' },
  { label: 'Location', value: 'Your City, Country', href: null },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire up to your preferred backend/form service:
    // Formspree:  https://formspree.io
    // EmailJS:    https://www.emailjs.com
    // Netlify Forms, etc.
    console.log('Form submitted:', form);
    setSent(true);
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.layout}>
          {/* Left */}
          <div className={styles.left}>
            <p className={styles.sectionTag}>Contact</p>
            <h1 className={styles.pageTitle}>Let's talk</h1>
            <p className={styles.pageSub}>
              Whether you want to collaborate, ask a technical question, or just
              learn more about the project — reach out.
            </p>

            <div className={styles.contactList}>
              {CONTACTS.map(({ label, value, href }) => (
                <div key={label} className={styles.contactItem}>
                  <span className={styles.contactLabel}>{label}</span>
                  {href ? (
                    <a
                      href={href}
                      className={styles.contactValue}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className={styles.contactValue}>{value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className={styles.right}>
            {sent ? (
              <div className={styles.successBox}>
                <span className={styles.successIcon}>✓</span>
                <h3 className={styles.successTitle}>Message sent</h3>
                <p className={styles.successBody}>
                  We'll get back to you as soon as we can.
                </p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className={styles.input}
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={styles.input}
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className={styles.textarea}
                    placeholder="What's on your mind?"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className={styles.submitBtn}>
                  Send message
                </button>
                <p className={styles.formNote}>
                  Or wire up Formspree / EmailJS — see comment in Contact.js
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
