import React from "react";
import "../styles/pricing.css";

const Pricing = props => {
  return (
    <div className="container pricing">
      <h2>Pricing</h2>
      <div className="row">
        <div className="col-md-4 col-sm-12">
          <div className="card">
            {/* <img class="card-img-top" src={props.image1} alt="Card image cap" /> */}
            <div className="card-body">
              <h3 className="card-title">{props.title1}</h3>
              <h5>Whats Included:</h5>
              <ul className="card-list">
                <li>
                  Custom Advertisement for your Business page to get potential
                  buyers to fill out a form page of their contact information.
                </li>
                <li>Average Leads Per Month - 15+*</li>
                <li>
                  Instant lead notifications via email or text. (working with a
                  team and need multiple people on the list? let us know!)
                </li>
                <li>
                  Need a Facebook business page or don’t have an IDX enabled
                  website? We can help! - Click here to find out more!
                </li>
              </ul>
              <p className="card-text">{props.price1}</p>
              <a href="#" class="btn btn-primary cardButton">
                {props.buttonText1}
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div class="card">
            {/* <img class="card-img-top" src={props.image2} alt="Card image cap" /> */}
            <div class="card-body">
              <h3 class="card-title">{props.title2}</h3>
              <h5>Whats Included:</h5>
              <ul className="card-list">
                <li>
                  Custom Advertisement geared towards getting potential buyers
                  to message you about listings in their area.
                </li>
                <li>Average Messages Per Month - 15+*</li>
                <li>
                  Instant conversation through Facebook Messenger with 3 Custom
                  F.A.Q. Responses tailored to your business
                </li>
                <li>
                  Need a Facebook business page? We can help! - Click here to
                  find out more!
                </li>
              </ul>
              <p class="card-text">{props.price2}</p>
              <a href="#" class="btn btn-primary cardButton">
                {props.buttonText2}
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div class="card">
            {/* <img class="card-img-top" src={props.image3} alt="Card image cap" /> */}
            <div class="card-body">
              <h3 class="card-title">{props.title3}</h3>
              <h5>Whats Included:</h5>
              <ul className="card-list">
                <li>
                  Custom Advertisement geared towards getting potential buyers
                  to visit your already existing web site about listings in
                  their area to sign up for your IDX.
                </li>
                <li>Average Clicks Per Month - 100+*</li>
                <li>
                  Instant conversation through Facebook Messenger with 3 Custom
                  F.A.Q. Responses tailored to your business.
                </li>
                <li>
                  Need a Facebook business page? We can help! - Click here to
                  find out more!
                </li>
              </ul>
              <p class="card-text">{props.price3}</p>
              <a href="#" class="btn btn-primary cardButton">
                {props.buttonText3}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
