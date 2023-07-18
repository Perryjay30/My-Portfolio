import React from 'react';
import "./mySkills.css";

const MySkills = () => {
  return (
    <div className="my_skills">
      <h1>MY SKILLS</h1>
      <div className="skills">
        <div className='skill-content'>
          <p>JAVA</p>  
          <p>NODEJS</p>
          <p>REACT</p>
        </div>
        <div className='skill-content'>
          <p>GITHUB</p>
          <p>VUE</p>
          <p>AWS</p>
        </div>
        <div className='skill-content'>
          <p>GOOGLE CLOUD</p>
          <p>SPRINGBOOT</p>
          <p>SQL AND NOSQL DATABASES</p>
        </div>
      </div>
    </div>
  )
}

export default MySkills;
