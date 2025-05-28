import React from "react";
import { NavLink } from "react-router-dom";
export default function About() {
  return (
    <section id ="about-us" className="about-us-section">

        <div className="about-image-container">
          

    <img
      src="/assets/aboutsection.jpg"
      alt="GalaxyEDGE logo"
      className="about-image"
    />

      
  </div>
      <div className="about-container">
        
        <h2 className="about-title">Who we are...</h2>
        <p className="about-text">
        At GalaxyEDGE Safety Inc. (GESI), we are redefining global health and safety standards through innovation, digital transformation, and immersive learning technologies. Our mission is to lead the industry by integrating AI-powered safety solutions, cutting-edge digital tools, and accessible training programs to create safer, smarter workplaces worldwide. With a strong foundation in engineering, consultancy, education, and strategic partnerships, GESI is committed to empowering businesses, professionals, and workers with the tools and knowledge needed to navigate the rapidly evolving safety landscape. Our approach integrates risk management, ESG-aligned strategies, and digital safety technologies to deliver high-impact, scalable solutions for organizations across various industries.        </p>
       
          <NavLink to="/about-us" end>
            <button className="about-button">
              About Us
            </button>
          </NavLink>
      </div>
      

    </section>
  );
}
