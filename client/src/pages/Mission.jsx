// src/pages/AboutUS.jsx
import React, { Component } from 'react';
import '../styles/AboutUS.css';
import '../App.css';
import '../styles/Mission.css';
import { animateScroll as scroll } from 'react-scroll';


export default class AboutUS extends Component {
    componentDidMount() {
        // as soon as this page renders, jump the viewport to the top
        window.scrollTo(0, 0);
      }
  render() {
    return (
      <div className="mission-container">

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

      <div className="parallax-image full-screen-image">
        <img
          src="/assets/mission.jpg"
          alt="Main background"
          className="aboutUS-image-img"
        />
      </div>

      <div className="missionHeading">
          <h1 className="mission-heading">
         OUR MISSION  <br />
            
          </h1>
      </div>
      <div className="margins">
        {/* Hero / Intro */}
        

        <section>
          <h2 className="mission-title">
          “At GalaxyEDGE Safety Inc., our mission is to empower every workplace with AI-driven safety solutions and immersive training experiences that anticipate risks, elevate standards, and forge a future where every team works smarter—and safer.”
          </h2>
          
        </section>

        {/* Founder Profile */}
        <section className="mission-body">
            
          <div className="founder-text">
            
            <br></br>
            <br></br>
            
            <h3>A Transformational leap in Workplace Safety</h3>
            <div className="aboutus-hero-content"> 
            <p>
            <p>
            At GalaxyEDGE Safety Inc. (GESI), our mission is to redefine global occupational health and safety through innovation, digital transformation, and strategic collaboration. We are committed to developing technology-driven solutions that minimize workplace hazards, enhance accessibility to safety education, and empower businesses to create safer, healthier, and more sustainable work environments.
            <br></br>
            <br></br>
            Through cutting-edge engineering, AI-driven safety applications, and immersive learning solutions, we strive to advance safety practices worldwide, ensuring that every individual—regardless of industry or experience—has access to the knowledge, tools, and resources necessary to thrive in an evolving workplace.
            </p>
            </p>
          </div>
          </div>

          <div className="founder-profile-card">
            <div className="mission-image">
              <img src="/assets/mission1.jpg" alt="Lisa McGuire" />
            </div>

            
           
          </div>
        </section>

        {/* <section className="aboutus-highlights">
          <div className="highlight-card">
            <h3>Mission</h3>
            <p>
              Integrate AI-powered safety solutions, cutting-edge digital tools, and accessible
              training programs to create safer, smarter workplaces worldwide.
            </p>
            <ul>
              <li>
                Predictive hazard modeling using real-time operational data streams to flag emerging risks
              </li>
              <li>
                Immersive VR/AR scenarios that simulate both routine and emergency procedures for hands-on practice
              </li>
              <li>
                Mobile micro-learning modules—videos, quizzes, checklists—with push reminders for just-in-time reinforcement
              </li>
              <li>
                Automated certification tracking, email reminders, and exportable compliance reports for audits
              </li>
            </ul>
          </div>

          <div className="highlight-card">
            <h3>Vision</h3>
            <p>
              Empower businesses, professionals, and workers with the tools and knowledge needed to
              navigate the rapidly evolving safety landscape.
            </p>
            <ul>
              <li>
                Unified real-time KPI dashboards with drill-down from corporate to site-level metrics
              </li>
              <li>
                AI-driven risk alerts and “what-if” simulations that stress-test process changes under varied conditions
              </li>
              <li>
                Seamless integration with ERP, HMIS, IoT sensors, and third-party data sources for a holistic safety ecosystem
              </li>
              <li>
                Scalable, cloud-native platform accessible on desktop, tablet, and mobile—anywhere, anytime
              </li>
            </ul>
          </div>

          <div className="highlight-card">
            <h3>Values</h3>
            <p>
              Innovation · Integrity · Collaboration · Excellence in delivering high-impact, scalable
              safety solutions.
            </p>
            <ul>
              <li>
                Data-driven decision making powered by advanced analytics, machine learning, and heatmaps
              </li>
              <li>
                Commitment to ESG and sustainability through transparent metrics and continuous improvement
              </li>
              <li>
                Iterative enhancement via user feedback loops, adaptive content, and performance scoring
              </li>
              <li>
                Audit-ready, exportable reporting with automated logs, version control, and stakeholder notifications
              </li>
            </ul>
          </div>
        </section> */}



        {/* Footer Contact */}
        <footer className="aboutus-footer">
          <div className="contact-item">
            <span className="contact-label">Email</span>
            <span className="contact-value">l.mcguire@galaxyedgesafety.com</span>
          </div>
          <div className="contact-item">
            <span className="contact-label">Phone</span>
            <span className="contact-value">604-308-4537</span>
          </div>
        </footer>
      </div>
      </div>
    );
  }
}
