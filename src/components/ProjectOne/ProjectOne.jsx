import React from 'react';
import "./projectone.css";
import condueet from "../../assets/condueet.png";


const ProjectOne = () => {
  return (
    <div className="project">
        <div className="project-content">
            <h1>CONDUEET TECHNOLOGIES LIMITED</h1>
            <h3>STACK: SPRINGBOOT AND REACT</h3>
            <h3>LINK: condueet.netlify.app</h3>
            <p>
            Condueet is an open finance platform that distributes and filters 
            financial data to third party businesses across Africa using consolidated APIs from banks.
            </p>
        </div>
        <div className="project-img">
          <a href="https://condueet.netlify.app/" target="_blank"><img src={condueet} alt="..."/></a>
        </div>
    </div>
  )
}

export default ProjectOne;
