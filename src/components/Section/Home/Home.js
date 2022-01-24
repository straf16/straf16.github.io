import React from 'react'
import SocialButton from '../../SocialButton/SocialButton'

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontSize: '14px',
    color: '#000000'
  },
  textHighlight: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#1D9BF0'
  }
}

const Home = () => {
  return (
    <div style={styles.wrapper}>
      <SocialButton />
      <p style={styles.text}>
        A passionate <span style={styles.textHighlight}>web developer</span> with experience in ReactJS,
        building single-page apps and responsive website design.
      </p>
    </div>
  )
}

export default Home