import React from 'react'
import "../styles/pricing.css"

function Pricing(props){
  return(
    <div className="container pricing">
      <h2>Pricing</h2>
      <div className="row">
        <div className="col col-4">
          <div class="card">
            <img class="card-img-top" src={props.image1} alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">{props.title1}</h5>
              <p class="card-text">{props.price1}</p>
              <a href="#" class="btn btn-primary">{props.buttonText1}</a>
            </div>
          </div>
        </div>
      <div className="col col-4">
        <div class="card">
          <img class="card-img-top" src={props.image2} alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">{props.title2}</h5>
            <p class="card-text">{props.price2}</p>
            <a href="#" class="btn btn-primary disabled">{props.buttonText2}</a>
          </div>
        </div>
      </div>
      <div className="col col-4">
        <div class="card">
          <img class="card-img-top" src={props.image3} alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">{props.title3}</h5>
            <p class="card-text">{props.price3}</p>
            <a href="#" class="btn btn-primary disabled">{props.buttonText3}</a>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Pricing
