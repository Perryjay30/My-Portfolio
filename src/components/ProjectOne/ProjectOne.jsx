import React from 'react';
import "./projectone.css";
import pix1 from "../../assets/pix1.png";
import pix2 from "../../assets/pix2.png";
import pix3 from "../../assets/pix3.png";

const ProjectOne = () => {
  return (
    <div className="project">
        <div className="project-content">
            <h1>RBV FOOD</h1>
            <h3>STACK: LARAVEL & FLUTTER</h3>
            <h3>LINK: Food.royalbv.name.ng</h3>
            <p>
                RBV Food is a food delivery service
                that allows you to order your
                sweet delights from your favorite
                restaurant while being in the comfort
                of your space and have
                them delivered straight to you.
            </p>
        </div>
        <div className="project-img">
            <img src={pix1} alt="..."/>
            <img src={pix2} alt="..."/>
            <img src={pix3} alt="..."/>
        </div>
    </div>
  )
}

export default ProjectOne;
