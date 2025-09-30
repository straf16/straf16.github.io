import React from 'react'
import './Home.scss'
import SocialButton from '../../components/SocialButton/SocialButton'
import arrow from '../../assets/arrow.png'
import photoProfile from '../../assets/fadil.png'

const Home = () => {
  return (
    <div id="home-section" className="section-wrapper">
      <div className="content">
        <div className="description">
          <span className="subtitle">Hi there!</span>
          <span className="title">I'm Fadil</span>
          <p className="text">
            <span className="highlight">Frontend Developer</span> with <span className="highlight">5+ years</span> of 
            experience building responsive, user-friendly web and mobile applications.
            Skilled in <span className="highlight">HTML</span>, <span className="highlight">CSS</span>,
            <span className="highlight">JavaScript</span>, <span className="highlight">React.js</span>,
            <span className="highlight">React Native</span>, and <span className="highlight">Next.js</span>,
            with strong focus on performance optimization and modern UI/UX best practices. Based
            in <span className="highlight">Jakarta, Indonesia</span>.
          </p>
          <div className="action">
            <button className="button">DOWNLOAD CV</button>
            <SocialButton />
          </div>
        </div>
        <div className="photo">
          <img className="photo-profile" src={photoProfile} height={420} width={370} alt="whatsapp-icon" />
        </div>
        <div className="scroll-down">
          <span className="scroll-down-text">scroll down</span>
          <img className="photo-profile" src={arrow} height={30} width={50} alt="arrow-down" />
        </div>
      </div>
    </div>
  )
}

export default Home