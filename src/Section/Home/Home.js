import React from 'react'
import './Home.scss'
import SocialButton from '../../components/SocialButton/SocialButton'
import photoProfile from '../../assets/fadil.png'

const Home = () => {
  return (
    <section id="home-section" className="section-wrapper hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-greeting">Hi there! 👋</span>
          <h1 className="hero-name">
            I'm <span className="gradient-text">Fadil</span>
          </h1>
          <h2 className="hero-role">Frontend Developer</h2>
          <p className="hero-description">
            A passionate web developer based in Indonesia
            with over <strong>5 years</strong> of experience building
            performant, responsive web applications with{' '}
            <strong>React.js</strong> and <strong>Next.js</strong>.
          </p>
          <div className="hero-actions">
            <a href="#projects-section" className="button button-primary">
              View Projects
            </a>
            <a href="#contact-section" className="button button-outline">
              Contact Me
            </a>
          </div>
          <div className="hero-social">
            <SocialButton size={22} />
          </div>
        </div>
        <div className="hero-photo-wrapper">
          <div className="hero-photo-ring">
            <img
              className="hero-photo"
              src={photoProfile}
              alt="Fadil — Frontend Developer"
              loading="lazy"
            />
          </div>
          <div className="hero-photo-glow" />
        </div>
      </div>
    </section>
  )
}

export default Home