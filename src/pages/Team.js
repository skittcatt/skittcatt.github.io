import React from 'react';
import styles from './Team.module.css';

const TEAM = [
  {
    initials: 'RM',
    name: 'Rochelle Mitchell',
    studentID: '21141960',
    role: 'Lead Researcher',
    bio: 'TBA',
    links: { github: '#', linkedin: '#' },
  },
  {
    initials: 'FK',
    name: 'Falatugatuga Kerslake',
    studentID: '',
    role: 'TBA',
    bio: 'TBA',
    links: { github: '#', linkedin: '#' },
  },
  {
    initials: 'RJ',
    name: 'Rashed Jasem',
    studentID: '',
    role: 'TBA',
    bio: 'TBA',
    links: { github: '#', linkedin: '#' },
  },
  {
    initials: 'IS',
    name: 'Ibrahim Sarver',
    studentID: '',
    role: 'TBA',
    bio: 'TBA',
    links: { github: '#' },
  },
  {
    initials: 'JJ',
    name: 'Jack Jenden',
    studentID: '',
    role: 'TBA',
    bio: 'TBA'
  },
  {
    initials: 'SG',
    name: 'Sainaren Gudipoodi ',
    studentID: '',
    role: 'TBA',
    bio: 'TBA'
  },
  {
    name: 'Dr. Nurul Sakar',
    role: 'Client'
  },
  {
    name: 'Mee Loong (Bobby) Yang',
    role: 'Project Mentor and Supervisor'
  }
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
                <p className={styles.memberBio}>{member.studentID}</p>
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
