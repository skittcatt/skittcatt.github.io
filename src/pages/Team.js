import React from 'react';
import styles from './Team.module.css';

const TEAM = [
  {
    initials: 'RM',
    name: 'Rochelle Mitchell',
    studentID: '21141960',
    role: 'Project Lead',
    bio: 'Cybersecurity and Networks Student'
  },
  {
    initials: 'FK',
    name: 'Falatugatuga Kerslake',
    studentID: '22181971',
    role: 'Cloud-Based AI Technical Tester and Researcher',
    bio: 'Cybersecurity and Networks Student'
  },
  {
    initials: 'RJ',
    name: 'Rashed Jasem',
    studentID: '23180352',
    role: 'Local-Based AI Technical Tester and Researcher',
    bio: 'Cybersecurity and Networks Student'
  },
  {
    initials: 'IS',
    name: 'Ibrahim Sarver',
    studentID: '20113140',
    role: 'Local-Based AI Technical Tester and Researcher',
    bio: 'Cybersecurity and Networks Student'
  },
  {
    initials: 'JJ',
    name: 'Jack Jenden',
    studentID: '24237621',
    role: 'Cloud-Based AI Technical Tester and Researcher',
    bio: 'Cybersecurity and Networks Student'
  },
  {
    initials: 'SG',
    name: 'Sainaren Gudipoodi ',
    studentID: '21139006',
    role: 'Data Analyst and Assistant Researcher',
    bio: 'Data Science Student'
  },
  {
    initials: 'NS',
    name: 'Dr. Nurul I. Sarkar',
    role: 'Client',
    bio: 'Professor of Engineering, Computer and Mathematical Sciences at AUT'
  },
  {
    initials: 'MLY',
    name: 'Dr. Mee Loong (Bobby) Yang',
    role: 'Project Mentor and Supervisor',
    bio: 'Senior Lecturer of Engineering, Computer and Mathematical Sciences at AUT'
  }
];

export default function Team() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.pageHeader}>
          <p className={styles.sectionTag}>The Team</p>
          <h1 className={styles.pageTitle}>Who's behind the Project</h1>
          <p className={styles.pageSub}>
            A team full of inspired and interested people behind exploring the energy usage of different AI.
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
                <p className={styles.memberBio}>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
