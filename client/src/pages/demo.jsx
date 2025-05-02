// src/components/RequestDemo.jsx
import React from 'react';
import { Link } from 'react-router-dom';  // or 'react-scroll' if you’re linking within the page
import '../styles/VR.css';``
export default function RequestDemo() {
  return (
    <div className="request-demo-container">
      <Link to="/contact" className="request-demo-button">
        Request a Demo
      </Link>
    </div>
  );
}
