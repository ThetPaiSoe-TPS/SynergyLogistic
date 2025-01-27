import React from 'react';
import './Footer.css';
import { logos } from '../assets/images';  // Import logos object

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img 
            src={logos.synergy}  // Use synergy logo from logos object
            alt="Synergy Logistics" 
            className="footer-logo" 
          />
          <div className="footer-address">
            <div className="footer-info">
              <h3>Synergy Headquarters</h3>
              <p>345 Plato Blvd E</p>
              <p>Saint Paul, MN</p>
              <p>55107</p>
              <p className="phone">612.623.1200</p>
            </div>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-buttons">
            <a href="/contact" className="footer-button">Contact Us</a>
            <a href="/quote" className="footer-button">Get A Quote</a>
            <a href="/careers" className="footer-button">Careers</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <div className="footer-copyright">
            © 2025 Synergy Logistics |
            <a href="/privacy"> Privacy Policy</a> |
            <a href="/accessibility"> Accessibility Policy</a> |
            <a href="/credits"> Site Credits</a>
          </div>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 