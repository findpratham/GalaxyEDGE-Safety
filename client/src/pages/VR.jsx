import React from 'react';
import '../styles/VR.css'; // You can define additional specific styles for VR if needed

export default function VR() {
  return (
    <div className="vr-page-container">
        <h2 className="take-action-heading">Harnessing Virtual Reality for Workplace Safety</h2>
        <br/>
        <h2 className="vr-subheading">Revolutionize your safety training with immersive VR solutions designed to engage employees and minimize risks</h2>
        
      {/* Full-Screen Background for VR section with Parallax Effect */}
      <div className="full-screen-background" style={{ backgroundImage: "url('/assets/VR-background.jpg')" }}>
        <div className="vr-content">
          <p className="subtext">
          </p>
        </div>
      </div>

      {/* VR Section for Employee Safety Training */}
      <div className="vr-section-parallax-content">
        <div className="section-header">
            <br/>
            <br/>
          <h2 className="typography-section-headline">Transform Safety Training with Virtual Reality</h2>
          <br/>
        </div>
        <div className="vr-details">
          <div className="vr-item">
            <h3>Interactive Safety Simulations</h3>
            <p>VR allows employees to interact with real-world scenarios in a controlled environment. From handling hazardous materials to learning emergency evacuation procedures, immersive simulations make training more effective and memorable.</p>
          </div>
          <div className="vr-item">
            <h3>Scalable and Flexible Training</h3>
            <p>Virtual reality enables scalable training programs that can be accessed anywhere, anytime. It's a cost-effective solution for large teams and businesses with remote workers.</p>
          </div>
          <div className="vr-item">
            <h3>Real-Time Feedback</h3>         
            <p>Employees receive instant feedback during training sessions, helping them improve their decision-making skills and become more confident in handling various situations.</p>
          </div>
          
        </div>
      </div>

      

      
      {/*<div className="cta-section">
        <h2>Ready to Take Your Safety Training to the Next Level?</h2>
        <button className="cta-button">Request a Demo</button>
      </div> */}
    </div>
  );
}
