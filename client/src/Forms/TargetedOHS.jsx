/* AppleLikeForm.jsx */
import React, { useState, useEffect, useRef, useCallback } from 'react';
import './TargetedOHS.css';

const images = [
    '/assets/image1.jpg',
    '/assets/image2.jpg',
    '/assets/image3.jpg',
    '/assets/image4.jpg'
  ];

  const questions = [
    {
        id: 'section-1',
        type: 'title',
        text: 'Organization Information'
    },
    {
        id: 1,
        text: 'Organization Name ',
        input: true,
        placeholder: 'Enter your organisation’s name'
    },
    {
        id: 2,
        text: 'Primary Contact Name',
        input: true,
        placeholder: 'Enter your Primary contact’s name'
    },
    {
        id: 3,
        text: 'Job Title / Department',
        input: true,
        placeholder: 'Enter your Job Title / Department:'
    },
    {
        id: 4,
        text: 'Email Address',
        input: true,
        placeholder: 'eg: VpM0B@example.com'
    },
    {
        id: 5,
        text: 'Phone Number',
        input: true,
        placeholder: 'eg: +1 (123) 456-7890'
    },
    {
        id: 6,
        text: 'Number of Employees',
        input: true,
        placeholder: 'Enter your Number of Employees'
    },
    {
        id: 7,
        text: 'Location(s) of Operations',
        input: true,
        placeholder: 'Enter your Location(s) of Operations'
    },
    {
        id: 8,
        text: 'Industry Sector:',
        input: true,
        placeholder: 'Enter your Industry Sector'
    },
    {
        id: 9,
        text: 'Preferred Contact Method?',
        options: ['Email', 'Phone', 'Virtual Meeting']
    },
    // Section 2
    {
        id: 'section-1',
        type: 'title',
        text: 'Primary Focus Areas'
    },
    {
      id: 10,
      text: 'Please select one or more key areas where your organization is seeking support:',
      options: ['Reduce incident or injury rates', 'Leadership and culture transformation (includes strategy, business integration, and governance)', 'Psychological health and psychosocial risk support', 'Training – update, improve engagement or effectiveness', 'Develop immersive or scenario-based learning', 'Regulatory compliance', 'Gap Analysis/Audit or compliance support (COR / ISO / CSA/ESG)', 'Contractor or multi-site safety coordination', 'Exploring AI tools to improve safety and operational efficiency', 'Other'],

    },
    // Section 3
    {
        id: 'section-1',
        type: 'title',
        text: 'Describe Your Current Challenge or Concern'
    },
    {
      id: 11,
    //   text: 'Number of employees',
      input: true,
      placeholder: 'e.g. 250'
    },
    {
        id: 'section-1',
        type: 'title',
        text: 'Desired Outcomes'
    },
    {
      id: 12,
      input: true,
      placeholder: 'e.g. 250'
    },
    {
        id: 'section-1',
        type: 'title',
        text: 'Urgency of Support Needed'
    },
    {
      id: 13,
      text: 'How soon do you need support or intervention?',
      options: ['Immediate (within 30 days)', 'Short-term (1–3 months)', 'Medium-term (3–6 months)', 'Long-term or exploratory']
    },
    {
        id: 'section-1',
        type: 'title',
        text: 'Interested in Exploring the PRIME360™ System Standard?'
    },
    {
      id: 14,
    //   text: 'Where do you find product information?',
      options: ['Yes – for future alignment or development', 'No – not at this time', 'Possibly – would like more information']
    }
  ];



export default function TargetedOHS() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
    // FOR THE EMAIL:

    const [touched, setTouched] = useState(false);

    // FORM FORMATTING:
    const [answers, setAnswers] = useState({});

    const handleCheckboxChange = (qId, opt) => {
        setAnswers(prev => {
          const current = prev[qId] || [];
          const next = current.includes(opt)
            ? current.filter(x => x !== opt)
            : [...current, opt];
          return { ...prev, [qId]: next };
        });
      };

    const handleChange = (qId, value) => {
      setAnswers(prev => ({ ...prev, [qId]: value }));
    };

  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 5000; // 5 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, delay);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = idx => {
    setCurrent(idx);
  };

//   FOR THE MAIL:

