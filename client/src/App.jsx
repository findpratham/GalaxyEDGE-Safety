import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from 'react-scroll'; // Ensure you import Link from 'react-scroll'

import './App.css';
import './styles/VR.css';
import './styles/TakeAction.css';

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import TakeAction from "./pages/TakeAction";
import TakeAction1 from "./pages/TakeAction1";
import VR from "./pages/VR";
import ContactUs from "./pages/ContactUs";
import Footer from "./pages/footer";
import SuccessStories from "./pages/successStories";
import RequestDemo from "./pages/demo";

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
          <div id="product-services"><TakeAction/></div>
          <div id="learn_more"><TakeAction1/></div>
          <div id= "learn_more"><SuccessStories/></div>
          <div id="learn_more"><RequestDemo/></div>
          <div id = "resources"><Footer/></div>

          </>
        } />



      <Route path="/contact" element={
          <div id="contact-us">
            
            <ContactUs />
          </div>
        } />
      </Routes>
    </>   
  );
}
