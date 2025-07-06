import React, { useState,useEffect, useRef } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { NavLink } from "react-router-dom";
import { Link } from 'react-scroll'; // Ensure you import Link from 'react-scroll'
import ReachOutNow from "./ReachOut";
import "../App.css"
import "../styles/Partnership.css"
import "../styles/AboutUS.css"
import Footer from "../pages/footer";

const cards = [
    // CARD 1:
  {
    title: "Partnership that Power Progress",
    img: "/assets/Partnership1.jpg",
    subtitle: "Fueling innovation with trusting collaboration",    
    info1: [
      "Transform the way your teams learn and lead. GESI’s immersive training—powered by UP360—brings real-world safety scenarios to life through cutting-edge virtual environments. Engage your workforce with high-impact experiences that build confidence, improve retention, and drive behavior change at every level"
    ],    
  },
  {
    title: "Customized AI Solutions for Businesses",
    img: "/assets/Partnership2.jpg",
    subtitle: "Build AI tools around your business needs to boost safety, efficiency, and performance",
    info1: [
      "Join us in shaping the future of safety"
    ],    
  }
]
export default function Partnership() {
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
    
    <div className = "Partnership-container">
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
        <img
          src="/assets/imageHero.jpg"
          alt="Main background"
          className="aboutUS-image-img"
        />
      </div>


      <div className = "Partnership-Page-container">
        <div className = "Partnership-main-heading">
            <h1>
                Partnerships that drive innovation forward            
            </h1>
        </div>
        
        <div className="section-header">
        <br />
          <p>
            Collaborating for Safer, Smarter, More Sustainable Workplaces
            At GESI, we know that innovation doesn’t happen in isolation—it thrives through collaboration. That’s why we actively partner with forward-thinking organizations, technology firms, academic institutions, and industry leaders who share our vision of transforming occupational health and safety through bold, future-ready solutions.
            <br />
            <br />
            Whether co-developing AI-powered tools, piloting new training methods, or aligning safety with global ESG frameworks, our partnerships are built on trust, purpose, and measurable impact.
          </p>
        </div>

        <div className = "Partnership-sub-heading">
            <h1>
            Together, We’re Building What’s Next in Safety Our partnerships turn ideas into action—fueling scalable innovation, advancing best practices, and shaping the future of safer, smarter, and more sustainable workplaces           
            </h1>
        </div>

        {/* Cards Grid */}
        <div className="Partnership-cards-container"> 
          {cards.map((card, i) => {
            const isActive = expandedIndex === i;
            return (
              <div
                key={i}
                className={[
                  "Partnership-card",
                  visible && "fade-in",
                  isActive && "hovered",
                ]
                  .filter(Boolean)
                  .join(" ")}
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                <div
                  className="Partnership-card-image"
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