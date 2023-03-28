import React from 'react'
import './SocialButton.scss'
import githubIcon from '../../assets/github.png'
import linkedinIcon from '../../assets/linkedin.png'

const SocialButton = () => {
  return (
    <div className='icon-wrapper'>
      <img id="github-icon" className="social-icon" src={githubIcon} height={25} width={25} alt="github-icon" />
      <img id="linkedin-icon" className="social-icon" src={linkedinIcon} height={25} width={25} alt="linkedin-icon" />
    </div>
  )
}

export default SocialButton