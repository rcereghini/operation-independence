import React, { Component } from "react";
import logo from "./images/OpinAdsLogo.png";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <img className="headerLogo" src={logo}/>
        <div className="formWrap">
          <h2>Freedom is Here</h2>
          <form className="landingForm" name="contact" method="POST" netlify>
            <p>
              <label>Name: <input type="text" name="name" /></label>
            </p>
            <p>
              <label>Email: <input type="email" name="email" /></label>
            </p>
            <p>
              <label>Message: <textarea name="message"></textarea></label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>

      </div>
    );
  }
}

export default App;
