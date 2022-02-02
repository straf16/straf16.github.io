import React from 'react'
import './Home.scss'
import SocialButton from '../../components/SocialButton/SocialButton'
import arrow from '../../assets/arrow.png'
import photoProfile from '../../assets/photoProfile.jpg'

const Home = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <div className="description">
          <span className="subtitle">Hi there!</span>
          <span className="title">I'm Fadil</span>
          <p className="text">
            A passionate <span className="highlight">web developer</span> with experience in ReactJS,
            building single-page apps and responsive website design.
          </p>
          <div className="action">
            <button className="button">DOWNLOAD CV</button>
            <SocialButton />
          </div>
        </div>
        <div className="photo">
          <img className="photo-profile" src={photoProfile} height={400} width={390} alt="whatsapp-icon" />
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