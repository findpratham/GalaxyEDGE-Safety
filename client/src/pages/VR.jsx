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
  
      <div className="take-action-heading">Our Six Core Pillars of Impact </div>
      {/* VR Section for Employee Safety Training */}
      <div className="vr-section-parallax-content">
        <div className="section-header">
            <br/>
          <p>
          At GalaxyEDGE Safety Inc. (GESI), we’ve built a transformative model around six interconnected pillars designed to elevate occupational health and safety across every industry. From intelligence-led advisory to immersive training, AI innovation, and ESG alignment — and amplified through high-impact events and strategic partnerships — each pillar plays a vital role in shaping safer, smarter, and more sustainable workplaces.
          </p>
          <br/>
        </div>
        <div className= "Globe-container">
          <div className="globe-image">
            <img src="/assets/globe1.jpg" alt = "" className="globe-image" />
          </div>
          <div className="vr-details">
            {/* ── CARD 1 ── */}
            <div className="vr-item" >
              <div className="vr-item-image-wrapper">
                <img src="/assets/image1.jpg" alt = "" className="vr-item-image" />
                <div className="vr-item-text">
                  <h3>Advisory Solutions that Deliver Impact</h3>
                  <NavLink to="/our-services" end>
                    <button className="mission-buttons1">↓</button>
                  </NavLink>
                </div>
              </div>
            </div>

            {/* ── CARD 2 ── */}
            <div className="vr-item">
              <div className="vr-item-image-wrapper">
                <img
                  src="/assets/Training2.jpg"
                  alt="Scalable and Flexible Training"
                  className="vr-item-image"
                />
                <div className="vr-item-text">
                  <h3>Training Solutions That Transforms Behavior</h3>
                  <NavLink to="/training" end>
                    <button className="mission-buttons2">↓</button>
                  </NavLink>
                </div>
              </div>
            </div>

            {/* ── CARD 3 ── */}
            <div className="vr-item">
              <div className="vr-item-image-wrapper">
                <img
                  src="/assets/AIDriven1.jpg"
                  alt="Real-Time Feedback"
                  className="vr-item-image"
                />
                <div className="vr-item-text">
                  <h3>AI-Driven Safety Solutions</h3>
                  <NavLink to="/ai-driven-safety-solutions" end>
                    <button className="mission-buttons3">↓</button>
                  </NavLink>
                </div>
              </div>
            </div>

            {/* ── CARD 4 ── */}
            <div className="vr-item" >
              <div className="vr-item-image-wrapper">
                <img src="/assets/image4.jpg" alt = "" className="vr-item-image" />
                <div className="vr-item-text">
                  <h3>Building Safety into your ESG Commitments</h3>
                  <NavLink to="/ESG_Stratergy_Performance" end>
                    <button className="mission-buttons1">↓</button>
                  </NavLink>
                </div>
              </div>
            </div>

            {/* ── CARD 5 ── */}
            <div className="vr-item" >
              <div className="vr-item-image-wrapper">
                <img src="/assets/image5.jpg" alt = "" className="vr-item-image" />
                <div className="vr-item-text">
                  <h3>Empowering Events That Shift Culture</h3>
                  
                  <NavLink to="/EventsCultureShifts" end>
                    <button className="mission-buttons1">↓</button>
                  </NavLink>
                </div>
              </div>
            </div>
            
            {/* ── CARD 6 ── */}
            <div className="vr-item" >
              <div className="vr-item-image-wrapper">
                <img src="/assets/imageHero.jpg" alt = "" className="vr-item-image" />
                <div className="vr-item-text">
                  <h3>Partnerships That Drive Innovation Forward</h3>
                  <NavLink to="/partnerships" end>
                    <button className="mission-buttons1">↓</button>
                  </NavLink>
                </div>
              </div>
            </div>

          </div>
          
          {/* CENTER IMAGE */}
            <img
              src="/assets/center-image.jpg"
              alt="Center"
              className="vr-center-circle"
            />
        </div>
      </div>
    </div>
  );
}


