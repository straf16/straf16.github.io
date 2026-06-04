import React from 'react'
import './Footer.scss'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="footer-content">
                <span className="footer-copyright">
                    © {currentYear} Fadil. All rights reserved.
                </span>
                <span className="footer-built">
                    Built with <span className="footer-heart">♥</span> using React
                </span>
            </div>
        </footer>
    )
}

export default Footer
