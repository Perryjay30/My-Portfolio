import React from 'react';
import perry from "../../assets/perry.png";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_img">
        <img src={perry} alt="..."/>
      </div>
      <div className="hero_content">
          <h1>I am Taiwo Oluwapelumi</h1>
          <h3>A Fullstack Developer</h3>
      </div>
    </div>
  )
}

export default Hero;
