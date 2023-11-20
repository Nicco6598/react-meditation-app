import './App.css'; // Aggiungi gli stili CSS appropriati
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useState, useEffect } from 'react';


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
      <div className="logo">Logo</div>
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
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <header className="header-slider">
      <Slider {...sliderSettings}>
        <div>
          <img src='/react-meditation-app/images/Slider1.jpg' alt="Slider 1" />
        </div>
        <div>
          <img src="url_dell_immagine_2" alt="Slider 2" />
        </div>
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
      image: '/react-meditation-app/public/Slider1.jpg',
      title: 'Meditare in aree verdi',
      description: 'Breve descrizione del post 1.',
    },
    {
      id: 2,
      image: 'url_dell_immagine_2',
      title: 'Titolo Post 2',
      description: 'Breve descrizione del post 2.',
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
    <footer>
      {/* Aggiungi i tuoi contenuti del footer */}
      <div className="footer">Footer</div>
    </footer>
  );
};

export default App;