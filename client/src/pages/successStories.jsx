import React from 'react';
import '../styles/VR.css'; // You can define additional specific styles for VR if needed
import { Link } from "react-router-dom";  

export default function SuccessStories() {
    return (
<div className="vr-case-studies">
  <h2 className="take-action-heading">Success Stories</h2>
    {/* <p>
      Explore our cutting-edge solutions designed to enhance workplace safety,
      streamline compliance, and empower your teams.
    </p> */}
  <div className="vr-testimonials">
  <div className="vr-testimonial">
    <h1>❝</h1>
    <p>
      Our employees are now better prepared for on-the-job risks, and we've seen a significant
      45% reduction in workplace incidents over the past year. The intuitive VR scenarios allow
      teams to rehearse emergency stops, chemical spill protocols, and confined-space entries
      without taking real equipment offline.
    </p>
    <span>– Safety Manager, Global Tech Corp.</span>
  </div>

  <div className="vr-testimonial">
    <h1>❝</h1>
    <p>
      Virtual Reality has made our safety training truly immersive, allowing team members to practice
      high-risk procedures—like confined-space entry and heavy-equipment lockout/tagout—in a safe,
      controlled environment. Completion rates climbed from 65% to 98% in just three months thanks to
      scenario-based modules that adapt in real time to each learner’s performance. Learner feedback
      scores now average 4.8/5.0 for realism and retention, with 90% of participants reporting they
      feel “confident to perform on the job” after just two VR sessions. We’ve also seen a 25%
      reduction in classroom hours and a 35% drop in hands-on training incidents, delivering
      both efficiency gains and safer outcomes across our operations.
    </p>
    <span>– HR Director, Innovative Manufacturing</span>
  </div>

  <div className="vr-testimonial">
    <h1>❝</h1>
    <p>
    Since introducing VR simulations, we’ve cut incident response times by over 40%, keeping
      everyone safer on site. New operators master heavy-equipment lockout/tagout in half the
      time, and we’ve eliminated all first-year lost-time injuries in our primary facility.
    </p>
    <span>– Safety Director, Acme Manufacturing</span>
  </div>

  <div className="vr-testimonial">
    <h1>❝</h1>
    <p>
      The immersive VR modules boosted retention and confidence across all teams—our training ROI has never been higher.
      During a six-month rollout, we recorded a 70% improvement in task accuracy on complex assembly lines, a 30% reduction
      in supervision hours for newly onboarded technicians, and a 25% drop in first-time error rates. Learner surveys rated
      the VR scenarios 4.9 out of 5 for realism and usability, and supervisors noted a 40% decrease in instructor-led
      classroom time. We also cut certification cycle times from two weeks to just four days, freeing up over 1,200 trainer
      hours and accelerating new hires into full production while maintaining the highest safety and quality standards.
      In parallel, we saw a 15% reduction in equipment downtime due to operator mistakes, translating into an estimated
      $500,000 in annual cost savings. Cross-functional teams—from maintenance to quality assurance—reported a 50% increase
      in confidence when responding to emergency drills. Looking ahead, we’re scaling the VR rollout to five additional
      facilities, projecting an incremental 20% lift in overall operational efficiency and a further decrease in safety
      incidents company-wide.
    </p>

    <span>– Operations Lead, FutureTech Industries</span>
  </div>

  <div className="vr-testimonial">
    <h1>❝</h1>
    <p>
      By visualizing complex procedures in VR, new hires achieve full proficiency 50% faster—reducing
      onboarding time from 8 weeks to just 4. Compliance rates have soared to 99.2%, with zero critical
      nonconformities in our latest ISO and OSHA audits. Auditors specifically praised our digital
      training records, noting the automatic time stamps, interactive scenario-based assessments, and
      detailed performance analytics as “best in class.” Managers now track competency scores in
      real time through secure dashboards, and corrective training paths are generated instantly when
      gaps are detected, ensuring every team member maintains peak readiness on the floor.
    </p>
    <span>– Training Manager, NovaTech Industries</span>
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

