import React from "react";
import { Link } from 'react-scroll'; // Ensure you import Link from 'react-scroll'

export default function About() {
  return (
    <section id ="about-us" className="about-us-section">
        <div className="about-image-container">
          {/* ── UP ARROW (only lives inside this section) ── */}
          <Link to="home" smooth duration={1000} className="scroll-up-link">
            <div className="scroll-up-arrow">
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path 
                  d="M4 10l4-4 4 4" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                />
              </svg>
            </div>
          </Link>

    <img
      src="/assets/AboutUsImages/tab_logo.jpg"
      alt="GalaxyEDGE logo"
      className="about-image"
    />
  </div>
      <div className="about-container">
        
        <h2 className="typography-section-headline">About Us</h2>
        <p className="about-text">
          GalaxyEDGE Safety Inc. is at the forefront of advancing health and safety 
          protocols, leveraging cutting-edge technology and innovation to transform 
          workplace safety. We understand the importance of protecting our workforce 
          while ensuring operational efficiency and compliance in a rapidly evolving 
          global landscape. Our solutions span regulatory compliance, workforce mobility, 
          and digital safety training, tailored for industries across the globe.
        </p>
      </div>

    </section>
  );
}
