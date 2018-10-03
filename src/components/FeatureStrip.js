import React from 'react'
import "../styles/featureStrip.css"

function FeatureStrip(props, { onRouteChange }){
  return(
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-8 captionWrap">
          <h2>{props.headline}</h2>
          <p>{props.paragraph}</p>
          <button type="button" className="btn btn-primary featureStripButton" onClick={props.buttonFunction}>{props.buttonText}</button>
        </div>
        <div className="col-6 col-md-4">
          <img className="stripImage" src={props.image}/>
        </div>
      </div>
    </div>
  )
}

export default FeatureStrip
