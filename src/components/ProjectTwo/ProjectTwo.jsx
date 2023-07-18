import React from 'react';
import "./projecttwo.css";
import learnspace from "../../assets/learnspace.png";


const ProjectTwo = () => {
  return (
    <div className="project">
        <div className="project-content">
            <h1>LEARNSPACE</h1>
            <h3>STACK: SPRINGBOOT AND REACT</h3>
            <h3>LINK: https://learnspace.africa</h3>
            <p>
                Learnspace helps to accelerate your career and 
                acquire high-in-demand skills with Learnspace’s
                easy-to-access education financing.
            </p>
        </div>
        <div className="project-img">
          <a href='https://learnspace.africa/' target="_blank"><img src={learnspace} alt="..."/></a>
        </div>
    </div>
  )
}

export default ProjectTwo;
