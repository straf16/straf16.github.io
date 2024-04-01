import React from 'react'
import './Header.scss'

const styles = {
  logo: {
    fontWeight: 800,
    fontSize: '32px',
    color: '#111111'
  },
  headerMenu: {
    display: 'flex',
    flexDirection: 'row',
    gap: '24px'
  },
  headerMenuItem: {
    fontWeight: 600,
    fontSize: '16px',
    color: '#111111',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  headerMenuItemActive: {
    fontWeight: 'bold',
    fontSize: '16px',
    color: '#1D9BF0'
  }
}

const Header = () => {
  return (
    <div className="header-wrapper">
      <div style={styles.logo}>F.</div>
      <div className="header-menu">
        <a href="#home-section" style={styles.headerMenuItem}>HOME</a>
        <a href="#skill-section" style={styles.headerMenuItem}>SKILLS</a>
        <a href="#journey-section" style={styles.headerMenuItem}>JOURNEY</a>
        <a href="#contact-section" style={styles.headerMenuItem}>CONTACT</a>
      </div>
    </div>
  )
}

export default Header