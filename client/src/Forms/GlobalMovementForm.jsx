/* src/components/GlobalMovementForm.jsx */
import React, { useState, useEffect, useRef, useCallback } from 'react';
import './GlobalMovementForm.css';

const images = [
  '/assets/image1.jpg',
  '/assets/image2.jpg',
  '/assets/image3.jpg',
  '/assets/image4.jpg'
];

const questions = [
  // Section 1
  {
    id: 'section-1',
    type: 'title',
    text: 'Contact Information'
  },
  {
    id: 1,
    text: 'Full Name',
    input: true,
    placeholder: 'Enter your Full Name'
  },
  {
    id: 2,
    text: 'Organization / Affiliation',
    input: true,
    placeholder: 'Enter your Organization/Affiliation’s name'
  },
  {
    id: 3,
    text: 'Job Title / Role',
    input: true,
    placeholder: 'Enter your Job Title / Role'
  },
  {
    id: 4,
    text: 'Country / Region',
    input: true,
    placeholder: 'eg: Canada'
  },
  {
    id: 5,
    text: 'Email',
    input: true,
    placeholder: 'eg: vpM0@example.com'
  },
  {
    id: 6,
    text: 'Phone Number (optional)',
    input: true,
    placeholder: 'Enter your Phone Number'
  },

  // Section 2
  {
    id: 'section-2',
    type: 'title',
    text: 'Select Your Level of Contribution'
  },
  {
    id: 9,
    // text: 'Please select one or more key areas where your organization is seeking support:',
    options: [
      'Informed Observer – I’d like to be kept informed with regular updates and progress reports.',
      'Advisor or Advocate – I’m interested in offering occasional input or sharing the initiative through my networks.',
      'Collaborating Partner – I’d be open to discussing partnership opportunities (e.g. regional outreach, technical input, policy alignment).',
      'Resource Contributor – My organisation may be able to offer technology, funding, time, or infrastructure support.',
      'Active Task Force Member – I’d like to participate in working groups or strategy sessions and help shape the development of the global access plan.'
    ]
  },
  {
    id: 'section-3',
    type: 'title',
    text: 'Optional: Areas of Expertise / Contribution'
  },
  {
    id: 10,
    // text: 'Please select one or more key areas where your organization is seeking support:',
    options: [
     'Training and instructional design',
    'Occupational health and safety',
    'Immersive or digital learning technology',
    'Public policy or regulatory frameworks',
    'Grant funding or philanthropic engagement',
    'Sector expertise (e.g., healthcare, construction, manufacturing)',
    'Community development / outreach',
    'Evaluation and research',
    'Other'
    ]
  },

  // Section 3
  {
    id: 'section-4',
    type: 'title',
    text: 'Why do you want to be part of this movement?'
  },
  {
    id: 11,
    text: 'Please describe:',
    input: true,
    placeholder: 'e.g. We have high turnover due to safety incidents…'
  },

  
];

