import React, { useState,useEffect, useRef } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { NavLink } from "react-router-dom";
import { Link } from 'react-scroll'; // Ensure you import Link from 'react-scroll'
import ReachOutNow from "./ReachOut";
import "../App.css"
import "../styles/Services.css"
import "../styles/AboutUS.css"
import Footer from "../pages/footer";
const cards = [
  {
    title: "Targeted Support for Safety Gaps",
    img: "/assets/services1.jpg",
    subtitle: "Tackle pressing occupational health and safety issues with focused, data-informed strategies",
    info1: [
      "We collaborate with organizations to address critical occupational health and safety (OHS) challenges—ranging from incident reduction and enhanced psychological health response to resolving compliance gaps. We deliver customized, evidence-based solutions grounded in behavioral science, digital diagnostics, and industry benchmarking to drive measurable and lasting improvements."
    ],    
  },
  {
    title: "Build a Safer System from the Ground Up",
    img: "/assets/services2.jpg",
    subtitle: "Assess and align your safety systems with PRIME360-a leading edge framework that delivers cultural impact",
    info1: [
      "We deliver more than safety consulting—we build integrated systems that lead performance. At the core of our Safety Intelligence & Advisory services is PRIME360™, a strategic governance model that unites health, safety, and psychological well-being with business objectives",
      "Aligned with ISO 45001, CSA Z1003, and COR, PRIME360™ embeds executive accountability, risk controls, and continuous improvement into a single adaptable framework—ensuring safety becomes a driver of organizational resilience, culture, and strategic growth"
    ],    
  }
]
export default function Services() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Scroll handler (optional, if used by a button)
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), 500);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // Open/close a card’s detail
  const openCard = (i) => {
    setExpandedIndex((prev) => (prev === i ? null : i));
  };

  // If a card is expanded, fetch its detail1/info1/image1
  const current = expandedIndex !== null ? cards[expandedIndex] : null;


  return (
    
    <div className = "Services-container">
      <ReachOutNow/>

        {/* SCROLL UP ARROW */}
        <button
          className="scroll-up-arrow"
          onClick={scrollToTop}
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
          <source src="/assets/Services.mp4" type="video/mp4" />
          Your browser doesn’t support HTML5 video.
        </video>
      </div>


      <div className = "Page-container">
        <div className = "main-heading">
            <h1>
            Advisory Solutions that Deliver Impact
            </h1>
        </div>
        
        <div className="section-header">
        <br />
          <p>
          We deliver more than safety consulting—we build integrated systems that lead performance. At the core of our <strong>Safety Intelligence & Advisory services</strong> is <strong>PRIME360™</strong>, a strategic governance model that unites health, safety, and psychological well-being with business objectives.          
          <br />
          <br />  
          Aligned with ISO 45001, CSA Z1003, and COR, PRIME360™ embeds executive accountability, risk controls, and continuous improvement into a single adaptable framework—ensuring safety becomes a driver of organizational resilience, culture, and strategic growth.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="services-cards-container"> 
          {cards.map((card, i) => {
            const isActive = expandedIndex === i;
            return (
              <div
                key={i}
                className={[
                  "services-card",
                  visible && "fade-in",
                  isActive && "hovered",
                ]
                  .filter(Boolean)
                  .join(" ")}
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                <div
                  className="services-card-image"
                  style={{ backgroundImage: `url(${card.img})` }}
                />
                <div className="card-content">
                  <h3>{card.title}</h3>
                  <p>{card.subtitle}</p>
                  {card.text && <p>{card.text}</p>}

                  <button
                    className={`card-cta${isActive ? " active" : ""}`}
                    onClick={() => openCard(i)}
                  >
                    <span className="icon">
                      {isActive ? (
                        /* When active, show the “+” sign (rotated via CSS) */
                        "+"
                      ) : (
                        /* When not active, show your SVG‐based scroll button instead */
                        <button
                          className="scroll-down-arrow-card"
                          
                          aria-label="Scroll down 600px"
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
                      )}
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detail Section: only shows detail1/info1/image1 */}
        {current && (
          <div className="card-detail-section">
              
              <ul className="card-detail-list">
                {current.info1.map((pt, idx) => (
                  <li key={idx}>{pt}</li>
                ))}
              </ul>

              {/* Button based on expandedIndex */}
              {expandedIndex === 0 ? (
                <NavLink to="/contact" smooth duration={900}>
                  <button className="Services-CTA1">book a consultation</button>
                </NavLink>
              ) : expandedIndex === 1 ? (
                <NavLink to="/prime360" smooth duration={900}>
                  <button className="Services-CTA2">Learn More About PRIME360™</button>
                </NavLink>
              ) : null}
          </div>
        )}
        

      </div>
        <Footer/> 
    </div>
  );
}