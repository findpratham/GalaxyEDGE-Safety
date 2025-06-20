import React, { useState,useEffect, useRef } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { NavLink } from "react-router-dom";
import { Link } from 'react-scroll'; // Ensure you import Link from 'react-scroll'
import ReachOutNow from "./ReachOut";
import "../App.css"
import "../styles/AIDriven-Safety-solutions.css"
import "../styles/AboutUS.css"
import Footer from "../pages/footer";

const cards = [
  {
    title: "Empowering people with intelligent safety support ",
    img: "/assets/Training1.jpg",
    subtitle: "An intelligent AI assistant delivering real-time insights to power proactive safety decisions",
    info1: [
      "Transform the way your teams learn and lead. GESI’s immersive training—powered by UP360—brings real-world safety scenarios to life through cutting-edge virtual environments. Engage your workforce with high-impact experiences that build confidence, improve retention, and drive behavior change at every level"
    ],    
  },
  {
    title: "Customized AI Solutions for Businesses",
    img: "/assets/Training2.jpg",
    subtitle: "Build AI tools around your business needs to boost safety, efficiency, and performance",
    info1: [
      "We design scenario-based learning solutions customized for every organizational tier—from executives shaping culture to frontline workers managing daily risk. Using real-life context and role-specific challenges, we help your teams develop practical skills that translate into immediate safety performance"
    ],    
  }
]
export default function AIDriven() {
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
    
    <div className = "AIDriven-container">
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
        <img
          src="/assets/image3.jpg"
          alt="Main background"
          className="aboutUS-image-img"
        />
      </div>


      <div className = "AIDriven-Page-container">
        <div className = "AIDriven-main-heading">
            <h1>
                AI for Safety: Smarter Decisions. Safer Workplaces            
            </h1>
        </div>
        
        <div className="section-header">
        <br />
          <p>
            GESI is advancing workplace safety through the development of a powerful AI Assistant prototype, created in partnership with a leading technology firm. This intelligent assistant is being designed to deliver real-time insights and provide tailored safety recommendations—customized to your business operations and industry needs.
            <br />
            <br />
            As part of our service offerings, GESI provides organizations with the opportunity to develop customized AI solutions that align with their unique goals and challenges. These tools are designed to enhance operational efficiency, elevate safety performance, and drive measurable outcomes—transforming how businesses approach occupational health and safety in the digital age.
          </p>
        </div>

        <div className = "AIDriven-sub-heading">
            <h1>
                Harness the power of machine learning, automation, and predictive insight to revolutionize how safety is understood, managed, and improved           
            </h1>
        </div>

        {/* Cards Grid */}
        <div className="AIDriven-cards-container"> 
          {cards.map((card, i) => {
            const isActive = expandedIndex === i;
            return (
              <div
                key={i}
                className={[
                  "AIDriven-card",
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
                <NavLink to="/targeted_support" smooth duration={900}>
                    <button className="AIDriven-CTA1">Get Targeted Support</button>
                </NavLink>
                ) : expandedIndex === 1 ? (
                <NavLink to="/system_assessment" smooth duration={900}>
                    <button className="AIDriven-CTA2">Partner with us to transform your business</button>
                </NavLink>
                ) : null}
          </div>
        )}

      </div>
        <Footer/> 
    </div>
  );
}