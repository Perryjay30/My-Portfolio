import React from 'react';
import whiteMan from "../../assets/whiteMan.png";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_img">
        <img src={whiteMan} alt="..."/>
      </div>
      <div className="hero_content">
          <h1>Hi I am Perry Coroma</h1>
          <h3>A Fullstack Developer</h3>
      </div>
    </div>
  )
}

export default Hero;
