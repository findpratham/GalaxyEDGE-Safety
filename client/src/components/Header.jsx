import React from 'react';
import { Link } from 'react-scroll';  // Importing react-scroll for smooth scroll behavior
import { NavLink } from 'react-router-dom';  // ← pull in NavLink


export default function Header() {
  return (
    <header className="header-container">
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
            <Link to="about-us" smooth={true} duration={500}>
              About Us
            </Link>
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
              Resources
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
