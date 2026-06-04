import React, { useState, useEffect } from 'react'
import './Header.scss'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  const navItems = [
    { label: 'Home', href: '#home-section' },
    { label: 'About', href: '#about-section' },
    { label: 'Skills', href: '#skill-section' },
    { label: 'Projects', href: '#projects-section' },
    { label: 'Experience', href: '#journey-section' },
    { label: 'Contact', href: '#contact-section' },
  ]

  return (
    <header className={`header-wrapper ${scrolled ? 'header-scrolled' : ''}`}>
      <a href="#home-section" className="header-logo">
        F<span className="logo-dot">.</span>
      </a>
      <nav className={`header-nav ${menuOpen ? 'nav-open' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="nav-link"
            onClick={closeMenu}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <button
        className={`hamburger ${menuOpen ? 'hamburger-active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span className="hamburger-line" />
        <span className="hamburger-line" />
        <span className="hamburger-line" />
      </button>
      {menuOpen && <div className="nav-overlay" onClick={closeMenu} />}
    </header>
  )
}

export default Header