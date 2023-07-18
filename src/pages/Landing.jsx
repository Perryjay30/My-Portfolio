import React from 'react';
import Hero from "../components/Hero/Hero";
import PurpleBar from '../components/Bar/PurpleBar';
import MySkills from "../components/MySkills/MySkills";
import About from '../components/About/About';
import ProjectOne from '../components/ProjectOne/ProjectOne';
import ProjectTwo from '../components/ProjectTwo/ProjectTwo';
import ProjectThree from '../components/ProjectThree/ProjectThree';
import ProjectFour from '../components/ProjectFour/ProjectFour';
import ProjectFive from '../components/ProjectFive/ProjectFive';
import ThankYou from '../components/ThankYou/ThankYou';

const Landing = () => {
  return (
    <div className="landing_page">
      <Hero/>
      <PurpleBar/>
      <MySkills/>
      <PurpleBar/>
      <About/>
      <PurpleBar/>
      <ProjectOne/>
      <PurpleBar/>
      <ProjectTwo/>
      <PurpleBar/>
      <ProjectThree/>
      <PurpleBar/>
      <ProjectFour/>
      <PurpleBar/>
      <ProjectFive/>
      <PurpleBar/>
      <ThankYou/>
      <PurpleBar/>
    </div>
  )
}

export default Landing;
