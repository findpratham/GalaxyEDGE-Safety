// src/pages/AboutUS.jsx
import React, { Component } from 'react';
import '../styles/AboutUS.css';


export default class AboutUS extends Component {
  render() {
    return (
      <div className="aboutus-container">
        {/* Hero / Intro */}
        <header className="aboutus-hero">
        <img src="/assets/AboutUsImages/tablogo.jpg" alt="GalaxyEDGE Safety Logo" className="aboutus-logo" />
        
        {/* right: all hero text */}
        <div className="aboutus-hero-content"> 
            <h1>About Us</h1>
            <h2>GalaxyEDGE Safety Inc.</h2>
            
        </div>
          
        </header>

        <section>
          <div className="aboutus-hero-content"> 
            <p>
            <p>
                GalaxyEDGE Safety Inc. is at the forefront of advancing health and safety 
                protocols, leveraging cutting-edge technology and innovation to transform 
                workplace safety. We understand the importance of protecting our workforce 
                while ensuring operational efficiency and compliance in a rapidly evolving 
                global landscape. Our solutions span regulatory compliance, workforce mobility, 
                and digital safety training, tailored for industries across the globe.
            </p>
            </p>
          </div>
        </section>

        {/* Founder Profile */}
        <section className="aboutus-founder">
            
          <div className="founder-text">
            
            <br></br>
            <br></br>
            <h3>Lisa McGuire, ICD.D, CRSP</h3>
            <h4>A Transformational Leader in Workplace Safety</h4>
            <p>
              Lisa McGuire, ICD.D, CRSP, is a distinguished occupational health and safety leader
              with 17+ years of executive experience in driving industry transformation, digital
              innovation, and global standardization. As Founder & CEO of the Manufacturing Safety
              Alliance of BC, she led an industry-wide initiative that cut food-sector injury rates
              by 40% and grew membership from 800 to 3,000 companies. She also created Safety Meta
              World, an immersive, game-based training subsidiary that increased learning
              effectiveness by 60% and broadened safety education access worldwide. Over eight
              years, Lisa directed the development of Canada’s first harmonized OHS practitioner
              standard for manufacturing—funded by the BC Ministry of Post-Secondary Education and
              aligned with IOSH and INSHPO—integrating business acumen, cybersecurity, data-driven
              decision-making, psychological health, and leadership into professional practice.
              To embed proactive safety culture at the top, she founded the Executive Health &
              Safety Council of BC, fostering executive accountability and strategic governance in
              workplace health and safety. An accredited ICD.D corporate director, Lisa has
              influenced national and international OHS regulations and governance frameworks. She is
              now partnering with a leading digital technology firm to launch an AI-powered OHS
              Assistant, a pioneering tool designed to elevate global workplace safety performance.
            </p>
          </div>

          <div className="founder-profile-card">
            <div className="founder-image">
              <img src="/assets/LisaMcGuire.jpg" alt="Lisa McGuire" />
            </div>

            <div className="founder-stats">
              <div className="stat">
                <span className="stat-number">17+</span>
                <span className="stat-label">years experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">3,000</span>
                <span className="stat-label">member businesses</span>
              </div>
            </div>
          </div>
        </section>

        {/* Mission / Vision / Values & More */}
        <section className="aboutus-highlights">
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
</section>



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
    );
  }
}
