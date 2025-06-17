import React, { useEffect, useRef } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import ReachOutNow from "./ReachOut";
import "../App.css"
import "../styles/Services.css"

export default function Services() {
  
  return (
    <div className = "Services-container">
      <ReachOutNow/>
    <h1>Services</h1>
    </div>
  );
}