import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from 'react-scroll'; // Ensure you import Link from 'react-scroll'

import './App.css';
import './styles/VR.css';
import './styles/TakeAction.css';

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import VR from "./pages/VR";
import ActionApproach from "./pages/ActionApproach";
import ContactUs from "./pages/ContactUs";
import Footer from "./pages/footer";
import RequestDemo from "./pages/demo";
import ReachOutNow from "./pages/ReachOut";
import AboutUS from "./pages/AboutUs";  
import Mission from "./pages/Mission";
import Services from "./pages/Services";
import Prime360 from "./pages/Prime360";
import Training from "./pages/Training";
import ImmersiveLearning from "./pages/ImmersiveLearning";
import AIDriven from "./pages/AIDriven-Safety-solutions";
import ESG from "./pages/ESG";
import EventsCultureShifts from "./pages/Events-Culture-shifts";
import Partnership from "./pages/Partnership";

// FORM IMPORTS
import TargetedOHS from "./Forms/TargetedOHS";
import PRIME360 from "./Forms/PRIME360";

export default function App() {
  
  return (
    <>
      <Header />

      <Routes>
        {/* HOME ROUTE WITH HOME, ABOUT $ TAKEACTION */}
        <Route path="/home" element={
          <>
          <div id="home"><Home/></div>
          <div id="about-us"><About/></div>
          <div id="learn_more"><VR/></div>
          <ActionApproach/> 
          <ReachOutNow/>
          <div id="learn_more"><RequestDemo/></div>
          <div id = "resources"><Footer/></div>
          </>
        }/>



      {/* STANDALONE ABOUT-US PAGE */}
      <Route path="/about-us" element={<AboutUS />} />
      <Route path="/our-mission" element={<Mission />} />
      <Route path="/our-services" element={<Services />} />
      <Route path="/prime360" element={<Prime360 />} />
      <Route path="/PRIME360-form" element={<PRIME360 />} />
      <Route path="/training" element={<Training />} />
      <Route path="/TargetedOHS" element={<TargetedOHS />} />
      <Route path="/Immersive-Learning" element={<ImmersiveLearning />} />
      <Route path="/ESG_Stratergy_Performance" element={<ESG />} />
      <Route path="/ai-driven-safety-solutions" element={<AIDriven />} />
      <Route path="/EventsCultureShifts" element={<EventsCultureShifts />} />
      <Route path="/partnerships" element={<Partnership />} />
      <Route path="/contact" element={
          <div id="contact-us"> 
            <ContactUs />
          </div>
        } />
      </Routes>
    </>   
  );
}
