import React, { useEffect, useRef } from 'react';
import '../styles/VR.css'; // You can define additional specific styles for VR if needed
import { Link } from 'react-scroll'; // Ensure you import Link from 'react-scroll'

export default function VR() {

  const bgRef = useRef(null);
  const sectionRef = useRef(null);

     

  useEffect(() => {
    if (!sectionRef.current || !bgRef.current) return;
  
    const sectionTop  = sectionRef.current.offsetTop;
    const vh          = window.innerHeight;
    const delayPx     = 398;          // fixed delay before anything happens
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
        
        <h2 className="take-action-heading">Harnessing Virtual Reality for Workplace Safety</h2>
        <br/>
        <h2 className="vr-subheading">Revolutionize your safety training with immersive VR solutions designed to engage employees and minimize risks</h2>
        
        <div
          ref={bgRef}
          className="full-screen-background1"
          style={{ backgroundImage: "url('/assets/VR-background.jpg')" }}
        >

        <div className="vr-content">
          <p className="subtext">
          </p>
        </div>
      </div>

      {/* VR Section for Employee Safety Training */}
      <div className="vr-section-parallax-content">
        <div className="section-header">
            <br/>
            <br/>
          <h2 className="typography-section-headline">Transform Safety Training with Virtual Reality</h2>
          <br/>
        </div>
        <div className="vr-details">
          <div className="vr-item">
            <h3>Interactive Safety Simulations</h3>
            <p>
              VR allows employees to interact with real-world scenarios in a controlled environment.
              From handling hazardous materials to learning emergency evacuation procedures, immersive
              simulations make training more effective and memorable.
            </p>
            <ul>
              <li>High-fidelity replicas of equipment and facilities for hands-on practice</li>
              <li>Customizable emergency-response drills with adjustable severity levels</li>
              <li>Scenario branching based on trainee decisions for deeper engagement</li>
              <li>Performance scoring, session replay, and detailed debrief reports</li>
            </ul>
          </div>

          <div className="vr-item">
            <h3>Scalable and Flexible Training</h3>
            <p>
              Virtual reality enables scalable training programs that can be accessed anywhere, anytime.
              It’s a cost-effective solution for large teams and businesses with remote workers.
            </p>
            <ul>
              <li>Cloud-hosted lesson plans accessible from any location</li>
              <li>Modular course design for quick updates and new content</li>
              <li>Multi-user sessions to train dispersed teams together</li>
              <li>Offline playback mode for environments without reliable internet</li>
            </ul>
          </div>

          <div className="vr-item">
            <h3>Real-Time Feedback</h3>
            <p>
              Employees receive instant feedback during training sessions, helping them improve their
              decision-making skills and become more confident in handling various situations.
            </p>
            <ul>
              <li>In-session prompts for correct procedure adherence</li>
              <li>Immediate scoring on task completion and errors</li>
              <li>Voice-over guidance and corrective tips in the headset</li>
              <li>Automated progress tracking with exportable analytics</li>
            </ul>
          </div>
        </div>
      </div>

      

      
      {/*<div className="cta-section">
        <h2>Ready to Take Your Safety Training to the Next Level?</h2>
        <button className="cta-button">Request a Demo</button>
      </div> */}
    </div>
  );
}
