import './App.css'; // Aggiungi gli stili CSS appropriati
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useState, useRef } from 'react';
import imageName from './Slider1.jpg';
import slider2 from './Slider2.jpg';
import logo from './Logo.png';
import post1 from './Post1.jpg';
import post2 from './Post2.jpg';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <SectionWithTextOnLeft />
      <SectionWithTextOnRight />
      <BlogPosts />
      <Timer />
      <AboutUsWithNewsletter />
      <Footer />
    </div>
  );
}

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
      <img src={logo} alt="logo sito" />
      </div>
      <ul className="nav-links">
        <li><a href="#blog">Blog</a></li>
        <li><a href="#timer">Timer</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
};

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


const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [initialTime, setInitialTime] = useState(0);
  const inputRef = useRef(null);

  const toggleTimer = () => {
    if (!isActive) {
      setIsActive(true);
      setIsPaused(false);

      if (inputRef.current) {
        const secondsInput = parseInt(inputRef.current.value, 10);
        setSeconds(secondsInput || 0);
        setInitialTime(secondsInput || 0);
      }
    } else {
      setIsPaused(!isPaused);
    }
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsPaused(false);
    setSeconds(initialTime);
  };

  const tick = () => {
    if (isActive && !isPaused && seconds > 0) {
      setSeconds((prevSeconds) => prevSeconds - 1);
    } else if (isActive && !isPaused && seconds === 0) {
      setIsActive(false);
      alert('Timer scaduto!');
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    return `${String(minutes).padStart(2, '0')} Minuti e ${String(remainingSeconds).padStart(2, '0')} Secondi`;
  };

  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  }, [isActive, isPaused, seconds]);

  return (
    <div className="timer">
      <p>{formatTime(seconds)}</p>
      <input ref={inputRef} type="number" placeholder="Inserisci i secondi" />
      <div id="timer">
        <button onClick={toggleTimer}>
          {isActive ? (isPaused ? 'Riprendi' : 'Pausa') : 'Avvia'}
        </button>
        <button onClick={resetTimer}>Resetta</button>
      </div>
    </div>
  );
};

const BlogPosts = () => {
  const posts = [
    {
      id: 1,
      image: imageName,
      title: 'Meditare in silenzio',
      description: 'La sensazione di pace del momento',
    },
    {
      id: 2,
      image: slider2,
      title: 'Meditare in solitudine',
      description: 'I vantaggi del effetuarlo da soli',
    },
    {
      id: 3,
      image: imageName,
      title: 'Meditare in silenzio',
      description: 'La sensazione di pace del momento',
    },
    {
      id: 4,
      image: slider2,
      title: 'Meditare in solitudine',
      description: 'I vantaggi del effetuarlo da soli',
    },
    // Aggiungi più post se necessario
  ];

  return (
    <section className="blog-section">
      {posts.map((post) => (
        <div key={post.id} className="blog-card" id="blog">
          <img src={post.image} alt={`Post ${post.id}`} className="blog-image" />
          <div className="blog-content">
            <h3 className="blog-title">{post.title}</h3>
            <p className="blog-description">{post.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

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

// Nuova sezione con testo a destra e immagine a sinistra
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
        <p>&copy; 2023 MediationField. Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
};

export default App;