const handleSubmit = useCallback((e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`OHS Request — ${answers[1] || 'Organization'} / ${answers[2] || 'Contact'}`
        
    );
    let body = '';

    questions.forEach(q => {
      if (q.type !== 'title') {
        const answer = answers[q.id];
        if (Array.isArray(answer)) {
          body += `${q.text}: ${answer.join(', ')}\n\n`;
        } else if (answer) {
          body += `${q.text}: ${answer}\n\n`;
        }
      }
    });

    const mailto = 
      `https://mail.google.com/mail/?view=cm&tf=1`
      + `&su=${subject}`
      + `&body=${encodeURIComponent(body)}`;

    window.open(mailto, '_blank');
  }, [answers]);

//   TO ENSURE BOTH BOXES ARE CHECKED FOR THE TERMS AND CONDITION:
    const onSubmit = e => {
        e.preventDefault();
        // mark that we tried to submit
        setTouched(true);
        // check both checkboxes
        if (!answers.agreeTerms || !answers.consentContact) return;
        // otherwise call your existing handler
        handleSubmit(e);
    };
  return (
    // SLIDESHOW:

    // QUESTIONS:
    <div className="OHS-container">
        <div className = "hero-heading">
          <h1>
            Request for Targeted OHS Support
          </h1>
        </div>

        <div className="OHS-section-header">
        <img src="/assets/tablogo.jpg" alt="GalaxyEDGE Safety Logo" className="vision-logo" />
        <br />
          <p>
            At GalaxyEDGE Safety Inc. (GESI), we deliver more than safety consulting—we build
            integrated strategies that lead to performance. Whether your organization is focused on
            improving training, reducing incident rates, aligning with regulations, or leveraging AI
            innovation, our targeted support model starts with understanding your specific needs.
            Please complete this form to help us identify how we can best support your goals.          </p>
        </div>

        {/* <div className="slideshow">
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
        </div> */}


        <form className="apple-form" onSubmit={onSubmit} noValidate>
            {questions.map(q => (
                q.type === 'title' ? (
                <h2 key={q.id} className="section-title">{q.text}</h2>
                ) : (
                <div
                    key={q.id}
                    className={`apple-form-question${q.input && q.id <= 9 ? ' text-inline' : ''}`}
                >
                    <h3 className="question-title">{q.text}</h3>

                    {q.id === 10 ? (
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

                        { (answers[10] || []).includes('Other') && (
                        <input
                            type="text"
                            name="question-10-other"
                            placeholder="Please specify"
                            value={answers['10-other'] || ''}
                            onChange={e => handleChange('10-other', e.target.value)}
                            className="text-input"
                        />
                        )}
                    </>
                    ) : q.input ? (
                    <input
                        type="text"
                        name={`question-${q.id}`}
                        placeholder={q.placeholder}
                        value={answers[q.id] || ''}
                        onChange={e => handleChange(q.id, e.target.value)}
                        className="text-input"
                    />
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
                    )}
                </div>
                )
            ))}

            <button type="submit" className="submit-button">Submit</button>

            {/* Terms & Conditions Section */}
            <div
            className={`terms-section${
                touched && (!answers.agreeTerms || !answers.consentContact)
                ? " terms-error"
                : ""
            }`}
            >
            <h3 className="terms-title">Consent &amp; Privacy Acknowledgement</h3>
            <p className="terms-text">
                By submitting this form, you agree that the information provided may be
                used by GalaxyEDGE Safety Inc. to respond to your inquiry. Your
                information will be handled in accordance with our privacy policy and
                will not be shared externally without your permission.
            </p>
            <div className="terms-checkboxes">
                <label>
                <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={!!answers.agreeTerms}
                    onChange={e => handleChange("agreeTerms", e.target.checked)}
                />
                I agree to the{" "}
                <a href="/terms-of-use" target="_blank" rel="noopener">
                    Terms of Use
                </a>{" "}
                and{" "}
                <a href="/privacy-policy" target="_blank" rel="noopener">
                    Privacy Policy
                </a>
                </label>
                <label>
                <input
                    type="checkbox"
                    name="consentContact"
                    checked={!!answers.consentContact}
                    onChange={e => handleChange("consentContact", e.target.checked)}
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
            </form>

    </div>
  );
}