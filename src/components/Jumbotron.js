  import React from "react";
  import "../styles/jumbotron.css";

  const Jumbotron = (props) => {
    return (
      <div class="jumbotron">
        <div>
          <h1 class="display-4 titleText">Founder's Package</h1>
          <p class="lead">Become a Founder Today to Receive Exclusive Offers!</p>
          <hr class="my-4"/>
          <ul>
            <li><span>40%</span> back towards advertising budget.</li>
            <li><span>40%</span> back towards advertising budget.</li>
            <li><span>3</span>Custom Ads</li>
            <li><span>3</span>Property Sites</li>
            <li><span>40%</span>Benefit Text</li>
          </ul>
          <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </div>
      </div>
    );
  }

  export default Jumbotron;
