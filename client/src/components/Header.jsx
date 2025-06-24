import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';


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
          <li className="nav-item">
            <NavLink to="/about-us" end>
              About Us
            </NavLink>
            <ul className="dropdown">
              <li><NavLink to="/about-us">Our Founder</NavLink></li>
              <li><NavLink to="/our-mission">Our Vision & Mission</NavLink></li>
              <li><Link to="/our-mission" state={{ scrollDown: true }}>Our Core Values</Link></li>
            </ul>
          </li>

          
          {/* PRODUCT/SERVICES TAB */}
          <li>
            <NavLink to="our-services" smooth={true} duration={900}>
              Services
            </NavLink>
          </li>

          {/* PARTNERSHIPS TAB */}
          <li>
            <NavLink to="training" smooth={true} duration={500}>
              Training
            </NavLink>
          </li>

          {/* EDUCATION TAB */}
          <li>
            <NavLink to="ai-driven-safety-solutions" smooth={true} duration={500}>
              Innovations
            </NavLink>
          </li>
          
          {/* RESOURCES TAB */}
          <li>
            <NavLink to="EventsCultureShifts" smooth={true} duration={500}>
              Events
            </NavLink>
          </li>

          {/* EVENTS TAB */}
          <li>
            <NavLink to="partnerships" smooth={true} duration={500}>
              Partnerships
            </NavLink>
          </li> 
        </ul>
      </nav>
    </header>
  );
}
