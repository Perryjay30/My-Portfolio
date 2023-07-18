import React from 'react';
import "./projectthree.css";
import enum1 from "../../assets/enum1.png";

const ProjectThree = () => {
  return (
    <div className="project">
        <div className="project-content">
            <h1>ENUM</h1>
            <h3>STACK: SPRINGBOOT AND REACT</h3>
            <h3>LINK: https://enum.africa</h3>
            <p>
            Enum is a digital platform that helps businesses manage 
            their online training programs and acquire top employees.
            It helps users going through the employment route to develop
            marketable skills to find better jobs on their own.
            </p>
        </div>
        <div className="project-img">
          <a href='https://enum.africa/' ><img src={enum1} alt="..."/></a>
        </div>
    </div>
  )
}

export default ProjectThree;
