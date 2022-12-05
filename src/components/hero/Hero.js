import React from "react";
import "./HeroStyles.css";
import defaultImage from "../../images/Hero-Hero.jpeg";

const Hero = (props) => {
  const heroImage = props.imageSource ? props.imageSource : defaultImage;
  const backgroundImageStyle = { backgroundImage: "url(" + heroImage + ")" };

  return (
    <div className="hero-img" style={backgroundImageStyle}>
      <h1 className="px-5 py-1 mb-2">{props.heading}</h1>
      <p className="text-light px-2 mx-2">{props.text}</p>
    </div>
  )
};

export default Hero;
