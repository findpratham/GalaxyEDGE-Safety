// src/pages/ContactUs.jsx
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/contactus.css';

export default function ContactUs() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM"
  ];

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, message } = e.target.elements;
    const dateStr = date.toLocaleDateString();
  
    const subject = encodeURIComponent(`Contact Request from ${name.value}`);
    const body = encodeURIComponent(
      `Preferred Date: ${dateStr}\n` +
      `Preferred Time: ${time}\n\n` +
      `Name: ${name.value}\n` +
      `Email: ${email.value}\n\n` +
      `Message:\n${message.value}`
    );
  
    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=prathampaliwal02@gmail.com` +
      `&su=${subject}` +
      `&body=${body}`;
  
    window.open(gmailUrl, "_blank");
  };

  return (
    <main className="contact-section">
      <div className="contact-container">
        {/* Form Pane */}
        <article className="contact-form">
          <h1 className="contact-heading">Contact Us</h1>
          <br/>
          <br/>
          <p className="contact-subheading">
            Pick a date & time below and send us a message—let’s schedule a time to connect.
          </p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Your name" required />

            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" placeholder="How can we help?" />

            <button type="submit" className="contact-submit">
              Send Message
            </button>
            
          </form>
        </article>

        {/* Calendar + Time Picker Pane */}
        <aside className="contact-calendar">
          <Calendar onChange={setDate} value={date} />
            {/* <h2>Select a Time</h2> */}
          <div className="time-picker">
            
            
            {timeSlots.map(slot => (
              <label 
                key={slot} 
                className={`time-option${time === slot ? " selected" : ""}`}
              >
                <input
                  type="radio"
                  name="time"
                  value={slot}
                  checked={time === slot}
                  onChange={() => setTime(slot)}
                  required
                />
                {slot}
              </label>
            ))}
          </div>
        </aside>
      </div>
    </main>
  );
}
