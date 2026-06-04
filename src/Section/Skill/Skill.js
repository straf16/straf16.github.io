import React from 'react'
import './Skill.scss'
import HTMLLogo from '../../assets/html-logo.png'
import CSSLogo from '../../assets/css-logo.png'
import ReactLogo from '../../assets/react-logo.png'
import ReactNativeLogo from '../../assets/react-native-logo.svg'
import ReduxLogo from '../../assets/redux-logo.png'
import GitLogo from '../../assets/git-logo.png'
import TSLogo from '../../assets/ts-logo.png'
import JSLogo from '../../assets/js-logo.png'
import VueLogo from '../../assets/vue-logo.png'
import RestLogo from '../../assets/restapi-logo.png'
import GraphqlLogo from '../../assets/graphql-logo.png'
import NestLogo from '../../assets/nestjs-logo.png'

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', icon: HTMLLogo },
      { name: 'CSS', icon: CSSLogo },
      { name: 'JavaScript', icon: JSLogo },
      { name: 'TypeScript', icon: TSLogo },
      { name: 'React', icon: ReactLogo },
      { name: 'Redux', icon: ReduxLogo },
      { name: 'React Native', icon: ReactNativeLogo },
      { name: 'Vue.js', icon: VueLogo },
    ],
  },
  {
    title: 'Backend & API',
    skills: [
      { name: 'REST API', icon: RestLogo },
      { name: 'GraphQL', icon: GraphqlLogo },
      { name: 'NestJS', icon: NestLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: GitLogo },
    ],
  },
]

const Skill = () => {
  return (
    <section id="skill-section" className="section-wrapper">
      <span className="section-label">What I Do</span>
      <h2 className="section-title">Skills & Technologies</h2>
      <p className="section-subtitle">
        Technologies and tools I use to bring ideas to life
      </p>
      <div className="skills-container container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="skill-category-title">{category.title}</h3>
            <div className="skill-grid">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item glass-card">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="skill-icon"
                    loading="lazy"
                  />
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skill