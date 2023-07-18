import React from 'react';
import "./projectthree.css";
import piz1 from "../../assets/piz1.png";
import piz2 from "../../assets/piz2.png";
import piz3 from "../../assets/piz3.png";

const ProjectThree = () => {
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
            <img src={piz1} alt="..."/>
            <img src={piz2} alt="..."/>
            <img src={piz3} alt="..."/>
        </div>
    </div>
  )
}

export default ProjectThree;
