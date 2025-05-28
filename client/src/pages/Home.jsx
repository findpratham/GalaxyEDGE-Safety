import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import "../App.css";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home-container">
      {/* Top scroll arrow */}
      <Link to="about-us" smooth duration={1000}>
        <div className="scroll-down-arrow">
          <svg viewBox="0 0 16 16" aria-hidden="false">
            <path
              d="M4 6l4 4 4-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>
      </Link>

      {/* Full-screen hero image */}
      <div className="parallax-image full-screen-image">
        <img
          src="/assets/MainPage/final.jpg"
          alt="Main background"
          className="parallax-image-img"
        />

        {/* <div className="logo">
          <img
            src="/assets/logo.jpg"
            alt="GalaxyEDGE Safety Inc."
            className="logo-img"
          />
        </div> */}

        <div className="content">
          <h1 className="heading">
            Advancing Global Health <br />
            <span className="sub-heading">
              {" "}
              & Safety Through Innovation
            </span>
          </h1>
          <p className="subtext">
            Leveraging groundbreaking research, technology, partnerships, and
            <br />
            <span className="sub-subtext">
              innovation to transform occupational health & safety worldwide
            </span>
          </p>
          <div className="cta-buttons">
            <Link to="learn_more" smooth duration={900}>
              <button className="cta-button learn-more">
                Learn More
              </button>
            </Link>
            <NavLink to="/contact" end>
              <button className="cta-button contact-us">
                Contact Us
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      
    </div>
  );
}
