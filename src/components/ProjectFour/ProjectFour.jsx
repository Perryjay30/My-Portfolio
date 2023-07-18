import React from 'react';
import "./projectfour.css";
import roadpadi from "../../assets/roadpadi.png";

const ProjectFour = () => {
  return (
    <div className="project">
        <div className="project-content">
            <h1>ROADPADI</h1>
            <h3>STACK: SPRINGBOOT AND VUE</h3>
            <h3>LINK: roadpadi.com</h3>
            <p>
              RoadPadi is a platform that provides decentralized
              access to travel services and resources from transporters,
              fleet managers, third party service providers across Africa,
              helping you travel efficiently.
            </p>
        </div>
        <div className="project-img">
          <a href='https://roadpadi.com/' target="_blank"><img src={roadpadi} alt="..."/></a>
        </div>
    </div>
  )
}

export default ProjectFour;
