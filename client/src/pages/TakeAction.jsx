// src/pages/TakeAction.jsx
import React, { useEffect, useState, useRef } from "react";

const cards = [
  // ********************************************************** CARD 1 **********************************************************
  {
    title: "VR/AR Training Simulations",
    text: "Immerse teams in realistic scenarios—from heavy-equipment operation to emergency response—using high-fidelity VR environments and AR procedural overlays. Mobile micro-learning modules (videos, quizzes, checklists) deliver just-in-time reinforcement and certify competencies.",
    img: "/assets/TakeActionImages/Proactive-risk.jpg",

    // 1️⃣ Pre-Shift Inspections
    detail1: "VR Scenario Modules",
    info1: [
      "High-fidelity replicas of equipment, plant layouts, and hazards for immersive operator training.",
      "Customizable emergency drills (fire, spill, lockout/tagout) with variable severity and random triggers.",
      "Instructor-led virtual classrooms and self-paced VR simulations to suit diverse learning preferences.",
      "Performance scoring, session replay, and debrief capabilities with time-stamped feedback.",
    ],
    image1: "/assets/TakeActionImages/AdditionalinfoImages/risk11.jpg",

    // 2️⃣ Smart Wearables
    detail2: "AR Procedural Overlays",
    info2: [
      "Step-by-step guidance overlays for machinery start-up, maintenance, and shutdown via AR glasses.",
      "Hazard call-outs highlight pinch points, high-voltage areas, and restricted zones via spatial recognition.",
      "Voice-command navigation and hands-free operation for uninterrupted procedural guidance.",
      "Real-time feedback on compliance, posture, and protocol adherence with on-the-spot prompts.",
    ],
    image2: "/assets/TakeActionImages/AdditionalinfoImages/risk22.jpg",

    // 3️⃣ Near-Miss Reporting
    detail3: "Mobile Micro-Learning",
    info3: [
      "Short video lessons (2–5 minutes) on essential safety topics, accessible on mobile and desktop.",
      "Interactive quizzes with instant scoring, remediation, and feedback to reinforce concepts.",
      "Digital checklists for equipment inspections, toolbox talks, and safety briefings.",
      "Dashboards track completion rates, certification statuses, and areas needing additional training.",
    ],
    image3: "/assets/TakeActionImages/AdditionalinfoImages/risk33.jpg",
  },
  
 // ********************************************************** CARD 2 **********************************************************
 {
  title: "AI-Powered Risk Management",
  text: "Leverage machine-learning to forecast incident hotspots and prioritize preventative actions with intuitive KPI dashboards. Automated reporting workflows capture root-cause analytics and integrate with your ERP/HMIS for unified, real-time safety insights.",
  img: "/assets/TakeActionImages/workforce-resilience1.jpg",

  // 1️⃣ Predictive Hazard Analysis
  detail1: "Predictive Hazard Analysis",
  info1: [
    "Machine-learning models trained on incident, environmental, and operational data to predict hazards before they escalate.",
    "“What-if” simulations that stress-test process changes, layouts, and staffing levels under varying conditions.",
    "Heatmaps pinpoint emerging risk hotspots on floor plans, machinery zones, and workflow areas for targeted interventions.",
    "Customizable risk triggers and automated alerts notify stakeholders when conditions exceed safety parameters."
  ],
  image1: "/assets/TakeActionImages/AdditionalinfoImages/resilience1.jpg",

  // 2️⃣ Smart Dashboards & Alerts
  detail2: "Smart Dashboards & Alerts",
  info2: [
    "Unified dashboards combining leading and lagging indicators for real-time safety performance monitoring.",
    "Drill-down from corporate overview to site metrics for granular analysis of incident trends and root causes.",
    "Configurable email, SMS, and push notifications for out-of-tolerance events with escalation rules.",
    "Integration connectors for ERP, HMIS, IoT sensors, and third-party data sources for a holistic safety ecosystem."
  ],
  image2: "/assets/TakeActionImages/AdditionalinfoImages/resilience2.jpg",

  // 3️⃣ Incident Automation & Analytics
  detail3: "Incident Automation & Analytics",
  info3: [
    "Digital incident-report forms with mobile capture, voice-to-text, and multimedia attachments for comprehensive data collection.",
    "Root-cause analysis workflows that suggest corrective actions, assign responsibilities, and track progress.",
    "Trend-analysis charts to visualize incident types, frequencies, and resolution times over customizable periods.",
    "Closed-loop verification processes confirm corrective steps, update compliance status, and document follow-up."
  ],
  image3: "/assets/TakeActionImages/AdditionalinfoImages/resilience3.jpg",
},

 // ********************************************************** CARD 1 **********************************************************
 {
  title: "Regulatory Compliance",
  text: "GalaxyEDGE crafts harmonized OHS frameworks that seamlessly align with provincial, federal, and international standards—eliminating gaps and reducing admin overhead. Our cross-border advisory guides you through permit filings, audit prep, and real-time regulatory alerts for Canada, the U.S., and Mexico.",
  img: "/assets/TakeActionImages/safety-gear.jpg",

  // 1️⃣ Harmonized OHS Frameworks
  detail1: "Harmonized OHS Frameworks",
  info1: [
    "Designed to map and reconcile provincial, federal, and international safety standards into a unified framework, ensuring consistent regulatory alignment.",
    "Centralized policy library with version control, audit trails, and permission-based access to track changes and preserve records.",
    "Role-based workflows for document approvals and distribution, streamlining collaboration across departments and remote sites.",
    "Template-driven procedures and checklists that accelerate implementation and reduce customization overhead."
  ],
  image1: "/assets/TakeActionImages/AdditionalinfoImages/risk1.jpg",

  // 2️⃣ Cross-Border Advisory Services
  detail2: "Cross-Border Advisory Services",
  info2: [
    "End-to-end permit-filing assistance and liaison with regulatory agencies in Canada, the U.S., and Mexico, including follow-up submissions.",
    "On-demand expert consultations and guidance to clarify legal interpretations, resolve queries, and minimize approval delays.",
    "Playbooks and templates for multi-site deployment of safety programs with best-practice checklists and timelines.",
    "Semi-annual compliance health checks with gap analyses, risk-scoring reports, and prioritized action plans."
  ],
  image2: "/assets/TakeActionImages/AdditionalinfoImages/risk2.jpg",

  // 3️⃣ Compliance Monitoring & Reporting
  detail3: "Compliance Monitoring & Reporting",
  info3: [
    "Real-time regulatory alerts delivered to dashboards, email, and mobile notifications for immediate legislative update awareness.",
    "Automated compliance scorecards highlighting at-risk areas with traffic-light visuals, benchmarks, and trend indicators.",
    "Audit kits with evidence checklists, document templates, and guidance notes to simplify preparation.",
    "Scheduled report exports in PDF, Excel, or CSV for stakeholders, insurers, and regulators with auto-delivery."
  ],
  image3: "/assets/TakeActionImages/AdditionalinfoImages/risk3.jpg",
},
// ********************************************************** CARD 2 **********************************************************
{
  title: "Global Market Expansion",
  text: "Navigate international trade requirements and certification (ISO 45001, OHSAS) with end-to-end audit support, from gap analysis through on-site approval. Our ESG integration roadmaps and localized guidance ensure compliant, sustainable entry into Europe, North America, APAC, and beyond.",
  img: "/assets/TakeActionImages/safety-champion.jpg",

  // 1️⃣ Trade-Readiness Assessments
  detail1: "Trade-Readiness Assessments",
  info1: [
    "Diagnostic gap analysis against target-market OHS, HR, and trade requirements for readiness evaluation.",
    "Roadmaps prioritizing certifications, documentation, and training with timelines and resource allocation.",
    "Cost-benefit projections for phased entry strategies, weighing compliance costs against revenue gains.",
    "Stakeholder workshops, including risk assessments, to build consensus and secure sponsorship."
  ],
  image1: "/assets/TakeActionImages/AdditionalinfoImages/resilience11.jpg",

  // 2️⃣ Certification & Audit Support
  detail2: "Certification & Audit Support",
  info2: [
    "Project management for ISO 45001 and OHSAS 18001 certification covering documentation, audits, and corrective actions.",
    "On-site audit facilitation, auditor liaison, and evidence preparation with structured follow-up.",
    "Liaison services with certifiers and authorities to streamline audit scheduling and approvals.",
    "Post-audit remediation plans with timeline tracking and monitoring milestones for sustained compliance."
  ],
  image2: "/assets/TakeActionImages/AdditionalinfoImages/certification.jpg",

  // 3️⃣ ESG & Local Adaptation
  detail3: "ESG & Local Adaptation",
  info3: [
    "Integration of environmental and social-governance metrics into safety systems for sustainable operations.",
    "Templates and frameworks for GRI, SASB, and other standards with customizable executive dashboards.",
    "Cultural guides for localized training, signage, communications, and stakeholder engagement.",
    "Translation and localization of manuals, e-learning modules, and documentation for clarity and relevance."
  ],
  image3: "/assets/TakeActionImages/AdditionalinfoImages/esg.jpg",
}
// // ********************************************************** CARD 3 **********************************************************
// {
//   title: "Safety Champion Ecosystem",
//   text: "Empower your team with immersive training, safety ambassadors, and real-time alerts—fostering agility and confidence throughout.",
//   img: "/assets/TakeActionImages/safety-champion.jpg",

//   // 1️⃣ Safety Ambassadors
//   detail1: "Promote Safety Culture Ambassadors",
//   info1: [
//     "Select volunteers from each department to champion safety best practices and mentor peers.",
//     "Train ambassadors in advanced hazard recognition and motivational communication.",
//     "Host quarterly “safety showcases” where ambassadors share wins and lessons learned.",
//     "Recognize top ambassadors with awards, reinforcing peer-driven accountability.",
//   ],
//   image1: "/assets/TakeActionImages/AdditionalinfoImages/resilience11.jpg",

//   // 2️⃣ VR Simulations
//   detail2: "Integrate Virtual Reality (VR) Safety Training",
//   info2: [
//     "Develop immersive VR modules that simulate high-risk scenarios—equipment failures, spill responses, evacuations.",
//     "Tailor lessons to specific roles for maximum relevance and engagement.",
//     "Capture performance metrics in-session and provide instant, actionable feedback.",
//     "Refresh VR scenarios quarterly to reflect new processes, regulations, or equipment.",
//   ],
//   image2: "/assets/TakeActionImages/AdditionalinfoImages/resilience2.jpg",

//   // 3️⃣ Real-Time Alerts
//   detail3: "Implement Real-Time Hazard Alert Systems",
//   info3: [
//     "Deploy IoT sensors on machinery and in work zones to detect gas leaks, fire, or overheating.",
//     "Configure mobile push notifications for on-site personnel to get instant warnings.",
//     "Aggregate alerts on a central dashboard to coordinate rapid incident response.",
//     "Review alert resolution times and false positives regularly to fine-tune the system.",
//   ],
//   image3: "/assets/TakeActionImages/AdditionalinfoImages/resilience3.jpg",
// },
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
      <h2 className="take-action-heading">Products & Services</h2>
        <p>
          Explore our cutting-edge solutions designed to enhance workplace safety,
          streamline compliance, and empower your teams.
        </p>

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
          isActive && "hovered"
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
          <p>{card.text}</p>
          <button
            className={`card-cta${isActive ? " active" : ""}`}
            onClick={() => openCard(i)}
          >
            ＋
          </button>
        </div>
      </div>
    );
  })}
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

                {/* — index dots — */}
                <div className="detail-index">
                  {sections.map((_, idx) => (
                    <span
                      key={idx}
                      className={`detail-dot${idx === subIndex ? " active" : ""}`}
                    />
                  ))}
                </div>

              
            </div>
          );
        })()}
    </section>
  );
}
