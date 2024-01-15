import React from 'react';
import post2 from './Post2.jpg';

const SectionWithTextOnLeft = () => {
    return (
      <div className="section">
        <div className="section-text">
          <h2>Oasi Interiore: Meditazione nel Silenzio del Deserto</h2>
          <p>Scopri la pace nel deserto con la nostra sezione di meditazione. 
            Una foto suggestiva cattura un momento di serenità mentre ti guidiamo attraverso sessioni che fondono la quiete del deserto con la tua pratica meditativa. 
            Trova l'oasi della calma interiore e rinnova la tua energia attraverso la meditazione in questo ambiente unico.</p>
        </div>
        <div className="section-image">
          <img src={post2} alt="Immagine Sezione" />
        </div>
      </div>
    );
};

export default SectionWithTextOnLeft;
