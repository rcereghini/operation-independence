import React, { Component } from "react";
import logo from "./images/operationIndependence.jpg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Looking for Freedom?</h2>
        <form name="contact" method="POST" netlify>
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message" />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    );
  }
}

export default App;
