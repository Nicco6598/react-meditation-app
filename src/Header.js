import React from 'react';
import imageName from './Slider1.jpg';

const Header = () => {
  return (
    <div className="header">
      <img src={imageName} alt="Header" className="header-image" />
      <div className="header-content">
        <h1>Benvenuto nel nostro Sito</h1>
        <p>Scopri la tranquillità attraverso la meditazione e la consapevolezza.</p>
        <button className="cta-button">Inizia la Meditazione</button>
      </div>
    </div>
  );
};

export default Header;
