import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 450);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false); // Optional: auto-close on link click

  return (
    <header className={`header-container${scrolled ? ' scrolled' : ''}`}>
      {/* LOGOS */}
      <div className="logo">
        <img
          src="/assets/tablogo.jpg"
          alt="GalaxyEDGE Safety Inc."
          className="tablogo-img"
        />
        <img
          src="/assets/logo updated.jpg"
          alt="GalaxyEDGE Safety Inc."
          className="tablogo_text-img"
        />
      </div>


      {/* HAMBURGER ICON (only shows on mobile) */}
      <button
        className={`menu-toggle ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className="bar top"></span>
        <span className="bar middle"></span>
        <span className="bar bottom"></span>
      </button>

      {/* NAVIGATION LINKS */}
      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <NavLink to="/home" end onClick={closeMenu}>
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/about-us" end onClick={closeMenu}>
              About Us
            </NavLink>
            <ul className="dropdown">
              <li><NavLink to="/about-us" onClick={closeMenu}>Our Founder</NavLink></li>
              <li><NavLink to="/our-mission" onClick={closeMenu}>Our Vision & Mission</NavLink></li>
              <li><Link to="/our-mission" state={{ scrollDown: true }} onClick={closeMenu}>Our Core Values</Link></li>
            </ul>
          </li>

          <li>
            <NavLink to="/our-services" onClick={closeMenu}>
              Services
            </NavLink>
          </li>

          <li>
            <NavLink to="/training" onClick={closeMenu}>
              Training
            </NavLink>
          </li>

          <li>
            <NavLink to="/ai-driven-safety-solutions" onClick={closeMenu}>
              Innovations
            </NavLink>
          </li>

          <li>
            <NavLink to="/EventsCultureShifts" onClick={closeMenu}>
              Events
            </NavLink>
          </li>

          <li>
            <NavLink to="/partnerships" onClick={closeMenu}>
              Partnerships
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
