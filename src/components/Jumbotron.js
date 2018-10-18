  import React from "react";
  import "../styles/jumbotron.css";

  const Jumbotron = (props) => {
    return (
      <div className="jumboWrap">
        <div className="jumbotron">
          <h1 className="display-4 titleText">Founder's Package</h1>
          <p className="lead subTitleText">Become a Founder Today to Receive Exclusive Offers!</p>
          <hr className="my-4"/>
          <ul className="jumbotronDetails">
            <li><span>40%</span> back towards advertising budget.</li>
            <li><span>40%</span> back towards advertising budget.</li>
            <li><span>3</span>Custom Ads</li>
            <li><span>3</span>Property Sites</li>
            <li><span>40%</span>Benefit Text</li>
          </ul>
          <a className="btn btn-primary btn-lg learnMoreButton" href="#" role="button">Learn more</a>
        </div>
      </div>
    );
  }

  export default Jumbotron;
