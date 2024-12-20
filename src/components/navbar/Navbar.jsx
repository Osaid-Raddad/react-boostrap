import React from 'react'
import './navbar.css'
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">START BOOTSTRAP</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link fw-bold active" aria-current="page" href="#">PORTFOLIO</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#">ABOUT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#">CONTACT</a>
              </li>
            </ul>
           
          </div>
        </div>
      </nav>

    </>
  )
}
