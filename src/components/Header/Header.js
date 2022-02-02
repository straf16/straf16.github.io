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
    color: '#111111'
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
        <span style={styles.headerMenuItem}>HOME</span>
        <span style={styles.headerMenuItem}>SKILLS</span>
        <span style={styles.headerMenuItem}>JOURNEY</span>
        <span style={styles.headerMenuItem}>CONTACT</span>
      </div>
    </div>
  )
}

export default Header