import React from "react";
import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <section id="about-us" className="about-us-section">
      <div className="about-image-container">
        <img
          src="/assets/aboutsection.jpg"
          alt="GalaxyEDGE logo" 
          className="about-image"
        />

        <NavLink to="/about-us" end>
          <button className="about-button">↓</button>
        </NavLink>
      </div>

      <div className="about-container">
        
        <h2 className="about-title">Who we are...</h2>
        <p className="about-text">
          At GalaxyEDGE Safety Inc. (GESI), we are redefining global health and
          safety standards through innovation, digital transformation, and
          immersive learning technologies.
          <br />
          <br />
          Our mission is to lead the industry by integrating AI-powered safety
          solutions, cutting-edge digital tools, and accessible training
          programs to create safer, smarter workplaces worldwide.
          <br />
          <br />
          With a strong foundation that incorporates various disciplines
          incorporating engineering, education, and strategic partnerships,
          through our customized client services—GESI is committed to
          empowering businesses, professionals, and workers with the tools and
          knowledge needed to navigate the rapidly evolving safety landscape.
          <br />
          <br />
          Our approach integrates risk management, ESG-aligned strategies, and
          digital safety technologies to deliver high-impact, scalable
          solutions for organizations across various industries.
        </p>
        


      </div>
      
    </section>
  );
}
