import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>Evalio</h1>
          <span className="tagline">Evaluation Made Simple</span>
        </div>
        <nav className="navigation">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
          <Link to="/create" className="nav-link">Create Evaluation</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;