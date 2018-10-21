import React, { Fragment, Component } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import Navigation from "../components/Navigation.js";
import "../styles/signIn.css";
import logo from "../images/OpinAdsLogo.png";

firebase.initializeApp({
  apiKey: "AIzaSyAVsZOZEhoiNqw0XiDIXbuGPk2mesymkxE",
  authDomain: "operation-independence.firebaseapp.com"
});

class SignIn extends Component {
  state = { isSignedIn: false };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user });
    });
  };

  render() {
    return (
      <Fragment>
        <Navigation />
        <div className="signin-form-wrap">
          <div className="signin-form">
            <a href="/home">
              <img src={logo} className="logo" />
            </a>
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default SignIn;
