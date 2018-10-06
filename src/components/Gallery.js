import React from "react";
import "../styles/gallery.css";
import arrow from "../images/arrow.jpg";

const IMAGES = [];
for (let i = 1; i < 51; i++)
  IMAGES.push(
    "https://rcereghini.github.io/assets/galleryImages/gallery" + i + ".jpg"
  );

function Gallery(props) {
  return (
    <div className="container-fluid">
      <img src={arrow} className="arrow" />
      <div className="video-responsive">
        <iframe
          src="https://player.vimeo.com/video/288969257?title=0&byline=0&portrait=0"
          width="640"
          height="360"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        />
      </div>
      <p className="intro">{props.intro}</p>
      {IMAGES.map((image, i) => (
        <a href={image}>
          <img src={image} className="galleryImages" />
        </a>
      ))}
    </div>
  );
}

export default Gallery;
