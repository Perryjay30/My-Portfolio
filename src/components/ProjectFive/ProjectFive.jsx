import React from 'react';
import "./projectfive.css";
import civily from "../../assets/civily.png";


const ProjectFive = () => {
  return (
    <div className="projectFive">
        <div className="projectfive-content">
            <h1>CIVILY</h1>
            <h3>STACK: SPRINGBOOT AND REACT</h3>
            <h3>LINK: civily.africa</h3>
            <p>
              Civily facilitates social impact by connecting individuals, 
              organizations, governments, and causes by providing a platforms 
              for causes, community building, and communication.
            </p>
        </div>
        <div className="projectFive-img">
          <a href='https://civily.africa/' target="_blank"><img src={civily} alt="..."/></a>
        </div>
    </div>
  )
}

export default ProjectFive;
