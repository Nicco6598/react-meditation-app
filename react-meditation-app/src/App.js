import './App.css'; // Aggiungi gli stili CSS appropriati
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useState, useEffect } from 'react';
import imageName from './Slider1.jpg';
import slider2 from './Slider2.jpg';
import logo from './Logo.png'


function App() {
  return (
    <div className="App">
      <Navbar />
      <HeaderSlider />
      <Timer />
      <BlogPosts />
      <Footer />
    </div>
  );
}

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
      <img src={logo} alt="Slider 2" />
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#timer">Timer</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
};

const HeaderSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <header className="header-slider">
      <Slider {...sliderSettings}>
        <div>
          <img src={imageName} alt="Slider 1" />
          <div className={`slide-text ${currentSlide === 0 ? 'visible' : ''}`}>
            <h2>Benvenuto nel nostro Sito di Meditazione</h2>
            <p>Scopri la pace interiore attraverso la meditazione guidata.</p>
          </div>
        </div>
        <div>
          <img src={slider2} alt="Slider 2" />
          <div className={`slide-text ${currentSlide === 1 ? 'visible' : ''}`}>
            <h2>Connetti la tua Mente, Corpo e Spirito</h2>
            <p>Esplora i benefici della meditazione per una vita equilibrata.</p>
          </div>
        </div>
        {/* Aggiungi più slide con testo se necessario */}
      </Slider>
    </header>
  );
};


const Timer = () => {
  const [inputSeconds, setInputSeconds] = useState('');
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const startPauseTimer = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const stopTimer = () => {
    setIsActive(false);
    setSeconds(0);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(inputSeconds);
    setInputSeconds('');
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setInputSeconds(value);
  };

  return (
    <div className="timer">
      <p>Timer: {Math.floor(seconds / 60)} min {seconds % 60} sec</p>
      <div>
        <input
          type="number"
          placeholder="Inserisci i secondi"
          value={inputSeconds}
          onChange={handleInputChange}
        />
        <button onClick={startPauseTimer}>{isActive ? 'Pausa' : 'Avvia'}</button>
        <button onClick={resetTimer}>Imposta</button>
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
        <div key={post.id} className="blog-card">
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

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Mappa del Sito</h4>
          {/* Aggiungi la mappa del sito o i link della mappa del sito */}
        </div>
        <div className="footer-section">
          <input type="text" placeholder="Cerca..." />
          <button>Cerca</button>
        </div>
        <div className="footer-section">
          <h4>Seguici</h4>
          {/* Aggiungi i tuoi social icons/link qui */}
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