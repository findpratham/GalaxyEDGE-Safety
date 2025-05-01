import React from 'react';
import '../styles/VR.css'; // You can define additional specific styles for VR if needed
import { Link } from "react-router-dom";  

export default function SuccessStories() {
    return (
<div className="vr-case-studies">
  <h2 className="typography-section-headline">Success Stories</h2>
  <div className="vr-testimonials">
    <div className="vr-testimonial">
      <p>"Our employees are now better prepared for on-the-job risks, and we've seen a significant reduction in workplace incidents."</p>
      <span>- Safety Manager, Global Tech Corp.</span>
    </div>
    <div className="vr-testimonial">
      <p>"Virtual Reality has made our safety training engaging, interactive, and more effective than ever before."</p>
      <span>- HR Director, Innovative Manufacturing</span>
    </div>
    <div className="vr-testimonial">
      <p>"Since introducing VR simulations, we’ve cut incident response times by over 40%, keeping everyone safer on site."</p>
      <span>- Safety Director, Acme Manufacturing</span>
    </div>
    <div className="vr-testimonial">
      <p>"The immersive VR modules boosted retention and confidence across all teams—our training ROI has never been higher."</p>
      <span>- Operations Lead, FutureTech Industries</span>
    </div>
    <div className="vr-testimonial">
      <p>"By visualizing complex procedures in VR, new hires achieve full proficiency 50% faster, and our overall compliance rates have soared."</p>
      <span>- Training Manager, NovaTech Industries</span>
    </div>
  </div>



  {/* ─────────── Request Demo CTA ───────────
  <div className="request-demo-container">
        <Link to="/contact" className="request-demo-button">
          Request a Demo
        </Link>
      </div> */}

</div>

    );
}

