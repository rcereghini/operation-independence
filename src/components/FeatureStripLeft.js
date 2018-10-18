import React from 'react'
import "../styles/featureStripLeft.css"


const FeatureStripLeft = (props) => {
  return(
    <div className="container featureStrip">
      <div className="row">
        <div className="col-sm-12 col-md-6 imageWrap">
          <img className="stripImage" src={props.image}/>
        </div>
        <div className="col-sm-12 col-md-6 captionWrap">
          <h2>{props.headline}</h2>
          <p>{props.paragraph}</p>
          <form className="formButtonWrap" action="/example"><button type="submit" className="btn btn-primary featureStripButtonL">{props.buttonText}</button></form>
        </div>
      </div>
    </div>
  )
}

export default FeatureStripLeft