export default function GlobalMovementForm() {
  const [answers, setAnswers] = useState({});
  const [touched, setTouched] = useState(false);
  const [current, setCurrent] = useState(0);
  const delay = 5000;

  // Slideshow auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, delay);
    return () => clearInterval(interval);
  }, []);

  // Handlers
  const handleCheckboxChange = (qId, opt) =>
    setAnswers(prev => {
      const curr = prev[qId] || [];
      return {
        ...prev,
        [qId]: curr.includes(opt) ? curr.filter(x => x !== opt) : [...curr, opt]
      };
    });

  const handleChange = (qId, value) =>
    setAnswers(prev => ({ ...prev, [qId]: value }));

  const goToSlide = idx => setCurrent(idx);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      const subject = encodeURIComponent(
        `OHS Request — ${answers[1] || 'Name'} / ${answers[2] || 'Organization'}`
      );
      let body = '';
      questions.forEach(q => {
        if (q.type !== 'title') {
          const ans = answers[q.id];
          if (Array.isArray(ans)) body += `${q.text}: ${ans.join(', ')}\n\n`;
          else if (ans) body += `${q.text}: ${ans}\n\n`;
        }
      });
      const mailto =
        `https://mail.google.com/mail/?view=cm&tf=1` +
        `&su=${subject}` +
        `&body=${encodeURIComponent(body)}`;
      window.open(mailto, '_blank');
    },
    [answers]
  );

  const onSubmit = e => {
    e.preventDefault();
    setTouched(true);
    if (!answers.agreeTerms || !answers.consentContact) return;
    handleSubmit(e);
  };

  return (
    <div className="GlobalMovementForm-container">
      {/* Hero & headings */}
      <div className="hero-heading">
        <h1>Join the Global Digital Technology Access Movement</h1>
      </div>
      <div className="Partnership-sub-heading">
        <h1>
        <br />
        
          Working Together to Expand Access to Immersive Health &amp; Safety Learning
        </h1>
      </div>

      {/* Vision section */}
      <div className="OHS-section-header">
        {/* <img src="/assets/tablogo.jpg" alt="GalaxyEDGE Safety Logo" className="vision-logo" /> */}
        <br />
          <p>
            <strong>Our Vision</strong> <br />
            We envision a future where immersive health and safety education becomes a catalyst for
            lasting cultural transformation—helping to build strong, resilient safety communities
            around the world. While this technology holds great promise, many regions and sectors still
            face barriers to access, and not all communities are benefiting equally from its potential.
            <br />
            <br />
            Through inclusive collaboration and shared learning, we aim to support a global effort that
            connects immersive education to local culture, community needs, and safety
            outcomes—empowering people where it matters most.
            <br />
            <br />
            <strong>The Challenge</strong> <br />
            We recognize that while interest in immersive learning is growing, cost, infrastructure, and
            capacity remain barriers in many regions. Our global task force is coming together to
            explore practical, scalable solutions that expand access and deliver meaningful
            outcomes—especially where the need is greatest.
            <br />
            <br />
            <strong>Our First Goal</strong> <br />
            To co-develop a Global Immersive Strategy within the next 8–12 months, designed to
            connect immersive education with community resilience, workforce safety, and cultural
            transformation.
            <br />
            <br />
            <br />
            <br />
          </p>
        </div>


      <div className="Partnership-sub-heading">
        <h1>Global Task Force – Interest &amp; Contribution Form</h1>
      </div>

      {/* Optional slideshow (commented out) */}
      {/*
      <div className="slideshow">
        <div
          className="slideshow-slider"
          style={{ transform: `translateX(${-current * 100}%)` }}
        >
          {images.map((src, idx) => (
            <div className="slide" key={idx}>
              <img src={src} alt={`Slide ${idx + 1}`} />
            </div>
          ))}
        </div>
        <div className="slideshow-dots">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`slideshow-dot${current === idx ? ' active' : ''}`}
              onClick={() => goToSlide(idx)}
            />
          ))}
        </div>
      </div>
      */}

      {/* Form */}
      <form className="apple-form" onSubmit={onSubmit} noValidate>
        {questions.map(q =>
          q.type === 'title' ? (
            <h2 key={q.id} className="section-title">
              {q.text}
            </h2>
          ) : (
            <div
              key={q.id}
              className={`apple-form-question${
                q.input && q.id <= 6 ? ' text-inline' : ''
              }`}
            >
              <h3 className="question-title">{q.text}</h3>

              {q.options ? (
                q.id === 10 ? (
                  <>
                    <ul className="options-list">
                      {q.options.map(opt => (
                        <li key={opt} className="options-item">
                          <label>
                            <input
                              type="checkbox"
                              name={`question-${q.id}`}
                              value={opt}
                              checked={(answers[q.id] || []).includes(opt)}
                              onChange={() => handleCheckboxChange(q.id, opt)}
                            />
                            <span className="custom-checkbox" />
                            {opt}
                          </label>
                        </li>
                      ))}
                    </ul>
                    {(answers[10] || []).includes('Other') && (
                      <input
                        type="text"
                        name="question-10-other"
                        placeholder="Please specify"
                        value={answers['10-other'] || ''}
                        onChange={e =>
                          handleChange('10-other', e.target.value)
                        }
                        className="text-input"
                      />
                    )}
                  </>
                ) : (
                  <ul className="options-list">
                    {q.options.map(opt => (
                      <li key={opt} className="options-item">
                        <label>
                          <input
                            type="radio"
                            name={`question-${q.id}`}
                            value={opt}
                            checked={answers[q.id] === opt}
                            onChange={() => handleChange(q.id, opt)}
                          />
                          <span className="custom-radio" />
                          {opt}
                        </label>
                      </li>
                    ))}
                  </ul>
                )
              ) : (
                <input
                  type="text"
                  name={`question-${q.id}`}
                  placeholder={q.placeholder}
                  value={answers[q.id] || ''}
                  onChange={e => handleChange(q.id, e.target.value)}
                  className="text-input"
                />
              )}
            </div>
          )
        )}

        {/* Terms & Conditions */}
        <div
          className={`terms-section${
            touched && (!answers.agreeTerms || !answers.consentContact)
              ? ' terms-error'
              : ''
          }`}
        >
          <h3 className="terms-title">Consent &amp; Privacy Acknowledgement</h3>
          <p className="terms-text">
            By submitting this form, you agree that the information provided may be
            used by GalaxyEDGE Safety Inc. to respond to your inquiry…
          </p>
          <div className="terms-checkboxes">
            <label>
              <input
                type="checkbox"
                name="agreeTerms"
                checked={!!answers.agreeTerms}
                onChange={e => handleChange('agreeTerms', e.target.checked)}
              />
              I agree to the{' '}
              <a href="/terms-of-use" target="_blank" rel="noopener">
                Terms of Use
              </a>{' '}
              and{' '}
              <a href="/privacy-policy" target="_blank" rel="noopener">
                Privacy Policy
              </a>
            </label>
            <label>
              <input
                type="checkbox"
                name="consentContact"
                checked={!!answers.consentContact}
                onChange={e => handleChange('consentContact', e.target.checked)}
              />
              I consent to being contacted by GESI about this request
            </label>
          </div>
          {touched && (!answers.agreeTerms || !answers.consentContact) && (
            <p className="error-text">
              Please accept both the Terms of Use & Privacy Policy and consent to be
              contacted.
            </p>
          )}
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}
