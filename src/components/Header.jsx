import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-container">
        <Link to="/" className="brand">
          <span className="brand-icon">🗺️</span>
          <span className="brand-name">Moje Mapy</span>
        </Link>
        <nav className="nav-links">
          <Link to="/">Domů</Link>
          <a href="https://www.mapy.cz" target="_blank" rel="noreferrer">Mapy.cz</a>
          <a href="https://github.com/Vojtech-M" target="_blank" rel="noreferrer">GitHub</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;