import React from 'react';
import "./projectfive.css";
import pics1 from "../../assets/pics1.png";
import pics from "../../assets/pics.png";

const ProjectFive = () => {
  return (
    <div className="projectFive">
        <div className="projectfive-content">
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
        <div className="projectFive-img">
            <img src={pics1} alt="..."/>
            <img src={pics} alt="..."/>
        </div>
    </div>
  )
}

export default ProjectFive;
