// src/pages/TakeAction.jsx
import React, { useEffect, useState, useRef } from "react";

const cards = [
  {
    title: "Collaboration & Partnership",
    img: "/assets/TakeActionImages/collaboration-partnership.jpg",
    detail1: "Strong partnerships drive meaningful change. We work with industry leaders, businesses, and global organizations to share insights, disseminate the latest safety advancements, and create a network of safety-driven innovation. ",
    info1: [
      "Strategic alliances with industry leaders to co-develop and deploy cutting-edge safety solutions that drive measurable impact.",
      "Collaborative forums and roundtables with businesses to exchange real-world insights and foster continuous improvement in workplace safety.",
      "Partnerships with global organizations to rapidly disseminate emerging safety technologies, standards, and best practices across multiple regions.",
      "Cultivating a safety-driven innovation network that connects stakeholders, promotes joint research, and accelerates adoption of advanced safety measures.",
    ],    
    image1: "/assets/TakeActionImages/AdditionalinfoImages/risk11.jpg",
  },
  {
    title: "Leadership for Sustainable Change",
    img: "/assets/TakeActionImages/LeadershipforSustainableChange.jpg",

    detail1: "We recognize that true, lasting change in workplace safety requires strong leadership at all levels—from executives to safety officers and frontline workers. GESI is committed to empowering leaders with the tools, training, and strategies to drive real, sustainable improvements in safety culture. By fostering leadership in safety, we help organizations move beyond compliance and create a proactive, innovation-driven approach to occupational health and well-being",
    info1: [
      "Leadership development programs tailored for executives, safety officers, and frontline workers to instill a proactive safety mindset.",
      "Comprehensive toolkits and training resources that equip leaders with strategies to drive sustainable improvements in safety culture.",
      "Mentorship and coaching frameworks that foster accountability and continuous growth in leadership capabilities across all organizational levels.",
      "Innovative change management strategies enabling organizations to transition from compliance-driven to innovation-led approaches in occupational health and well-being.",
    ],
    image1: "/assets/TakeActionImages/AdditionalinfoImages/resilience1.jpg",
  },
  {
    title: "Integrity & Accountability",
    img: "/assets/TakeActionImages/Integrity.jpg",

    detail1: "We uphold the highest ethical standards in all our initiatives, maintaining transparency, accountability, and a commitment to leading the industry toward a safer, more sustainable future.",
    info1: [
      "Adherence to rigorous ethical guidelines and industry best practices across all safety and sustainability initiatives.",
      "Transparent reporting and open communication channels that ensure accountability and build stakeholder trust.",
      "Robust governance frameworks and regular audits to monitor compliance and uphold integrity in every project.",
      "Commitment to pioneering environmentally sustainable solutions that promote a safer, more responsible future for the industry.",
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

