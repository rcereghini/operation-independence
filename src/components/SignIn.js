import React, { Fragment, Component } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import Navigation from "../components/Navigation.js";
import "../styles/signIn.css";
import logo from "../images/OpinAdsLogo.png";

const config = {
  apiKey: "AIzaSyAJ71hexjvGhJt0U9PD7uKY3rE10EdhnOo",
  authDomain: "opinads.com"
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
    signInSuccessUrl: "/home",
    callbacks: {
      signInSuccess: () => {
        this.setState({
          userName: "Frank"
        });
      }
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
        :
        <div>
          <h2>You are now signed in.</h2>
        </div>
      </Fragment>
    );
  }
}

export default SignIn;
