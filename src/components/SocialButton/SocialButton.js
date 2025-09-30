import React from 'react'
import './SocialButton.scss'
import githubIcon from '../../assets/github.png'
import linkedinIcon from '../../assets/linkedin.png'

const SocialButton = () => {
  return (
    <div className='icon-wrapper'>
      <a href="https://github.com/straf16">
        <img
          id="github-icon"
          alt="github-icon"
          className="social-icon"
          src={githubIcon}
          height={25}
          width={25}
        />
      </a>
      <a href="https://linkedin.com/in/ahmadfadilah">
        <img
          id="linkedin-icon"
          alt="linkedin-icon"
          className="social-icon"
          src={linkedinIcon}
          height={25}
          width={25}
        />
      </a>
    </div>
  )
}

export default SocialButton