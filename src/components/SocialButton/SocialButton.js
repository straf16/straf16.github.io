import React from 'react'
import './SocialButton.scss'
import githubIcon from '../../assets/github.png'
import linkedinIcon from '../../assets/linkedin.png'

const SocialButton = ({ size = 28 }) => {
  return (
    <div className='social-icon-wrapper'>
      <a
        href="https://github.com/straf16"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        aria-label="GitHub"
      >
        <img className="social-icon" src={githubIcon} height={size} width={size} alt="GitHub" />
      </a>
      <a
        href="http://www.linkedin.com/in/ahmadfadilah"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        aria-label="LinkedIn"
      >
        <img className="social-icon" src={linkedinIcon} height={size} width={size} alt="LinkedIn" />
      </a>
    </div>
  )
}

export default SocialButton