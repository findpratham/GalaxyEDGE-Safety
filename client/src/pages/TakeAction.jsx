// src/pages/TakeAction.jsx
import React, { useEffect, useState, useRef } from "react";
import '../styles/TakeAction.css';

const cards = [
  {
    title: "Innovation",
    img: "/assets/TakeActionImages/Proactive-risk.jpg",
    detail1: "We embrace cutting-edge technology to transform occupational health and safety. Through collaboration with leading technology partners, we are developing next-generation solutions that leverage AI and immersive technologies to drive proactive safety improvements and organizational excellence. ",
    info1: [
      "Cutting-edge, photorealistic 3D replicas of equipment and facilities that let operators practice in truly immersive VR environments.",
      "AI-powered auditor assistant designed to streamline OHS system audits, identify compliance gaps, and provide real-time, tailored guidance aligned with COR, ISO 45001, and CSA Z1003 standards.",
      "Next-generation performance analytics with AI-backed scoring, instant session playback, and timestamped insights to continuously refine training effectiveness."
    ],    
    image1: "/assets/TakeActionImages/AdditionalinfoImages/risk11.jpg",
  },
  {
    title: "Safety & Well-being",
    img: "/assets/TakeActionImages/workforce-resilience1.jpg",

    detail1: "Safety is at the core of everything we do. We are dedicated to developing solutions that reduce workplace risks, protect employees, and create a culture of proactive safety and well-being.",
    info1:[
      "Culture-driven safety solutions assessing leadership & behavior.",
      "Integrated OHSMS aligned with COR, ISO 45001.",
      "Executive programs embedding safety into leadership.",
      "Strategies integrating well-being, psychosocial risk, and mental health.",
    ],
    image1: "/assets/TakeActionImages/AdditionalinfoImages/resilience1.jpg",
  },
  {
    title: "Accessibility",
    img: "/assets/TakeActionImages/safety-gear.jpg",

    detail1: "We believe that safety knowledge must be accessible to everyone—from executives to frontline workers. Our commitment is to deliver customized, harmonized solutions that meet each organization’s unique environmental and operational needs, while embedding governance and accountability at every level.",
    info1: [
      "Customized organizational assessments to understand each client’s specific environment and operational risk landscape, ensuring tailored and relevant safety solutions.",
      "Harmonized training frameworks that unify provincial, federal, and international standards into a single, accessible curriculum aligned across the entire organization.",
      "Governance-integrated knowledge systems with version control, audit trails, and role-based access to ensure transparency, compliance, and leadership oversight.",
      "Customized immersive training programs delivered through GESI’s strategic technology partners, using cutting-edge VR/AR platforms to maximize engagement, retention, and real-world application.",
    ],
    image1: "/assets/TakeActionImages/AdditionalinfoImages/risk1.jpg",
  },
];

export default function TakeAction() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Fade-in when scrolled into view
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
    <div className="take-action-container">
      <section ref={sectionRef} className="take-action-section">
        <h2 className="take-action-heading">Our Core Values</h2>
        <p>Fundamental beliefs that shape our culture, guide every decision, and drive our success.</p>

        {/* Cards Grid */}
        <div className="cards-container">
          {cards.map((card, i) => {
            const isActive = expandedIndex === i;
            return (
              <div
                key={i}
                className={[
                  "card",
                  visible && "fade-in",
                  isActive && "hovered",
                ]
                  .filter(Boolean)
                  .join(" ")}
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                <div
                  className="card-image"
                  style={{ backgroundImage: `url(${card.img})` }}
                />
                <div className="card-content">
                  <h3>{card.title}</h3>
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
            <div className="card-detail-header">
              {current.detail1}
            </div>

            <div className="card-detail-row">
              <img
                src={current.image1}
                alt={current.title}
                className="card-detail-image"
              />
              <ul className="card-detail-list">
                {current.info1.map((pt, idx) => (
                  <li key={idx}>{pt}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

