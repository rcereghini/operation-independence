import React from 'react'
import '../styles/register.css'

import logo from "../images/OpinAdsLogo.png";

const Register = ({ onRouteChange }) => {
  return (
    <form>
      <img src={logo} className="logo" onClick={() => onRouteChange('home')}/>
      <h2 className="display-5 getStarted">Get Started!</h2>
      <div className="form-group">
        <label for="name">Name</label>
        <input type="text" className="form-control inputWidthTemp" id="inputName" aria-describedby="nameHelp" placeholder="Enter name"/>
      </div>
      <div className="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control inputWidthTemp" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" className="form-control inputWidthTemp" id="exampleInputPassword1" placeholder="Password"/>
      </div>
      <input
        onClick={() => onRouteChange('home')}
        type="submit"
        className="btn btn-primary inputWidthTemp signInButton"
        value="Begin Operation Independence"
      />
    </form>
  )
}

export default Register
