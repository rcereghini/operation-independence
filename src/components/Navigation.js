import React from 'react'
import navLogo from "../images/OpinAdsLogo.png";


function Navigation(props){
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img src={navLogo} width="150px" class="d-inline-block align-top" alt=""/>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#features">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#pricing">Pricing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
