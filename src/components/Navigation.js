import React from "react";
import navLogo from "../images/OpinAdsLogo.png";

import "../styles/navigation.css";

const Navigation = ({ onRouteChange }) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top transparent navigation__parent-wrapper"
      id="fullScreenHeaderNav"
    >
      <a className="navbar-brand" href="/home">
        <img
          src={navLogo}
          className="logo"
          width="150px"
          className="d-inline-block align-top fullTransparent"
          alt=""
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#features">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#pricing">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#contact">
              Contact Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/signin">
              Sign In
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
