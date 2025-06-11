import React, { useEffect, useRef } from 'react';
import '../styles/VR.css'; // You can define additional specific styles for VR if needed
import { Link } from 'react-scroll'; // Ensure you import Link from 'react-scroll'
import { NavLink } from "react-router-dom";

export default function VR() {

  const bgRef = useRef(null);
  const sectionRef = useRef(null);

     

  useEffect(() => {
    if (!sectionRef.current || !bgRef.current) return;
  
    const sectionTop  = sectionRef.current.offsetTop;
    const vh          = window.innerHeight;
    const delayPx     = 500;          // fixed delay before anything happens
    const scrollRange = vh * 2;       // span the effect over 2× viewport height
  
    // simple “ease‐out‐cubic” easing
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
  
    let ticking = false;
    const handleScroll = () => {
      // compute raw scroll progress
      const scrollY   = window.scrollY;
      const effective = scrollY - (sectionTop + delayPx);

      // raw progress over our longer range
      let p = effective / scrollRange;
      p = Math.min(Math.max(p, 0), 1);
  
      // apply easing
      const eased = easeOutCubic(p);
  
      // compute your transforms
      const scale      = 1 - eased * 0.2;   // shrink up to 80%
      const translateY = -eased * 50;       // move up to -50%
      const minOpacity = 0.2;
      const opacity    = 1 - eased * (1 - minOpacity);  // fade to 0.2

      bgRef.current.style.transform = 
        `scale(${scale}) translateY(${translateY}%)`;
      bgRef.current.style.opacity   = opacity;
      
      ticking = false;
    };
  
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };
  
    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll(); // in case you land mid-page
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  
  
      
  return (

    <div id="vr-section" className="vr-page-container" ref={sectionRef}>
        
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
        
        <div className="take-action-heading">Harnessing Virtual Reality for Workplace Safety</div>
        <br/>
        <h2 className="vr-subheading">Revolutionize your safety training with immersive VR solutions designed to engage employees and minimize risks</h2>
        
        <div
          ref={bgRef}
          className="full-screen-background1"
          style={{ backgroundImage: "url('/assets/VR-background.jpg')" }}
        >

        
      </div>

      {/* VR Section for Employee Safety Training */}
      <div className="vr-section-parallax-content">
        <div className="section-header">
            <br/>
            <br/>
          <h2 className="typography-section-headline">Transform Safety Training with the pioneers of workplace safety</h2>
          <br/>
        </div>
        <div className="vr-details">
          {/* ── CARD 1 ── */}
          <div className="vr-item" >
            <div className="vr-item-image-wrapper">
              <img src="/assets/VR-image1.jpg" alt = "" className="vr-item-image" />
              <div className="vr-item-text">
                <h3>Redefining Safety Through Tomorrow’s Innovations</h3>
                <p>
                Empowering workplaces worldwide with cutting-edge safety solutions that protect people and drive progress
                </p>
                <NavLink to="/our-mission" end>
                  <button className="mission-buttons1">↓</button>
                </NavLink>
              </div>
            </div>
          </div>

          {/* ── CARD 2 ── */}
          <div className="vr-item">
            <div className="vr-item-image-wrapper">
              <img
                src="/assets/image2.jpg"
                alt="Scalable and Flexible Training"
                className="vr-item-image"
              />
              <div className="vr-item-text">
                <h3>The Visionary Shaping Tomorrow’s Workplaces</h3>
                <p>
                Lisa McGuire, ICD.D, CRSP: a safety visionary who slashed injury rates by 40% and grew an alliance from 800 to 3,000 members.                </p>
                <NavLink to="/about-us" end>
                  <button className="mission-buttons2">↓</button>
                </NavLink>
              </div>
            </div>
          </div>

          {/* ── CARD 3 ── */}
          <div className="vr-item">
            <div className="vr-item-image-wrapper">
              <img
                src="/assets/image3.jpg"
                alt="Real-Time Feedback"
                className="vr-item-image"
              />
              <div className="vr-item-text">
                <h3>Transform Your Safety Training Today</h3>
                <p>
                Take the first step toward a safer, smarter workplace—partner with us to revolutionize your safety training and protect what matters most!
                </p>
                <NavLink to="/contact" end>
                  <button className="mission-buttons3">↓</button>
                </NavLink>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}


