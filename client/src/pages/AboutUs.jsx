// src/pages/AboutUS.jsx
import React, { Component } from 'react';
import '../styles/AboutUS.css';
import '../App.css';
import { Link } from 'react-scroll'; // Ensure you import Link from 'react-scroll'
import { animateScroll as scroll } from 'react-scroll';
import { NavLink } from "react-router-dom";

// CLASS IMPORTS:
import TakeAction from "./TakeAction";
import TakeAction1 from "./TakeAction1";
import Footer from './footer';
import ReachOutNow from "./ReachOut";


export default class Mission extends Component {
  componentDidMount() {
    // as soon as this page renders, jump the viewport to the top
    window.scrollTo(0, 0);
  }
  // ① scroll‐to‐top handler
  scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  render() {
    return (
      <div className="aboutus-container">

        <ReachOutNow/>
        {/* SCROLL UP ARROW */}
        <button
          className="scroll-up-arrow"
          onClick={this.scrollToTop}
          aria-label="Scroll to top"
        >
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path
              d="M4 10l4-4 4 4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </button>

        {/* SCROLL DOWN ARROW */}
        <button
          className="scroll-down-arrow"
          onClick={() => scroll.scrollMore(600, { smooth: true, duration: 1000 })}
          aria-label="Scroll down 500px"
        >
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path
              d="M4 6l4 4 4-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </button>

      <div className="parallax-image">
        <video
        className="aboutUS-image-img"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-label="Hero background video"
      >
        <source src="/assets/HeroAboutUS.mp4" type="video/mp4" />
        Your browser doesn’t support HTML5 video.
      </video>
      </div>

      <div className="contentAboutUS">
        <div className = "Logo-image">
          <img
              src="/assets/tablogo.jpg"
              alt="GalaxyEDGE Safety Logo"
              className="aboutus-logo"
            />
        </div>
      </div>

      <div className = "Hero-text">
          <h1 className="heading">
          Pioneering the Future of Workplace Safety <br />
          </h1>
      </div>

      <div className = "hero-heading">
          <h1>
          Meet Our founder
          </h1>
      </div>


      <div className="margins">
        {/* Hero / Intro */}
       
        {/* Founder Profile */}
        <section className="aboutus-founder">
            
          <div className="founder-text">

            <h3>Lisa McGuire, ICD.D, CRSP</h3>
            <h4>A Transformational Leader in Workplace Safety</h4>
            <p>
            Lisa McGuire, ICD.D, CRSP, is an internationally recognized leader in occupational health and safety with over 17 years of executive leadership. Founder of the Manufacturing Safety Alliance of BC, the Executive Health & Safety Council of BC, and Safety Meta World, she has driven major advancements in workplace safety across Canada and globally. Under her leadership, food-sector injury rates were reduced by over 40%, and membership grew from 800 to 3,000 organizations. 
            <br></br>
            <br></br>
            Lisa led the creation of Canada’s first Occupational Health and Safety Practitioner Competency and Capability Standard and directed the harmonization of national health and safety management system standards, aligning with COR and ISO 45001 frameworks. As a certified CRSP and accredited ICD.D corporate director, she continues to lead innovation in global workplace safety, now advancing AI-powered solutions to support the future of occupational health and safety worldwide.
            </p>
          </div>

          <div className="founder-profile-card">
            <div className="founder-image">
              <img src="/assets/LisaMcGuire.jpg" alt="Lisa McGuire" />
            </div>

            <div className="founder-stats">
              <div className="stat">
                <span className="stat-number">17+</span>
                <span className="stat-label">years experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">3,000</span>
                <span className="stat-label">member businesses</span>
              </div>
            </div>
          </div>
        </section>


      </div>
        {/* <div className = "hero-heading">
            <h1>
            Meet Our founder
            </h1>
        </div> */}

        <NavLink to="/our-mission" end>
          <button className="mission-button">↓</button>
        </NavLink>


      {/* Footer Contact */}
        <Footer />
      </div>

      
    );
  }
}
