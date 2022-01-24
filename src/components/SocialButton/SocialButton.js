import React from 'react'
import './SocialButton.css'
import githubIcon from '../../assets/github.png'
import linkedinIcon from '../../assets/linkedin.png'
import whatsappIcon from '../../assets/whatsapp.png'

const SocialButton = () => {
  return (
    <div className='icon-wrapper'>
      <img src={githubIcon} height={25} width={25} alt="github-icon" />
      <img src={linkedinIcon} height={25} width={25} alt="github-icon" />
      <img src={whatsappIcon} height={25} width={25} alt="github-icon" />
    </div>
  )
}

export default SocialButton