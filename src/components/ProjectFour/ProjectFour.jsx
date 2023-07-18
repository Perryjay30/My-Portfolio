import React from 'react';
import "./projectfour.css";
import pis1 from "../../assets/pis1.png";
import pis2 from "../../assets/pis2.png";
import pis3 from "../../assets/pis3.png";

const ProjectFour = () => {
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
            <img src={pis1} alt="..."/>
            <img src={pis2} alt="..."/>
            <img src={pis3} alt="..."/>
        </div>
    </div>
  )
}

export default ProjectFour;
