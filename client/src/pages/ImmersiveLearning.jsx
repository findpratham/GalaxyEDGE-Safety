import React, { useState,useEffect, useRef } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { NavLink } from "react-router-dom";
import { Link } from 'react-scroll'; // Ensure you import Link from 'react-scroll'
import ReachOutNow from "./ReachOut";
import "../App.css"
import "../styles/Services.css"
import "../styles/AboutUS.css"
import '../styles/Prime360.css'
import '../styles/ImmersiveLearning.css'
import Footer from "./footer";

export default function ImmersiveLearning() {
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

    <div className = "ImmersiveLearning-container">
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
          <source src="/assets/ImmersiveLearningHero.mp4" type="video/mp4" />
          Your browser doesn’t support HTML5 video.
        </video>
      </div>

      


      <div className = "ImmersiveLearning-Page-container">
        <div className = "ImmersiveLearningmain-heading">
            <h1>
              Immersive Learning: Revolutionizing Safety, Health & Well-being
            </h1>
        </div>


        
        <div className="section-header">
        <br />
          <p>
            At GalaxyEDGE Safety Inc., immersive learning isn't a trend—it's a transformational tool embedded in how we drive behavioral change and culture-building across industries. Through PRIME360™ and digital partnerships, we integrate these learning technologies into enterprise safety strategies to improve knowledge retention, increase engagement, and reduce incidents on the job
          </p>
        </div>

        <div className = "Training-sub-heading">
            <h1>
              Where innovation meets impact—reshaping how safety and well-being are learned            
            </h1>
        </div>

        <div className="Immersive-image1">
            <img
            src="/assets/ImmersiveHero.jpg"
            alt="Main background"
            className="aboutUS-image-img"
            />
        </div>

        <div className = "ImmersiveLearning-third-heading">
            <h1>
              What is Immersive Learning?
            </h1>
        </div>

        <div className="section-header">
        <br />
          <p  >
          Immersive learning leverages digital environments where learners interact with 3D scenarios, guided avatars, and feedback mechanisms. Unlike classroom or passive e-learning, immersive systems simulate high-risk tasks, complex decision-making, and team communication in real-time—creating deeply engaging, experiential learning moments.          
          <br />
          <br />
          <strong>Learn More:</strong>
          <br />
            ◦ <a
              href="IEEE: Understanding Immersive Learning Environments"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#007BFF', fontWeight: 'bold', textDecoration: 'underline' }}
            >
              IEEE: Understanding Immersive Learning Environments
            </a>
            <br />
            ◦ <a
              href="URL_FOR_STRUCTURAL_TABLE"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#007BFF', fontWeight: 'bold', textDecoration: 'underline' }}
            >
              Harvard Business Review: The Potential of VR in Workplace Training            </a>
            
          </p>
        </div>




        <div className="Immersive-section-header">
        <br />
          <p className="Immersive-text-with-image">
          <div className="Immersive-image">
            <img
            src="/assets/AIDriven1.jpg"
            alt="Main background"
            className="aboutUS-image-img"
            />
        </div>
          <strong style={{ display: "block", textAlign: "center", fontSize: "2rem" }}>
            Why It Matters for Safety, Health & Wellbeing:
          </strong>             
            <br />  
            <br />
          <strong>From frontline workers to senior executives, immersive training tools empower people to:</strong>
          <br />
          <br />  
            ◦ Practice safety protocols under lifelike conditions           
           <br />  
            ◦ Experience high-pressure decision-making safely
            <br />
            ◦ Engage more actively than with conventional slides or lectures     
            <br />
            ◦ Develop deeper psychological and muscle memory recall           
           <br />  
            ◦ Reduce error rates and improve confidence in real-world execution
            <br />                  
            </p>
        </div>

        <div className="section-header">
            <br />
            <p>
            In sectors like manufacturing, energy, and healthcare, companies are already seeing significant ROI on immersive programs—ranging from improved incident response to faster onboarding.
            </p>
        </div>

        <div className="Immersive-image2">
            <img
            src="/assets/Immersive2.jpg"
            alt="Main background"
            className="aboutUS-image-img"
            />
        </div>

        <div className = "ImmersiveLearningmain-heading">
            <h1>
            Adoption Trends and the Future of Learning
            </h1>
        </div>

        <div className="section-header">
            <br />
            <p className="Immersive-text-with-image">
            <img 
              src="/assets/immersive3.jpg" 
              alt="Icon" 
              className="inline-icon" 
            />
            The adoption of immersive learning is accelerating. According to Deloitte, over 70% of large enterprises are planning to invest in XR for training within the next three years. With digital transformation reshaping every industry, immersive education is now recognized as a strategic asset—not just for safety compliance, but for culture, leadership, and performance.            
            <br />
            <br />
            GalaxyEDGE is at the forefront of this movement, as featured at EXPO 2025 Osaka under the Global Initiative for Safety, Health and Well-being. Through hands-on sessions and AR/VR demonstrations, we’re helping organizations worldwide unlock safer, smarter, and more human-centered workplaces.
            </p>
        </div>

        <NavLink to="/contact" smooth duration={900}>
            <button className="Training-CTA1"> Contact us for a Consultation</button>
        </NavLink>

      </div>
        <Footer/> 
    </div>
  );
}