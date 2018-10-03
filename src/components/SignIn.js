import React from 'react'
import '../styles/signIn.css'

import logo from "../images/OpinAdsLogo.png";

const SignIn = ({ onRouteChange }) => {
  return (
    <form className="signInForm">
      <img src={logo} className="logo" onClick={() => onRouteChange('home')}/>
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
        value="Sign In"
      />
      <div>
        <p onClick={() => onRouteChange('register')} className="btn inputWidthTemp">Register</p>
      </div>
    </form>
  )
}

export default SignIn
