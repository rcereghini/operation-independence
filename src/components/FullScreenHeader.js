import React from "react";
import launchImage from "../images/startUp.png";
import logo from "../images/OpinAdsLogo.png";
import "../styles/fullScreenHeader.css";

const FullScreenHeader = (props) => {
  return (
    <div className="fullScreenDisplay">
      <div className="fullScreenCard">
        <img src={logo} className="headerLogo"/>
        <h2>{props.headerSubtitle}</h2>
        <div className="headerButtonWrap">
          <button className="btn btn-success getStartedButton">Get Started</button>
          <button className="btn btn-primary learnMoreButton">Learn More</button>
        </div>
      </div>
      <div ><img className="launchImage" src={launchImage}/></div>
    </div>
  );
}

export default FullScreenHeader;
