// src/pages/TakeAction.jsx
import React, { useEffect, useState, useRef } from "react";

const cards = [
  // ********************************************************** CARD 1 **********************************************************
  {
    title: "Strengthen Workplace Safety",
    text: "Equip your teams with cutting-edge tools and training to reduce incidents and keep everyone protected.",
    img: "/assets/TakeActionImages/safety-gear.jpg",

    detail1: "Regular risk assessments and audits",
    info1: [
      "Regular risk assessments and audits systematically identify potential workplace hazards before they turn into incidents.",
      "By evaluating processes, equipment, and behaviors on a scheduled basis, you stay ahead of emerging safety gaps.",
      "Audit findings drive continuous improvement—informing training updates, procedural tweaks, and new protective measures.",
      "Embedding these reviews into your culture shows a proactive commitment to employee well-being and compliance.",
    ],
    image1: "/assets/TakeActionImages/AdditionalinfoImages/risk1.jpg",

    detail2: "Fortify Employee Protection Standards",
    info2: [
      "Audit and upgrade all personal protective equipment (PPE) to meet or exceed industry regulations.",
      "Install or retrofit engineering controls (guards, barriers, ventilation) at high-risk workstations.",
      "Maintain a centralized inventory and replacement schedule to ensure no expired or damaged equipment is in use.",
      "Enforce a strict PPE-compliance policy with spot checks and supervisor sign-offs.",
    ],
    image2: "/assets/TakeActionImages/AdditionalinfoImages/risk2.jpg",

    detail3: "Implement Comprehensive Safety Training Programs",
    info3: [
      "Develop role-specific modules covering both general safety and task-critical procedures.",
      "Blend classroom instruction with hands-on simulations and scenario drills.",
      "Schedule regular refresher courses and record completion via a training management system.",
      "Use post-training assessments and on-the-job observations to measure effectiveness and close skill gaps.",
    ],
    image3: "/assets/TakeActionImages/AdditionalinfoImages/risk3.jpg",
  },
 // ********************************************************** CARD 2 **********************************************************
{
  title: "Enhance Workforce Resilience",
  text: "Foster agile, up-skilled talent ready to tackle evolving challenges and drive productivity.",
  img: "/assets/TakeActionImages/workforce-resilience.jpg",

  // 1️⃣ Cross-training & role rotation
  detail1: "Cross-Train & Rotate Roles",
  info1: [
    "Design a rotating schedule so each team member masters multiple functions.",
    "Host quarterly “swap-day” sessions where departments teach each other core tasks.",
    "Pair senior and junior staff for reverse-mentorship on niche skill sets.",
    "Use skill-matrix dashboards to track progress and plan future rotations, ensuring everyone stays up-to-date with industry trends.",
    "Provide role-specific certifications after rotations to maintain high standards of expertise across teams."
  ],
  image1: "/assets/TakeActionImages/AdditionalinfoImages/resilience1.jpg",

  // 2️⃣ Mental-health support & peer networks
  detail2: "Build Strong Peer-Support Networks",
  info2: [
    "Launch small peer-cohorts that meet bi-weekly for stress-management check-ins, creating a space for mental wellness discussions.",
    "Train selected staff as mental-health first-responders and resource guides to offer on-the-spot support.",
    "Provide anonymous pulse-surveys to surface hidden well-being concerns, offering a safe outlet for employees.",
    "Celebrate resilience wins (promotions, certifications) in company-wide forums, reinforcing a culture of care and progress.",
    "Host mindfulness workshops and relaxation sessions to help employees de-stress and focus better during work hours."
  ],
  image2: "/assets/TakeActionImages/AdditionalinfoImages/resilience2.jpg",

  // 3️⃣ Flexible upskilling & micro-learning
  detail3: "Offer Flexible Micro-Learning Paths",
  info3: [
    "Curate 10–15 min e-modules on emerging tools and regulatory updates to keep teams informed of industry shifts.",
    "Allow “learning sprints” during work hours to prevent overload, helping employees sharpen their skills without burnout.",
    "Integrate quiz-based badges that unlock real-world project opportunities, making learning tangible and applicable.",
    "Continuously refresh content based on quarterly skill-gap analyses to keep the training aligned with business needs and changes.",
    "Incorporate live feedback sessions into learning modules to foster a feedback-driven learning culture."
  ],
  image3: "/assets/TakeActionImages/AdditionalinfoImages/resilience3.jpg",
},
// ********************************************************** CARD 3 **********************************************************
{
  title: "Safety Champion Ecosystem",
  text: "Empower your team with immersive training, safety ambassadors, and real-time alerts—fostering agility and confidence throughout.",
  img: "/assets/TakeActionImages/safety-champion.jpg",

  // 1️⃣ Safety Ambassadors
  detail1: "Promote Safety Culture Ambassadors",
  info1: [
    "Select volunteers from each department to champion safety best practices and mentor peers.",
    "Train ambassadors in advanced hazard recognition and motivational communication.",
    "Host quarterly “safety showcases” where ambassadors share wins and lessons learned.",
    "Recognize top ambassadors with awards, reinforcing peer-driven accountability.",
  ],
  image1: "/assets/TakeActionImages/AdditionalinfoImages/resilience11.jpg",

  // 2️⃣ VR Simulations
  detail2: "Integrate Virtual Reality (VR) Safety Training",
  info2: [
    "Develop immersive VR modules that simulate high-risk scenarios—equipment failures, spill responses, evacuations.",
    "Tailor lessons to specific roles for maximum relevance and engagement.",
    "Capture performance metrics in-session and provide instant, actionable feedback.",
    "Refresh VR scenarios quarterly to reflect new processes, regulations, or equipment.",
  ],
  image2: "/assets/TakeActionImages/AdditionalinfoImages/resilience2.jpg",

  // 3️⃣ Real-Time Alerts
  detail3: "Implement Real-Time Hazard Alert Systems",
  info3: [
    "Deploy IoT sensors on machinery and in work zones to detect gas leaks, fire, or overheating.",
    "Configure mobile push notifications for on-site personnel to get instant warnings.",
    "Aggregate alerts on a central dashboard to coordinate rapid incident response.",
    "Review alert resolution times and false positives regularly to fine-tune the system.",
  ],
  image3: "/assets/TakeActionImages/AdditionalinfoImages/resilience3.jpg",
},
];

