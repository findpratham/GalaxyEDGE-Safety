import React from 'react';
import '../styles/ProductServices.css';

const features = [
  {
    icon: '/assets/icons/vr.svg',
    title: 'VR/AR Training Sims',
    text: 'Immersive scenarios—from heavy-equipment operation to emergency response—plus mobile micro-learning to certify competencies.'
  },
  {
    icon: '/assets/icons/ai.svg',
    title: 'AI-Powered Risk Analytics',
    text: 'Machine-learning models forecast incident hotspots and automate root-cause reporting for proactive safety management.'
  },
  {
    icon: '/assets/icons/dashboard.svg',
    title: 'Real-Time Dashboards',
    text: 'Unified KPI views with drill-down, configurable alerts, and integration connectors for ERP/HMIS/IoT data.'
  },
  {
    icon: '/assets/icons/automation.svg',
    title: 'Incident Automation',
    text: 'Digital forms, voice-to-text capture, root-cause workflows, and closed-loop verification to streamline reporting.'
  },
];

export default function ProductServices() {
  return (
    <div className="ps-container">
     

      <main className="ps-page">
        {/* Hero */}
        <section className="ps-hero">
          <h1>Products &amp; Services</h1>
          <p>
            Explore our cutting-edge solutions designed to enhance workplace safety,
            streamline compliance, and empower your teams.
          </p>
          <button className="ps-primary-cta">Get Started</button>
        </section>

        {/* Feature Cards */}
        <section className="ps-cards">
          {features.map((f) => (
            <div key={f.title} className="ps-card">
              <img src={f.icon} alt={f.title} className="ps-card-icon" />
              <h2 className="ps-card-title">{f.title}</h2>
              <p className="ps-card-text">{f.text}</p>
            </div>
          ))}
        </section>

        {/* Secondary CTA */}
        <section className="ps-secondary-cta">
          <p>Ready to elevate your safety culture?</p>
          <button className="ps-secondary-button">Sign Up Now</button>
        </section>

        {/* Footer */}
        {/* <footer className="ps-footer">
          <div className="ps-footer-links">
            <a href="/contact">Contact Us</a>
            <a href="/resources">Resources</a>
            <a href="/privacy">Privacy Policy</a>
          </div>
          <small>© {new Date().getFullYear()} GalaxyEDGE Safety Inc.</small>
        </footer> */}
      </main>
    </div>
  );
}
