import React from 'react'
import './Skill.scss'
import JSLogo from '../../assets/javascript-logo.svg';
import TSLogo from '../../assets/typescript-logo.svg';
import HTMLLogo from '../../assets/html-logo.svg';
import CSSLogo from '../../assets/css-logo.svg';
import ReactLogo from '../../assets/react-logo.svg';
import ReactNativeLogo from '../../assets/react-native-logo.svg';
import ReduxLogo from '../../assets/redux-logo.svg';
import ReduxSagaLogo from '../../assets/redux-saga-logo.svg';
import GitLogo from '../../assets/git-logo.svg';
import VueLogo from '../../assets/vue-logo.svg';
import GraphqlLogo from '../../assets/graphql-logo.svg';

const Skill = () => {
  return (
    <div id="skill-section" className="section-wrapper">
      <span className="section-title">SKILLS</span>
      <div className="list-logo">
        <img src={JSLogo} alt="js-logo" width={160} height={160} />
        <img src={TSLogo} alt="ts-logo" width={160} height={160} />
        <img src={HTMLLogo} alt="html-logo" width={160} height={160} />
        <img src={CSSLogo} alt="css-logo" width={160} height={160} />
        <img src={ReactNativeLogo} alt="react-logo" width={160} height={160} />
        <img src={ReactLogo} alt="react-logo" width={160} height={160} />
        <img src={ReduxLogo} alt="redux-logo" width={160} height={160} />
        <img src={ReduxSagaLogo} alt="redux-logo" width={160} height={160} />
        <img src={GitLogo} alt="git-logo" width={160} height={160} />
        <img src={VueLogo} alt="vue-logo" width={160} height={160} />
        <img src={GraphqlLogo} alt="graphql-logo" width={160} height={160} />
      </div>
    </div>
  )
}

export default Skill