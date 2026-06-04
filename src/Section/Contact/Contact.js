import React from 'react'
import './Contact.scss'
import SocialButton from '../../components/SocialButton/SocialButton'

const Contact = () => {
  return (
    <section id="contact-section" className="section-wrapper">
      <span className="section-label">Get In Touch</span>
      <h2 className="section-title">Let's Work Together</h2>
      <p className="section-subtitle">
        I'm currently open for opportunities. Whether you have a project in mind
        or just want to say hi, feel free to reach out!
      </p>

      <div className="contact-content container">
        <div className="contact-info">
          <div className="contact-item glass-card">
            <div className="contact-item-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div>
              <h4 className="contact-item-label">Email</h4>
              <a href="mailto:ahmad.fadildp@gmail.com" className="contact-item-value">
                ahmad.fadildp@gmail.com
              </a>
            </div>
          </div>
          <div className="contact-item glass-card">
            <div className="contact-item-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <h4 className="contact-item-label">Location</h4>
              <span className="contact-item-value">Jakarta, Indonesia</span>
            </div>
          </div>
          <div className="contact-item glass-card">
            <div className="contact-item-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>
            <div>
              <h4 className="contact-item-label">Social</h4>
              <SocialButton size={20} />
            </div>
          </div>
        </div>

        <form className="contact-form glass-card" onSubmit={(e) => e.preventDefault()}>
          <h3 className="contact-form-title">Send a Message</h3>
          <div className="form-group">
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <input type="text" id="subject" name="subject" placeholder="Subject" />
          </div>
          <div className="form-group">
            <textarea id="message" name="message" rows={5} placeholder="Your Message" required />
          </div>
          <button type="submit" className="button button-primary contact-submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
