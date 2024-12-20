import React from 'react';
import cabin from '../../assets/portfolio/cabin.png'; 
import cake from '../../assets/portfolio/cake.png';
import circus from '../../assets/portfolio/circus.png';
import game from '../../assets/portfolio/game.png';
import safe from '../../assets/portfolio/safe.png';
import submarine from '../../assets/portfolio/submarine.png';
import './portfolio.css'
export default function Portfolio() {
  return (
    <div className="container text-center py-5">
      <h1 className="h mb-4 fw-bold">PORTFOLIO</h1>
      <div className="d-flex justify-content-center align-items-center mb-4">
        <div className="horizental-line2  me-3" ></div>
        <div className="star-icon " >★</div>
        <div className="horizental-line2  ms-3" ></div>
      </div>
      <div className="row g-4">
        <div className="col-md-4 col-sm-6">
          <div className="card">
            <img src={cabin} className="card-img-top rounded" />
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="card">
            <img src={cake} className="card-img-top rounded" />
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="card">
            <img src={circus} className="card-img-top rounded" />
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="card">
            <img src={game} className="card-img-top rounded" />
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="card">
            <img src={safe} className="card-img-top rounded" />
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="card">
            <img src={submarine} className="card-img-top rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}
