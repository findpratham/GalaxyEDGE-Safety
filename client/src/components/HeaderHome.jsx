import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';

export default function Header() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 450);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  return (
    <header className={`header-container${scrolled ? ' scrolled' : ''}`}>
      <div className="logo">
          <img
            src="/assets/tablogo.jpg"
            alt="GalaxyEDGE Safety Inc."
            className="tablogo-img"
          />
        </div>
        <div className="logo">
          <img
            src="/assets/logo updated.jpg"
            alt="GalaxyEDGE Safety Inc."
            className="tablogo_text-img"
          />
        </div>
      {/* NAVIGATION LINKS */}
      <nav className="nav-links">
        <ul>

          <li>
          <NavLink to="/home" end>
              Home
          </NavLink>
          </li>
          
          {/* ABOUT US TAB */}
          <li>
            <NavLink to="/about-us" smooth={true} duration={900} end>
              About Us
            </NavLink>
          </li>
          
          {/* PRODUCT/SERVICES TAB */}
          <li>
            <Link to="product-services" smooth={true} duration={900}>
              Products/Services
            </Link>
          </li>

          {/* PARTNERSHIPS TAB */}
          <li>
            <Link to="partnerships" smooth={true} duration={500}>
              Partnerships
            </Link>
          </li>

          {/* EDUCATION TAB */}
          <li>
            <Link to="education" smooth={true} duration={500}>
              Education
            </Link>
          </li>
          
          {/* RESOURCES TAB */}
          <li>
            <Link to="resources" smooth={true} duration={500}>
              Prototype
            </Link>
          </li>

          {/* EVENTS TAB */}
          <li>
            <Link to="events" smooth={true} duration={500}>
              Events
            </Link>
          </li> 
        </ul>
      </nav>
    </header>
  );
}
