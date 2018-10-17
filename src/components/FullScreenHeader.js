import React from "react";
import launchImage from "../images/startUp.png";
import logo from "../images/OpinAdsLogo.png";
import "../styles/fullScreenHeader.css";

const FullScreenHeader = (props) => {
  return (
    <div className="fullScreenDisplay">
      <div className="fullScreenCard">
        <img src={logo} className="headerLogo"/>
        <h2 className="fullScreenHeader_mainTitle">{props.headerMaintitle}</h2>
        <div className="headerButtonWrap row">
          <button className="btn btn-primary infoButton learnMoreButton">Learn More</button>
          <button className="btn btn-success infoButton getStartedButton">Take Off!</button>
        </div>
      </div>
      <div ><img className="launchImage" src={launchImage}/></div>
    </div>
  );
}

export default FullScreenHeader;
