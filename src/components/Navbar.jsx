import React from 'react';

function Navbar() {
  return (
      <nav id="navbar" className="navbar navbar-expand-lg navbar-light fixed-top seta-navbar">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#home">
          <span className="seta-logo">
            <img
                src="/seta_logo.webp"
                alt="Seta logo"
                style={{ height: '50px', marginRight: '8px', verticalAlign: 'middle' }}
            />
            SETA
          </span>
          </a>
          <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav align-items-lg-center">
              <li className="nav-item"><a className="nav-link" href="#home">Գլխավոր</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">Մեր Մասին</a></li>
              <li className="nav-item"><a className="nav-link" href="#features">Հատկություններ</a></li>
              <li className="nav-item"><a className="nav-link" href="#services">Ծառայություններ</a></li>
              <li className="nav-item"><a className="nav-link" href="#pricing">Փաթեթներ</a></li>
              <li className="nav-item"><a className="nav-link" href="#team">Թիմ</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Կապ</a></li>
              <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
                <a href="#contact" className="btn btn-primary seta-btn-sm">Ստանալ առաջարկ</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
