import React from 'react';

const Footer = () => {
    return (
      <footer className="footer">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"></link>
        <div className="footer-content">
          <div className="footer-section">
            <h4>Mappa del Sito</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#timer">Timer</a></li>
              <li><a href="#about">Chi Siamo</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Seguici</h4>
            <div className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2024 MediationField. Tutti i diritti riservati.</p>
        </div>
      </footer>
    );
};

export default Footer;
