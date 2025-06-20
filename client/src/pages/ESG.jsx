import React, { useState,useEffect, useRef } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { NavLink } from "react-router-dom";
import { Link } from 'react-scroll'; // Ensure you import Link from 'react-scroll'
import ReachOutNow from "./ReachOut";
import "../App.css"
import "../styles/ESG.css"
import "../styles/AboutUS.css"
import Footer from "../pages/footer";

const cards = [
  {
    title: "ESG-Safety Strategy Alignment",
    img: "/assets/ESG1.jpg",
    // subtitle: "An intelligent AI assistant delivering real-time insights to power proactive safety decisions",
    info1: [
      "Align your health and safety systems with ESG frameworks. We help define safety performance indicators that map to your organization’s environmental and social impact goals"
    ],    
  },
  {
    title: "ESG Reporting & Disclosure Support",
    img: "/assets/ESG2.jpg",
    // subtitle: "Build AI tools around your business needs to boost safety, efficiency, and performance",
    info1: [
      "Assistance in translating internal safety performance into ESG-ready metrics and narratives for corporate sustainability reports, investor documentation, and stakeholder communications"
    ],    
  },  {
    title: "Governance & Policy Integration",
    img: "/assets/ESG3.jpg",
    // subtitle: "An intelligent AI assistant delivering real-time insights to power proactive safety decisions",
    info1: [
      "Embed safety into your governance framework by refining oversight structures, accountability systems, and board-level reporting. We also help align your COR/ISO/CSA certifications with broader ESG objectives"
    ],    
  },
  {
    title: "Culture-Driven ESG Transformation",
    img: "/assets/ESG4.jpg",
    // subtitle: "Build AI tools around your business needs to boost safety, efficiency, and performance",
    info1: [
      "Support your ESG goals with a people-first approach. We help organizations foster psychological safety, employee engagement, and diversity-informed risk leadership as part of a holistic ESG culture"
    ],    
  }
]
export default function ESG() {
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
    
    <div className = "ESG-container">
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
          src="/assets/image4.jpg"
          alt="Main background"
          className="aboutUS-image-img"
        />
      </div>


      <div className = "ESG-Page-container">
        <div className = "ESG-main-heading">
            <h1>
            Building Safety into Your ESG Commitments            
            </h1>
        </div>
        
        <div className="section-header">
        <br />
          <p>
            At GESI, we believe safety is not just a compliance requirement — it's a cornerstone of sustainable business performance. As ESG (Environmental, Social, and Governance) expectations continue to evolve, organizations are under increasing pressure to demonstrate transparency, responsibility, and long-term resilience.            
            <br />
            <br />
            Our ESG-aligned safety integration services help you embed health and safety into your ESG strategy, ensuring it’s measurable, reportable, and impactful across all levels of your operations. Whether you're preparing for stakeholder disclosures, pursuing certifications, or aligning with global standards, GESI delivers safety-centered ESG solutions tailored to your business goals.          </p>
        </div>

        <div className = "ESG-sub-heading">
            <h1>
            Our Core ESG Integration Services
            </h1>
            <h2 className="ESG-subheading">GESI offers both standalone solutions and multi-tiered ESG integration programs, including</h2>

        </div>

        {/* Cards Grid */}
        <div className="ESG-cards-container"> 
          {cards.map((card, i) => {
            const isActive = expandedIndex === i;
            return (
              <div
                key={i}
                className={[
                  "ESG-card",
                  visible && "fade-in",
                  isActive && "hovered",
                ]
                  .filter(Boolean)
                  .join(" ")}
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                <div
                  className="ESG-card-image"
                  style={{ backgroundImage: `url(${card.img})` }}
                />
                <div className="ESG-card-content">
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
                {/* {expandedIndex === 0 ? (
                <NavLink to="/targeted_support" smooth duration={900}>
                    <button className="AIDriven-CTA1">Get Targeted Support</button>
                </NavLink>
                ) : expandedIndex === 1 ? (
                <NavLink to="/system_assessment" smooth duration={900}>
                    <button className="AIDriven-CTA2">Partner with us to transform your business</button>
                </NavLink>
                ) : null} */}
          </div>
        )}

                <NavLink to="/contact" smooth duration={900}>
                    <button className="ESG-CTA">Book a Consultation today...</button>
                </NavLink>

      </div>
        <Footer/> 
    </div>
  );
}