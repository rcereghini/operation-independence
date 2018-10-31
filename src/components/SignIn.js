import React, { Fragment, Component } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import Navigation from "../components/Navigation.js";
import "../styles/signIn.css";
import logo from "../images/OpinAdsLogo.png";

const config = {
  apiKey: "AIzaSyAJ71hexjvGhJt0U9PD7uKY3rE10EdhnOo",
  authDomain: "operation-independence.firebaseapp.com"
};

firebase.initializeApp(config);

class SignIn extends Component {
  state = {
    isSignedIn: false,
    userName: ""
  };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    // signInSuccessUrl: "/home"
    callbacks: {
      signInSuccess: () => {
        this.setState({
          userName: "Guest"
        });
      }
    }
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        isSignedIn: !!user
      });
    });
  };

  render() {
    if (this.state.isSignedIn === false) {
      return (
        <Fragment>
          <Navigation />
          ({this.state.isSignedIn}) ?
          <div>
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
          </div>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <div className="loggedInScreen">
            <img
              src={firebase.auth().currentUser.photoURL}
              className="firebaseUserImage"
            />
            <h2>
              Thank you {firebase.auth().currentUser.displayName}!<br /> You are
              now signed in.
            </h2>
            <a onClick={() => firebase.auth().signOut()}>
              Click Here to Sign Out
            </a>
          </div>
        </Fragment>
      );
    }
  }
}

export default SignIn;
