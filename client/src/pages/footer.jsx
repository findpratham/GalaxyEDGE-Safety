import React from "react";
import { Link } from 'react-scroll'; // Ensure you import Link from 'react-scroll'
import { FiMail } from 'react-icons/fi';        // mail/envelope icon
import { FaTwitter } from 'react-icons/fa';     // “X” (formerly Twitter) icon
import { FaInstagram } from 'react-icons/fa';   // Instagram icon

export default function Footer() {
  return (






    <div className="footer-container">

    <p className="footer-text">
        <span className="footer-item">
            <FiMail size={24} />
            <span className="footer-item-text">l.mcguire@galaxyedgesafety.com</span>
        </span>
        <span className="footer-item">
            <FaInstagram size={24} />
            <span className="footer-item-text">@galaxyedgesafety</span>
        </span>
        <span className="footer-item">
            <FaTwitter size={24} />
            <span className="footer-item-text">@galaxyedgesafety</span>
        </span>
    </p>


    </div>


      
  )
}
