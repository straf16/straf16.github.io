import React from 'react'
import './Journey.scss'
import JobIcon from '../../assets/job-icon.svg'
import SchoolIcon from '../../assets/school-icon.svg'

const workExperience = [
  {
    title: 'Frontend Developer',
    period: 'Mei 2024 - Present',
    company: 'ADIRA Finance (formerly Mandala Multifinance)',
    icon: JobIcon,
    descriptions: [
      'Upgraded React Native version from 0.65.3 to 0.74.5 on MPowerMobile, improving performance and stability across iOS and Android.',
      'Revamped MPower App using Expo SDK 53, updating React & React Native versions and upgrading Google API level to 35.',
      'Implemented reusable components in MPower Mobile, reducing development time and debugging effort.',
      'Revamped Absen, Cuti, and Izin modules in MPower Mobile, integrating with the new HR management system (Peoplesoft API) to streamline approval processes.',
      'Implemented root/jailbreak detector and anti-fake GPS features to address penetration test findings.',
    ]
  },
  {
    title: 'Frontend Developer',
    period: 'Mar 2022 – Feb 2024',
    company: 'Blue Bird Group',
    icon: JobIcon,
    descriptions: [
      'Created KitBird Frontend UI Library that provides reusable component for UI Dashboard',
      'Implemented pre-commit husky to prevent common mistakes and shorten review process',
      'Implemented micro frontend for reservation website for faster deployment',
      'Built Access Control List (ACL) in GoldenBird Dashboard to manage user access by role',
      'Implemented Verdaccio as a private package library for micro frontend modules',
    ],
  },
  {
    title: 'Full Stack Engineer',
    period: 'Apr 2020 – Nov 2021',
    company: 'CUMI Marketplace',
    icon: JobIcon,
    descriptions: [
      'Implemented new design on login and registration page improving user experience',
      'Migrated PHP website into responsive single page app using ReactJS',
      'Built item snapshot page integrated into inquiry for checkout data',
      'Created help center page with popular articles for common user questions',
      'Built shipping label with AnterAja delivery integration',
    ],
  },
]

const education = [
  {
    title: 'Undergraduate Student',
    period: 'Nov 2023 – Present',
    company: 'Binus University — Jakarta',
    course: 'Information Systems',
    icon: SchoolIcon,
  },
  {
    title: 'Coding Bootcamp',
    period: 'Jul 2019 – Dec 2019',
    company: 'Hacktiv8 — Jakarta',
    course: 'Full Stack Javascript Immersive',
    icon: SchoolIcon,
  },
  {
    title: 'High School Diploma',
    period: 'Jul 2015 – May 2018',
    company: 'SMAN 2 Depok — Jakarta',
    course: 'Social Sciences',
    icon: SchoolIcon,
  },
]

const Journey = () => {
  return (
    <section id="journey-section" className="section-wrapper">
      <span className="section-label">My Path</span>
      <h2 className="section-title">Experience & Education</h2>
      <p className="section-subtitle">
        My professional journey in the tech industry
      </p>

      <div className="journey-container container">
        {/* Work Experience */}
        <div className="journey-group">
          <h3 className="journey-group-title">
            <span className="gradient-text">Work Experience</span>
          </h3>
          <div className="timeline">
            {workExperience.map((job, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                  <div className="timeline-dot">
                    <img src={job.icon} alt="" className="timeline-icon" />
                  </div>
                  {index < workExperience.length - 1 && <div className="timeline-line" />}
                </div>
                <div className="timeline-content glass-card">
                  <span className="timeline-period">{job.period}</span>
                  <h4 className="timeline-title">{job.title}</h4>
                  <span className="timeline-company">{job.company}</span>
                  {job.descriptions && (
                    <ul className="timeline-list">
                      {job.descriptions.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="journey-group">
          <h3 className="journey-group-title">
            <span className="gradient-text">Education</span>
          </h3>
          <div className="timeline">
            {education.map((edu, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                  <div className="timeline-dot">
                    <img src={edu.icon} alt="" className="timeline-icon" />
                  </div>
                  {index < education.length - 1 && <div className="timeline-line" />}
                </div>
                <div className="timeline-content glass-card">
                  <span className="timeline-period">{edu.period}</span>
                  <h4 className="timeline-title">{edu.title}</h4>
                  <span className="timeline-company">{edu.company}</span>
                  {edu.course && (
                    <span className="timeline-course">{edu.course}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Journey
