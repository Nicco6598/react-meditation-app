import React from 'react';
import post1 from './Post1.jpg';

const SectionWithTextOnRight = () => {
    return (
      <div className="section">
        <div className="section-image">
          <img src={post1} alt="Immagine Sezione" />
  
        </div>
        <div className="section-text">
          <h2>Serenità Domestica: Meditazione nel Tuo Rifugio</h2>
          <p>
          Esplora la pace nel comfort del tuo spazio con la nostra sessione di meditazione casalinga. 
          Attraverso immagini serene, ti guideremo in sessioni che trasformano la tua casa in un rifugio di calma e consapevolezza. 
          Sperimenta la serenità della meditazione in un contesto familiare, riscoprendo l'equilibrio interiore senza dover uscire dalle tue mura. 
          Connetti mente e spirito nel tuo spazio sicuro e trova la tranquillità quotidiana attraverso la meditazione.
          </p>
        </div>
      </div>
    );
};

export default SectionWithTextOnRight;
