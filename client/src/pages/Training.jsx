import React, { useState,useEffect, useRef } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { NavLink } from "react-router-dom";
import { Link } from 'react-scroll'; // Ensure you import Link from 'react-scroll'
import ReachOutNow from "./ReachOut";
import "../App.css"
import "../styles/Training.css"
import "../styles/AboutUS.css"
import Footer from "../pages/footer";

const cards = [
  {
    title: "Immersive Learning",
    img: "/assets/ImmersiveHero.jpg",
    subtitle: "Immersive learning that empowers action and transforms safety culture",
    info1: [
      "Transform the way your teams learn and lead. GESI’s immersive training- brings real-world safety scenarios to life through cutting-edge virtual environments at a price that works within your budget. Engage your workforce with high-impact experiences that build confidence, improve retention, and drive behavior change at every level."
    ],    
  },
  {
    title: "Scenario-Based Customized Learning",
    img: "/assets/Training2.jpg",
    subtitle: "Tailored training experiences, from the boardroom to the jobsite",
    info1: [
      "We design scenario-based learning solutions customized for every organizational tier—from executives shaping culture to frontline workers managing daily risk. Using real-life context and role-specific challenges, we help your teams develop practical skills that translate into immediate safety performance"
    ],    
  }
]

export default function Training() {
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
    
    <div className = "Training-container">
      <ReachOutNow/>

        {/* SCROLL UP ARROW */}
        <button
          className="scroll-up-arrow"
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
          <source src="/assets/ImmersiveLearningHero.mp4" type="video/mp4" />
          Your browser doesn’t support HTML5 video.
        </video>
      </div>


      <div className = "Training-Page-container">
        <div className = "Training-main-heading">
            <h1>
                Training for Change: Immersive Learning That Lasts            
            </h1>
        </div>
        
        <div className="section-header">
        <br />
          <p>
            We design and deliver experiential learning programs with leading tech companies that engage every level of your workforce—from executives to frontline staff. Using immersive technologies, scenario-based simulations, and real-world safety challenges, we ensure training is effective, adaptable, and measurable.
          </p>
        </div>

        <div className = "Training-sub-heading">
            <h1>
            Shaping safer habits and stronger cultures through experiential, people-first education           
            </h1>
        </div>

        {/* Cards Grid */}
        <div className="Training-cards-container"> 
          {cards.map((card, i) => {
            const isActive = expandedIndex === i;
            return (
              <div
                key={i}
                className={[
                  "Training-card",
                  visible && "fade-in",
                  isActive && "hovered",
                ]
                  .filter(Boolean)
                  .join(" ")}
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                <div
                  className="Training-card-image"
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
                <NavLink to="/Immersive-Learning" smooth duration={900}>
                  <button className="Training-CTA1">Learn more about Immersive Learning</button>
                </NavLink>
              ) : expandedIndex === 1 ? (
                <NavLink to="/contact" smooth duration={900}>
                  <button className="Training-CTA2">Contact Us for More Information</button>
                </NavLink>
              ) : null}
          </div>
        )}

      </div>
        <Footer/> 
    </div>
  );
}