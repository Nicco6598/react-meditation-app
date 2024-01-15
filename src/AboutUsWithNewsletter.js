import React from 'react';

const AboutUsWithNewsletter = () => {
    return (
      <div className="about-us-with-newsletter" id="about">
        <div className="about-us-content">
          <h2>Chi Siamo</h2>
          <p>
            Benvenuti nel nostro sito di meditazione! Siamo un team appassionato che si impegna a
            guidarti nel viaggio della consapevolezza e della tranquillità attraverso la pratica della meditazione.
          </p>
        </div>
        <div className="newsletter-form">
          <h2>Iscriviti alla Newsletter</h2>
          <p>Rimani aggiornato sulle ultime novità del blog.</p>
          <form>
            <input type="email" id="email" name="email" placeholder="Inserisci la tua email" required />
            <button type="submit">Iscriviti</button>
          </form>
        </div>
      </div>
    );
};

export default AboutUsWithNewsletter;
