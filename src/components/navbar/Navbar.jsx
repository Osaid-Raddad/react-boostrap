import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <Link className="navbar-brand fw-bold" to={'/'}>START BOOTSTRAP</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link fw-bold active" aria-current="page" to={'/'}>PORTFOLIO</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to={'/about'}>ABOUT</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to={'/contact'}>CONTACT</Link>
              </li>
            </ul>
           
          </div>
        </div>
      </nav>

    </>
  )
}
