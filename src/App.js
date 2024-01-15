import './App.css'; // Aggiungi gli stili CSS appropriati
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useState, useRef } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Timer from './Timer';
import SectionWithTextOnLeft from './SectionWithTextOnLeft';
import SectionWithTextOnRight from './SectionWithTextOnRight';
import BlogPosts from './BlogPosts';
import AboutUsWithNewsletter from './AboutUsWithNewsletter';
import Footer from './Footer';


function App() {
  const [showTimer, setShowTimer] = useState(false);
  return (
    <div className="App">
      <Navbar />
      {showTimer ? <Timer /> : <Header />}
      <Timer />
      <SectionWithTextOnLeft />
      <SectionWithTextOnRight />
      <BlogPosts />
      <AboutUsWithNewsletter />
      <Footer />
    </div>
  );
}

export default App;