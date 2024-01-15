import React from 'react';
import logo from './Logo.png';

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

export default Navbar;
