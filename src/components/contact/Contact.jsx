import React from 'react';
import './contact.css';

export default function Contact  ()  {
    return (
        <div className="contact-form-container">
          <h2 className="contact-form-title">CONTACT ME</h2>
          <div className="star3">
            <div className="horizental-line3"></div>
            <div className="symp-star3">★</div>
            <div className="horizental-line3"></div>
          </div>
          
          <div className="form-wrapper">
            <form>
              <div className="form-group">
                <input type="text" id="fullName" placeholder="Full name" />
              </div>
              <div className="form-group">
                <input type="email" id="email" placeholder="Email address" />
              </div>
              <div className="form-group"> 
                <input type="text" id="phone" placeholder="Phone number" />
              </div>
              <div className="form-group">  
                <textarea id="message" rows="4" placeholder="Message"></textarea>
              </div>
              <button type="submit" className="custom-btn">Send</button>
            </form>
          </div>
        </div>
      );
};


