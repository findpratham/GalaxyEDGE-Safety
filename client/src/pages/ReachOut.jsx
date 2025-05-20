// src/components/ReachOutNow.jsx
import React, { useState } from 'react';
import { FiMail } from 'react-icons/fi';

export default function ReachOutNow() {
  const [open, setOpen]       = useState(false);
  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus]   = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    const subject = `Contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    const gmailUrl = 
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=lamboferrari2025@gmail.com` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, '_blank', 'noopener');
  };

  return (
    <div className="reachout-container">
      {open && (
        <div className="reachout-widget">
          <div className="reachout-header">
            <h3>Galaxy Edge Safety</h3>
            <button
              className="reachout-close"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
          </div>
          <div className="reachout-body">
            <p className="reachout-intro">
              Hi! Let us know how we can help and we’ll respond shortly.
            </p>
            <form className="reachout-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name*"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email*"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                placeholder="How can we help?*"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                type="submit"
                className="reachout-send"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending…' : 'SEND'}
              </button>
            </form>
            
          </div>
        </div>
      )}

      {!open && (
        <button
          className="reachout-toggle"
          onClick={() => setOpen(true)}
          aria-label="Reach Out Now"
        >
          <FiMail size={28} color="#000000" strokeWidth={2.3} />
        </button>
      )}
    </div>
  );
}
