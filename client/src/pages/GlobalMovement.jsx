import React from "react";
import { NavLink } from "react-router-dom";

export default function GlobalMovement() {
  return (
    <section id="about-us" className="about-us-section">


      <div className="about-container">
        <h2 className="about-title">Join the Global Movement</h2>
        <p className="about-text">

         <strong>Connecting immersive education to safer, stronger communitiesh</strong> 
          <br />
          <br />
            Across the globe, immersive technologies are reshaping how we learn to work
            safely—but access isn&#39;t equal. We&#39;re bringing together global voices to make immersive
            health and safety learning more inclusive, scalable, and culturally grounded.          
          <br />
          <br />
            <strong>Be part of a global effort to build resilient safety cultures through education and
            innovation.</strong>       

        </p>
        <br />

        <NavLink to="/GlobalMovementForm" end>
          <button className="GlobalMovement-button"
                    style={{
                        position: 'relative',  // necessary if you use top/left
                        top: '-50px'           // move up by 20px; tweak as needed
                        // or marginTop: '-20px'
                      }}
          >↓</button>
        </NavLink>
      </div>

      <div className="about-image-container">
      <img
          src="/assets/AIDriven1.jpg"
          alt="GalaxyEDGE logo" 
          className="about-image"
          style={{
            position: 'relative',  // necessary if you use top/left
            top: '-90px'           // move up by 20px; tweak as needed
            // or marginTop: '-20px'
          }}
        />
        
       
      </div>

      
      
    </section>
  );
}
