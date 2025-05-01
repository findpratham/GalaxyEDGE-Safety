// src/pages/TakeAction.jsx
import React, { useEffect, useState, useRef } from "react";

const cards = [
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
  ,

  // // ********************************************************** CARD 3 **********************************************************
  // {
  //   title: "Predictive Compliance Engine",
  //   text: "Harness IoT data and predictive analytics to stay ahead of regulations and global risks, driving continuous improvement and compliance",
  //   img: "/assets/TakeActionImages/predictive-compliance.jpg",

  //   // 1️⃣ IoT Monitoring
  //   detail1: "Utilize IoT-Enabled Safety Monitoring",
  //   info1: [
  //     "Install environmental sensors to track air quality, noise levels, and temperature in real time.",
  //     "Mount vibration and pressure sensors on critical equipment to predict failures before they occur.",
  //     "Stream data to the cloud for continuous monitoring and historical trend analysis.",
  //     "Trigger automated maintenance work orders when sensor thresholds are crossed.",
  //   ],
  //   image1: "/assets/TakeActionImages/AdditionalinfoImages/challenges1.jpg",

  //   // 2️⃣ Predictive Analytics
  //   detail2: "Leverage Predictive Safety Analytics",
  //   info2: [
  //     "Aggregate incident, inspection, and sensor data into a unified analytics engine.",
  //     "Apply machine-learning models to spot patterns and forecast high-risk conditions.",
  //     "Visualize predictive insights in interactive dashboards for proactive decision-making.",
  //     "Integrate analytics outputs with scheduling tools to plan targeted safety interventions.",
  //   ],
  //   image2: "/assets/TakeActionImages/AdditionalinfoImages/challenges2.jpg",

  //   // 3️⃣ Continuous Improvement
  //   detail3: "Establish Continuous Safety Improvement Loops",
  //   info3: [
  //     "Adopt a Plan-Do-Check-Act (PDCA) framework for ongoing safety enhancements.",
  //     "Convene cross-functional safety councils each month to review performance metrics.",
  //     "Document lessons learned from every incident or near-miss and update procedures promptly.",
  //     "Celebrate teams who demonstrate measurable improvements to reinforce a culture of excellence.",
  //   ],
  //   image3: "/assets/TakeActionImages/AdditionalinfoImages/challenges3.jpg",
  // },
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
