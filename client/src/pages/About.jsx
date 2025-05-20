import React from "react";

export default function About() {
  return (
    <section id ="about-us" className="about-us-section">
        <div className="about-image-container">
          

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
