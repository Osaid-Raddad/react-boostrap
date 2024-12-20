import React from 'react';
import './about.css'; // Optional: Add custom styles if needed

export default function About() {
  return (
    <section className="about text-white text-center py-5">
      <div className="container">
        <h2 className="a-h  fw-bold">ABOUT</h2>
        <div className="d-flex justify-content-center align-items-center mb-4">
          <div className="horizental-line3 bg-white me-3"></div>
          <div className="star-icon2 text-white">★</div>
          <div className="horizental-line3 bg-white ms-3"></div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-4">
            <p>
              Freelancer is a free bootstrap theme created by Start Bootstrap. The
              download includes the complete source files including HTML, CSS, and
              JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
          <div className="col-md-6">
            <p>
              You can create your own custom avatar for the masthead, change the
              icon in the dividers, and add your email address to the contact form
              to make it fully functional!
            </p>
          </div>
        </div>
        <button className="btn btn-outline-light mt-4">
          <i className="fas fa-download me-2"></i> Free Download!
        </button>
      </div>
    </section>
  );
}

