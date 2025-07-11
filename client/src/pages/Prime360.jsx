import React, { useState,useEffect, useRef } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { NavLink } from "react-router-dom";
import { Link } from 'react-scroll'; // Ensure you import Link from 'react-scroll'
import ReachOutNow from "./ReachOut";
import "../App.css"
import "../styles/Services.css"
import "../styles/AboutUS.css"
import '../styles/Prime360.css'
import Footer from "../pages/footer";

export default function Prime360() {
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

    <div className = "Prime360-container">
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
          <video
            className="aboutUS-image-img"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-label="Hero background video"
          >
          <source src="/assets/Option4.mp4" type="video/mp4" />
          Your browser doesn’t support HTML5 video.
        </video>
      </div>

      


      <div className = "Prime360-Page-container">
        <div className = "Prime360main-heading">
            <h1>
            Advisory Solutions that Deliver Impact
            </h1>
        </div>
        
        <div className="section-header">
        <br />
          <p>
            PRIME360™ is a next-generation governance framework that transforms how organizations approach occupational health, safety, and psychological wellbeing. Built to go beyond compliance, PRIME360™ aligns system design with strategic business goals—embedding safety into the core of how organizations lead, operate, and grow.          <br />
          <br />  
            Aligned with ISO 45001, CSA Z1003, and COR, PRIME360™ embeds executive accountability, risk controls, and continuous improvement into a single adaptable framework—ensuring safety becomes a driver of organizational resilience, culture, and strategic growth.
          </p>
        </div>

        <div className="Prime360-image">
            <img
            src="/assets/Prime360.jpg"
            alt="Main background"
            className="aboutUS-image-img"
            />
        </div>
        
        <div className="section-header">
        <br />
          <p>
          This enterprise-wide model integrates the best of global and national standards—including ISO 45001, CSA Z1003, and COR—into a unified structure that advances both resilience and performance. Unlike traditional frameworks, PRIME360™ places equal emphasis on leadership accountability, psychological safety, and strategic system integration.
          <br />
          <br />  
          Aligned with ISO 45001, CSA Z1003, and COR, PRIME360™ embeds executive accountability, risk controls, and continuous improvement into a single adaptable framework—ensuring safety becomes a driver of organizational resilience, culture, and strategic growth.
          </p>
        </div>

        <div className="Prime360-Structure-image">
            <img
            src="/assets/PRIME360_2.png"
            alt="Main background"
            className="aboutUS-image-img"
            />
        </div>

        <div className="Prime360-section-header">
        <br />
          <p>
            <strong>At the heart of PRIME360™ are five interconnected pillars:</strong>   
          <br />
          {/* <br />  
            ◦ PRIME360™ Acronym Graphic- Lisa to Forward           
           <br />  
            ◦ PRIME360™ Structural Table (5 Elements)- Lisa to Forward
            <br />
            ◦ Summary Text Underneath Table Lisa to Forward           */}
            </p>
        </div>

        {/* TABLE */}
        <div className="Prime360-table-container">
          <table className="Prime360-table">
            <colgroup>
              {/* give each <col> a class so you can control its width in CSS */}
              <col className="Prime360-col col-1" />
              <col className="Prime360-col col-2" />
              <col className="Prime360-col col-3" />
              <col className="Prime360-col col-4" />
              <col className="Prime360-col col-5" />
            </colgroup>

            <tbody>
              <tr>
                <td>P</td>
                <td>Planning</td>
                <td>Strategy &amp; Design (Element 2)</td>
                <td>Establishes system scope, objectives, and integration into business strategy.</td>
              </tr>
              <tr>
                <td>R</td>
                <td>Resilience</td>
                <td>Continuous Improvement &amp; Adaptation (Element 5)</td>
                <td>Enhances adaptability by embedding feedback and improvement into system evolution.</td>
              </tr>
              <tr>
                <td>I</td>
                <td>Integration</td>
                <td>Organizational Structure &amp; Integrity (Element 1)</td>
                <td>Aligns health and safety with executive governance and organizational structure.</td>
              </tr>
              <tr>
                <td>M</td>
                <td>Measurement</td>
                <td>Monitoring &amp; Evaluation (Element 4)</td>
                <td>Uses audits, KPIs, and data analytics to assess and guide system performance.</td>
              </tr>
              <tr>
                <td>E</td>
                <td>Engagement</td>
                <td>Implementation &amp; Execution (Element 3)</td>
                <td>Mobilizes leadership and worker participation to activate plans and drive outcomes.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="Prime360-Structure-image">
            <img
            src="/assets/PRIME360_2.png"
            alt="Main background"
            className="aboutUS-image-img"
            />
        </div>

        <div className="Prime360-section-header">
        <br />
          <p>
            <strong>PRIME360 is composed of five interconnected elements that collectively form a comprehensive safety management system:</strong>   
          <br />
          {/* <br />  
            ◦ PRIME360™ Acronym Graphic- Lisa to Forward           
           <br />  
            ◦ PRIME360™ Structural Table (5 Elements)- Lisa to Forward
            <br />
            ◦ Summary Text Underneath Table Lisa to Forward           */}
            </p>
        </div>

          {/* TABLE */}
          <div className="Prime360-table-container2">
          <table className="Prime360-table2">
            <colgroup>
              {/* give each <col> a class so you can control its width in CSS */}
              <col className="Prime360-col col-1" />
              <col className="Prime360-col col-2" />
              <col className="Prime360-col col-3" />
              <col className="Prime360-col col-4" />
              <col className="Prime360-col col-5" />
            </colgroup>
            <thead>
              <tr>
                <th>Element</th>
                <th>Title</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Organizational Structure and Integrity</td>
                <td>Establishes the leadership, governance, and ethical foundation for OHS and PHS accountability.</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Strategy and Design</td>
                <td>Defines the system scope, policies, and compliance architecture based on legal, psychological, and physical safety needs.</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Implementation and Execution</td>
                <td>Operationalizes controls, training, and communication to manage risks and ensure safe, inclusive practices.</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Monitoring and Evaluation</td>
                <td>Measures system performance through audits, investigations, and outcome metrics to assess and verify system effectiveness.</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Monitoring and Evaluation</td>
                <td>Ensures system evolution through formal management review, change management protocols, and renewal of objectives.</td>
              </tr>
            </tbody>
          </table>
        </div>



        <div className="section-header">
            <br />
            <p>
            Together, these pillars form a dynamic, system that empowers organizations to shift from reactive safety practices to proactive, people-centered risk governance.
            <br />
            <br />  
            PRIME360™ is more than a compliance tool—it’s a strategic asset designed to future-proof organizational safety, strengthen leadership, and drive meaningful results across health, wellbeing, and performance
            </p>
        </div>

        

        <NavLink to="/contact" smooth duration={900}>
            <button className="Training-CTA1"> Request a System Assessment Consultation</button>
        </NavLink>

      </div>
        <Footer/> 
    </div>
  );
}