import React, { useState,useEffect, useRef } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { NavLink } from "react-router-dom";
import { Link } from 'react-scroll'; // Ensure you import Link from 'react-scroll'
import ReachOutNow from "./ReachOut";
import "../App.css"
import "../styles/Events-Culture-shifts.css"
import "../styles/AboutUS.css"
import Footer from "../pages/footer";

const cards = [
  {
    title: "Book a Speaking Engagement ",
    img: "/assets/Events1.jpg",
    subtitle: "Bring Lisa McGuire or a GESI expert to your conference, leadership forum, or in-house event",
    info1: [
    //   "Stay ahead of the curve with interactive webinars focused on safety strategy, ESG alignment, AI innovation, and more"
    ],    
  },
  {
    title: " Reserve Your Spot",
    img: "/assets/Events2.jpg",
    subtitle: "Stay ahead of the curve with interactive webinars focused on safety strategy, ESG alignment, AI innovation, and more",
    info1: [
      "We design scenario-based learning solutions customized for every organizational tier—from executives shaping culture to frontline workers managing daily risk. Using real-life context and role-specific challenges, we help your teams develop practical skills that translate into immediate safety performance"
    ],    
  },
  {
    title: "See Where We’re Speaking",
    img: "/assets/Events3.jpg",
    subtitle: "Browse upcoming appearances and find out where you can connect with GESI in person",
    info1: [
      "We design scenario-based learning solutions customized for every organizational tier—from executives shaping culture to frontline workers managing daily risk. Using real-life context and role-specific challenges, we help your teams develop practical skills that translate into immediate safety performance"
    ],    
  }
]
export default function EventsCultureShifts() {
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
    
    <div className = "EventsCultureShifts-container">
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
          src="/assets/image5.jpg"
          alt="Main background"
          className="aboutUS-image-img"
        />
      </div>


      <div className = "EventsCultureShifts-Page-container">
        <div className = "EventsCultureShifts-main-heading">
            <h1>
            Inspiring Safer, Smarter Workplaces <br />—One Conversation at a Time            
            </h1>
        </div>
        
        <div className="section-header">
        <br />
          <p>
          At GESI, we believe that real change starts with dialogue, connection, and bold ideas. Through our speaking engagements, webinars, and live event appearances, we ignite culture shifts that move safety from obligation to innovation.
          Join us at upcoming industry events, book a speaking engagement, or reserve a spot in future GESI webinars to explore how safety, leadership, and technology converge to create workplaces that thrive.            

          </p>
        </div>

        <div className = "EventsCultureShifts-sub-heading">
            <h1>
            From keynotes to roundtables, our events spark the dialogue that drives meaningful safety transformation           
            </h1>
        </div>

        {/* Cards Grid */}
        <div className="EventsCultureShifts-cards-container"> 
          {cards.map((card, i) => {
            const isActive = expandedIndex === i;
            return (
              <div
                key={i}
                className={[
                  "EventsCultureShifts-card",
                  visible && "fade-in",
                  isActive && "hovered",
                ]
                  .filter(Boolean)
                  .join(" ")}
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                <div
                  className="EventsCultureShifts-card-image"
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