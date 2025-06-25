// src/pages/OurMission.jsx
import React, { useEffect } from 'react';
import '../styles/AboutUS.css';
import '../App.css';
import '../styles/Mission.css';
import { animateScroll as scroll } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';

import TakeAction from "./TakeAction";
import TakeAction1 from "./TakeAction1";
import ReachOutNow from "./ReachOut";
import Footer from "../pages/footer";

export default function OurMission() {

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollDown) {
      setTimeout(() => {
        window.scrollTo({
          top: 1650,
          behavior: 'smooth',
        });
  
        // Clean the state (to avoid repeated scroll on refresh)
        navigate(location.pathname, { replace: true });
      }, 100);
    }
  }, [location.key]); // ✅ listen to `location.key`, not just `location`

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="mission-container">
      <ReachOutNow />

      {/* SCROLL UP ARROW */}
      <button
        className="scroll-up-arrow"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <svg viewBox="0 0 16 16" aria-hidden="true">
          <path d="M4 10l4-4 4 4" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </button>

      {/* SCROLL DOWN ARROW */}
      <button
        className="scroll-down-arrow"
        onClick={() => scroll.scrollMore(600, { smooth: true, duration: 1000 })}
        aria-label="Scroll down 500px"
      >
        <svg viewBox="0 0 16 16" aria-hidden="true">
          <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="2" />
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
        <source src="/assets/MainPage/Mission.mp4" type="video/mp4" />
        Your browser doesn’t support HTML5 video.
      </video>
      </div>

      <div className = "Hero-Mission-text">
          <h1 className="Mission-heading">
            Our Vision & Mission<br />
          </h1>
      </div>

      <div className="missionHeading">
        <h1 className="mission-heading"><br /></h1>
      </div>

      <div className="margins">
        <section>
          <div className="vision-image">
            <img src="/assets/tablogo.jpg" alt="GalaxyEDGE Safety Logo" className="vision-logo" />
            <div className="vision-heading">
              <h2 className="vision-title">Our Vision</h2>
              <p className="vision-text">
                "To be the global leader in transforming workplace safety through innovation, collaboration, and empowered leadership..."
              </p>
            </div>
          </div>

          <div className="hero-heading">
            <h1>A Transformational leap in Workplace Safety</h1>
          </div>
        </section>

        <section className="mission-body">
          <div className="mission-text">
            <br /><br />
            <h3>How we are moving our Vision forward…</h3>
            <div className="aboutus-hero-content">
              <p>
                <p>
            At GalaxyEDGE Safety Inc. (GESI), our mission is to redefine global occupational health and safety through innovation, digital transformation, and strategic collaboration. We are committed to developing technology-driven solutions that minimize workplace hazards, enhance accessibility to safety education, and empower businesses to create safer, healthier, and more sustainable work environments.
            <br></br>
            <br></br>
            Through cutting-edge engineering, AI-driven safety applications, and immersive learning solutions, we strive to advance safety practices worldwide, ensuring that every individual—regardless of industry or experience—has access to the knowledge, tools, and resources necessary to thrive in an evolving workplace.
            </p>
            </p>
          </div>
          </div>

          <div className="mission-image">
            <img src="/assets/mission1.jpg" alt="Lisa McGuire" />
          </div>
        </section>

        <TakeAction />
        <TakeAction1 />
      </div>

      <Footer />
    </div>
  );
}
