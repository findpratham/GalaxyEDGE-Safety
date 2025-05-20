import react, { useEffect,useState } from "react";
import { Link } from 'react-scroll'; // Ensure you import Link from 'react-scroll'
import '../App.css';
import { NavLink } from 'react-router-dom';  // ← pull in NavLink
//import mainVideo from "/assets/MainPage/main8.mp4";


const Home = () => {

  const [scrollPosition, setScrollPosition] = useState(0);



  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // SHRINKING PART:
  const scaleFactor = 1 - scrollPosition / 4000; // Shrink the image as you scroll
  // only round if we've scrolled more than 50px
  const shouldRound = scrollY < 1;


  return (
    
    <div className="home-container">

      {/* SCROLL DOWN ARROW */}

      <Link to="vr-section" smooth={true} duration={1000}>
        <div className="scroll-down-arrow">
          {/* minimalist down‐chevron */}
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
      </Link>

      {/* Parallax Image with Shrinking Effect */}
      <div 
        className="parallax-image"
        style={{
          transform: `scale(${Math.max(scaleFactor, 0.93)})`, // Apply the shrinking effect
          transition: "transform 0.3s ease-out", // Smooth transition for scaling
          borderRadius: shouldRound < 1 ? "1.5rem" : "0",  // <-- only round when scaled
          overflow: "hidden"                             
        }}
      >
        <img src="/assets/MainPage/final.jpg" alt="Main background" className="parallax-image-img" />




      <div className="logo">
          <img src="/assets/logo.jpg" alt="GalaxyEDGE Safety Inc." className="logo-img" />
      </div>

      <div className="content">
          <h1 className="heading">
            Advancing Global Health <br />
            <span className="sub-heading"> & Safety Through Innovation</span>
          </h1>
          <br />
            <p className="subtext">
              Leveraging groundbreaking research, technology, partnerships, and<br />
              <span className="sub-subtext">innovation to transform occupational health & safety worldwide</span>
            </p>
          <br />
          <div className="cta-buttons">
            {/* Learn More Button with Smooth Scroll */}
              <Link to="learn_more" smooth={true} duration={900}>
                <button className="cta-button learn-more">
                  Learn More
                </button>
              </Link>
              <NavLink to="/contact" end>
                <button className="cta-button contact-us" >
                  Contact Us
                </button>
              </NavLink>
            
          </div>
         
      </div>

      <Link to="about-us" smooth={true} duration={1000}>
        <div className="scroll-down-arrow">
          {/* minimalist down‐chevron */}
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
      </Link>

        

    </div>

    

  
        </div>
  );
}

export default Home;