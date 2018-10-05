import React from 'react'
import sliderImageOne from "../images/facebookFinger.png";
import sliderImageTwo from "../images/socialMedia.png";
import sliderImageThree from "../images/facebookPhone.png";
import '../styles/carousel.css'


function Carousel(props){
  return (
    <div id="carouselExampleIndicators" className="carousel slide fixedNavPadding" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100 carouselImage" src={sliderImageOne} alt="First slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100 carouselImage" src={sliderImageTwo} alt="Second slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100 carouselImage" src={sliderImageThree} alt="Third slide"/>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  )
}

export default Carousel;
