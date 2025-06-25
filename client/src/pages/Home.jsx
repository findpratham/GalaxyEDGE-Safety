import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import "../App.css";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home-container">
              
        {/* ── UP ARROW (only lives inside this section) ── */}
        <Link to="home" smooth duration={1000} className="scroll-up-link">
          <div className="scroll-up-arrow">
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path 
                d="M4 10l4-4 4 4" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              />
            </svg>
          </div>
        </Link>

      <Link to="about-us" smooth duration={1000}>
        <div className="scroll-down-arrow">
          <svg viewBox="0 0 16 16" aria-hidden="false">
            <path
              d="M4 6l4 4 4-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>
      </Link>
      <div className="contentAboutUS">
        <div className = "Hero-Logo-image">
          <img
              src="/assets/logo.jpg"
              alt="GalaxyEDGE Safety Logo"
              className="aboutus-logo"
            />
        </div>
      </div>

      {/* Full-screen hero image */}
      <div className="parallax-image">
      <video
        className="parallax-image-img"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-label="Main background video"
      >
        <source src="/assets/MainPage/hero-video.mp4" type="video/mp4" />
        Your browser doesn’t support HTML5 video.
      </video>


        <div className="content">
          <div className="cta-buttons">
            <Link to="learn_more" smooth duration={900}>
              <button className="cta-button learn-more">
                Learn More
              </button>
            </Link>
            <NavLink to="/contact" end>
              <button className="cta-button contact-us">
                Contact Us
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      
    </div>
  );
}
