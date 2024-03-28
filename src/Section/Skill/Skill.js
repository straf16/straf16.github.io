import React from 'react'
import './Skill.scss'
import HTMLLogo from '../../assets/html-logo.png';
import CSSLogo from '../../assets/css-logo.png';
import ReactLogo from '../../assets/react-logo.png';
import ReduxLogo from '../../assets/redux-logo.png';
import GitLogo from '../../assets/git-logo.png';
import TSLogo from '../../assets/ts-logo.png';
import JSLogo from '../../assets/js-logo.png';
import VueLogo from '../../assets/vue-logo.png';
import RestLogo from '../../assets/restapi-logo.png';
import GraphqlLogo from '../../assets/graphql-logo.png';

const Skill = () => {
  return (
    <div id="skill-section" className="skill-wrapper">
      <span className="section-title">SKILLS</span>
      <div className="list-logo">
        <img src={HTMLLogo} alt="html-logo" width={160} height={160} />
        <img src={CSSLogo} alt="css-logo" width={160} height={160} />
        <img src={ReactLogo} alt="react-logo" width={160} height={160} />
        <img src={ReduxLogo} alt="redux-logo" width={160} height={160} />
        <img src={GitLogo} alt="git-logo" width={160} height={160} />
        <img src={TSLogo} alt="ts-logo" width={160} height={160} />
        <img src={JSLogo} alt="js-logo" width={160} height={160} />
        <img src={VueLogo} alt="vue-logo" width={160} height={160} />
        <img src={RestLogo} alt="rest-logo" width={160} height={160} />
        <img src={GraphqlLogo} alt="graphql-logo" width={160} height={160} />
      </div>
    </div>
  )
}

export default Skill