export default function TakeAction() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [subIndex, setSubIndex] = useState(0);
  const [isSwitching, setIsSwitching] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => setVisible(true), 500);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const openCard = (i) => {
    if (expandedIndex === i) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(i);
      setSubIndex(0);
    }
  };

  const current = expandedIndex !== null ? cards[expandedIndex] : null;
  const sections = current
    ? current.detail1
      ? [1, 2, 3]
      : current.details
      ? [1]
      : []
    : [];

  const next = () => {
    setSubIndex((subIndex + 1) % sections.length);
  };
  const prev = () => {
    setSubIndex((subIndex + sections.length - 1) % sections.length);
  };

  return (
    <section ref={sectionRef} className="take-action-section">
      <h2 className="take-action-heading">Take Action</h2>

      {/* Cards Grid */}
      <div className="cards-container">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`card${visible ? " fade-in" : ""}`}
            style={{ animationDelay: `${i * 0.5}s` }}
          >
            <div
              className="card-image"
              style={{ backgroundImage: `url(${card.img})` }}
            />
            <div className="card-content">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <button className="card-cta" onClick={() => openCard(i)}>
                ＋
              </button>
            </div>
          </div>
        ))}
      </div>

        {/* Details Panel */}
        {current && (() => {
          // compute once, before you return your JSX
          const key   = `image${subIndex + 1}`;
          const image = current[key];

          const detailKey = `detail${subIndex + 1}`;
          const infoKey   = `info${subIndex + 1}`;
          const detailText = current[detailKey] || current.details;
          const infoList   = current[infoKey]   || current.info  || [];

          return (
            <div className="card-detail-section">
              {sections.length > 1 && (
                <button className="detail-arrow left" onClick={prev}>‹</button>
              )}
              
                <h3>{detailText}</h3>

                {/* Image + list side by side */}
                <div className="card-detail-row">
                  <img
                    src={image}
                    alt={current.title}
                    className="card-detail-image"
                  />
                  <ul className="card-detail-list">
                    {infoList.map((pt, idx) => (
                      <li key={idx}>{pt}</li>
                    ))}
                  </ul>
                </div>

              

              {sections.length > 1 && (
                <button className="detail-arrow right" onClick={next}>›</button>
              )}

              <button
                className="close-details"
                onClick={() => setExpandedIndex(null)}
              >
                ×
              </button>
            </div>
          );
        })()}
    </section>
  );
}
