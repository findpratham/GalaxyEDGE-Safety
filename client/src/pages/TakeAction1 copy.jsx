// src/pages/TakeAction.jsx
import React, { useEffect, useState, useRef } from "react";

const cards = [
  // ********************************************************** CARD 1 **********************************************************
  {
    title: "Proactive Risk Prevention",
    text: "Implement pre-shift inspections and smart monitoring to catch hazards early, keeping your team safe and operations running smoothly.",
    img: "/assets/TakeActionImages/Proactive-risk.jpg",

    // 1️⃣ Pre-Shift Inspections
    detail1: "Conduct Pre-Shift Safety Inspections",
    info1: [
      "Create a standardized digital checklist covering equipment integrity, PPE condition, and work-area hazards.",
      "Involve frontline workers in daily walkthroughs to catch and mitigate risks before operations start.",
      "Log findings in real time and assign follow-up tasks to responsible team members.",
      "Review inspection trends weekly to target recurring issues with focused interventions.",
    ],
    image1: "/assets/TakeActionImages/AdditionalinfoImages/risk11.jpg",

    // 2️⃣ Smart Wearables
    detail2: "Deploy Smart Wearable Safety Tech",
    info2: [
      "Equip employees with wearables that monitor vital signs, detect slips/falls and geo-fence hazardous zones.",
      "Set custom alerts for excessive noise, heat, or exposure to harmful substances.",
      "Stream wearable data to a central dashboard for live visibility and rapid incident coordination.",
      "Analyze historical data to optimize work-rest cycles and reduce fatigue-related incidents.",
    ],
    image2: "/assets/TakeActionImages/AdditionalinfoImages/risk22.jpg",

    // 3️⃣ Near-Miss Reporting
    detail3: "Launch a Near-Miss Reporting Initiative",
    info3: [
      "Provide an anonymous mobile/web portal for logging near-misses without fear of blame.",
      "Automatically categorize and prioritize reports by severity and frequency.",
      "Host monthly “safety huddles” to review near-miss trends and co-design preventive measures.",
      "Share success stories where near-miss insights led to process changes or new controls.",
    ],
    image3: "/assets/TakeActionImages/AdditionalinfoImages/risk33.jpg",
  },

  // ********************************************************** CARD 2 **********************************************************
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

  // ********************************************************** CARD 3 **********************************************************
  {
    title: "Predictive Compliance Engine",
    text: "Harness IoT data and predictive analytics to stay ahead of regulations and global risks, driving continuous improvement and compliance",
    img: "/assets/TakeActionImages/predictive-compliance.jpg",

    // 1️⃣ IoT Monitoring
    detail1: "Utilize IoT-Enabled Safety Monitoring",
    info1: [
      "Install environmental sensors to track air quality, noise levels, and temperature in real time.",
      "Mount vibration and pressure sensors on critical equipment to predict failures before they occur.",
      "Stream data to the cloud for continuous monitoring and historical trend analysis.",
      "Trigger automated maintenance work orders when sensor thresholds are crossed.",
    ],
    image1: "/assets/TakeActionImages/AdditionalinfoImages/challenges1.jpg",

    // 2️⃣ Predictive Analytics
    detail2: "Leverage Predictive Safety Analytics",
    info2: [
      "Aggregate incident, inspection, and sensor data into a unified analytics engine.",
      "Apply machine-learning models to spot patterns and forecast high-risk conditions.",
      "Visualize predictive insights in interactive dashboards for proactive decision-making.",
      "Integrate analytics outputs with scheduling tools to plan targeted safety interventions.",
    ],
    image2: "/assets/TakeActionImages/AdditionalinfoImages/challenges2.jpg",

    // 3️⃣ Continuous Improvement
    detail3: "Establish Continuous Safety Improvement Loops",
    info3: [
      "Adopt a Plan-Do-Check-Act (PDCA) framework for ongoing safety enhancements.",
      "Convene cross-functional safety councils each month to review performance metrics.",
      "Document lessons learned from every incident or near-miss and update procedures promptly.",
      "Celebrate teams who demonstrate measurable improvements to reinforce a culture of excellence.",
    ],
    image3: "/assets/TakeActionImages/AdditionalinfoImages/challenges3.jpg",
  },
];


export default function TakeAction1() {
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
    <section ref={sectionRef} className="take-action-section1">
      

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
