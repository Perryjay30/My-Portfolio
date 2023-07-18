import React from 'react';
import "./projecttwo.css";
import pic1 from "../../assets/pic1.png";
import pic2 from "../../assets/pic2.png";
import pic3 from "../../assets/pic3.png";

const ProjectTwo = () => {
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
            <img src={pic1} alt="..."/>
            <img src={pic2} alt="..."/>
            <img src={pic3} alt="..."/>
        </div>
    </div>
  )
}

export default ProjectTwo;
