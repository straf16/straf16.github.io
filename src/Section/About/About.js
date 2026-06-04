import React from 'react'
import './About.scss'

const About = () => {
    const stats = [
        { number: '5+', label: 'Years Experience' },
        { number: '10+', label: 'Projects Built' },
        { number: '5+', label: 'Technologies' },
    ]

    return (
        <section id="about-section" className="section-wrapper">
            <span className="section-label">About Me</span>
            <h2 className="section-title">Get to Know Me</h2>
            <div className="about-content container">
                <div className="about-text">
                    <p className="about-description">
                        I'm a passionate <strong>Frontend Developer</strong> based in Indonesia
                        with a strong focus on building modern, performant, and user-friendly web applications.
                    </p>
                    <p className="about-description">
                        With experience in companies like <strong>Blue Bird Group</strong> and{' '}
                        <strong>ADIRA Finance</strong>, I've worked on projects ranging from
                        micro-frontend architectures to full-stack web platforms. I specialize in{' '}
                        <strong>React.js</strong>, <strong>React Native</strong>, <strong>Next.js</strong>
                        , and <strong>TypeScript</strong>.
                    </p>
                    <p className="about-description">
                        Currently pursuing an <strong>Information Systems</strong> degree at Binus University,
                        I'm always eager to learn and explore new technologies. Outside of coding, I enjoy
                        staying active through training and running, and also exploring my hobbies, like brewing coffee.
                    </p>
                </div>
                <div className="about-stats">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-card glass-card">
                            <span className="stat-number gradient-text">{stat.number}</span>
                            <span className="stat-label">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About
