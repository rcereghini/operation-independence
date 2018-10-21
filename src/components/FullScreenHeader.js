import React from "react";
import launchImage from "../images/startUp.png";
import logo from "../images/OpinAdsLogo.png";
import "../styles/fullScreenHeader.css";

const FullScreenHeader = props => {
  return (
    <div className="fullScreenDisplay">
      <div className="fullScreenCard">
        <img src={logo} className="fullScreenCardLogo" />
        <h2 className="fullScreenHeader_mainTitle">{props.headerMaintitle}</h2>
        <div className="headerButtonWrap row">
          <form className="formButtonWrap" action="/">
            <button
              type="submit"
              className="btn btn-primary infoButton learnMoreButton"
            >
              Learn More
            </button>
          </form>
          <form className="formButtonWrap" action="/signin">
            <button className="btn btn-success infoButton getStartedButton">
              Take Off!
            </button>
          </form>
        </div>
      </div>
      <div>
        <img className="launchImage" src={launchImage} />
      </div>
    </div>
  );
};

export default FullScreenHeader;
