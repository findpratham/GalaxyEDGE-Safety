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
          At GalaxyEDGE Safety Inc. (GESI), we are redefining global health and safety standards through leading-edge innovation, strategic consultancy, and immersive digital transformation
          <br />
          <br />
          Our mission is to lead the industry by integrating AI-powered safety solutions, advanced digital tools, and accessible training programs to build safer, smarter workplaces across the globe. Grounded in engineering, education, and strategic partnerships, we offer tailored consultancy services that empower organizations to navigate complex safety challenges with clarity and confidence.
          <br />
          <br />
          Through our customized approach, GESI equips businesses, professionals, and frontline workers with the tools and knowledge needed to thrive in today’s rapidly evolving safety landscape.
          <br />
          <br />
          We align risk management with ESG principles and future-ready technologies to deliver scalable, high-impact solutions across diverse industries.
        </p>
        


      </div>
      
    </section>
  );
}
