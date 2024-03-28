import React from 'react'
import './Home.scss'
import SocialButton from '../../components/SocialButton/SocialButton'
import arrow from '../../assets/arrow.png'
import photoProfile from '../../assets/fadil.png'

const Home = () => {
  return (
    <div id="home-section" className="home-wrapper">
      <div className="content">
        <div className="description">
          <span className="subtitle">Hi there!</span>
          <span className="title">I'm Fadil</span>
          <p className="text">
            A passionate <span className="highlight">web developer</span> based in Indonesia
            with over <span className="highlight">3 years</span> of experience.
            Proficient in <span className="highlight">Javascript, React.js, and Next.js </span>
            to build single-page apps and responsive web design.
          </p>
          <div className="action">
            <button className="button">DOWNLOAD CV</button>
            <SocialButton />
          </div>
        </div>
        <div className="photo">
          <img className="photo-profile" src={photoProfile} height={420} width={370} alt="whatsapp-icon" />
        </div>
      </div>
      <div className="scroll-down">
        <span className="scroll-down-text">scroll down</span>
        <img className="photo-profile" src={arrow} height={30} width={50} alt="arrow-down" />
      </div>
    </div>
  )
}

export default Home