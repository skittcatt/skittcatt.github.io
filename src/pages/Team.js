import React from 'react';
import styles from './Team.module.css';

const TEAM = [
  {
    initials: 'AB',
    name: 'Alice Brown',
    role: 'Lead Researcher',
    bio: 'Describe this person's background, expertise, and what they contribute to the project. Keep it punchy and specific.',
    links: { github: '#', linkedin: '#' },
  },
  {
    initials: 'CG',
    name: 'Carlos García',
    role: 'Systems Engineer',
    bio: 'What does this engineer focus on? Hardware, software, integration? One to two sentences that tell the reader exactly what they need to know.',
    links: { github: '#', linkedin: '#' },
  },
  {
    initials: 'MK',
    name: 'Maya Kato',
    role: 'Data & Analysis',
    bio: 'This person handles measurement, evaluation, and statistical work. Describe the kinds of problems they tackle and tools they use.',
    links: { github: '#', linkedin: '#' },
  },
  {
    initials: 'JS',
    name: 'James Singh',
    role: 'Prototyping',
    bio: 'The builder. Describe their prototyping philosophy, materials or tools they prefer, and what they've shipped as part of this project.',
    links: { github: '#' },
  },
];

export default function Team() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.pageHeader}>
          <p className={styles.sectionTag}>The Team</p>
          <h1 className={styles.pageTitle}>Who's behind it</h1>
          <p className={styles.pageSub}>
            A small, focused group with complementary skills. Replace these placeholder
            profiles with real bios and headshots.
          </p>
        </div>

        <div className={styles.teamGrid}>
          {TEAM.map((member) => (
            <div key={member.name} className={styles.memberCard}>
              <div className={styles.avatar}>{member.initials}</div>
              <div className={styles.memberInfo}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberRole}>{member.role}</p>
                <p className={styles.memberBio}>{member.bio}</p>
                <div className={styles.memberLinks}>
                  {member.links.github && (
                    <a
                      href={member.links.github}
                      className={styles.memberLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                  {member.links.linkedin && (
                    <a
                      href={member.links.linkedin}
                      className={styles.memberLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.joinSection}>
          <div className={styles.joinCard}>
            <p className={styles.sectionTag}>Open Roles</p>
            <h2 className={styles.joinTitle}>Work with us</h2>
            <p className={styles.joinBody}>
              Are you an engineer or researcher who wants to contribute? Describe what
              kind of collaborators you're looking for and how they can reach out.
            </p>
            <a href="/#/contact" className={styles.joinCta}>
              Get in Touch →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
