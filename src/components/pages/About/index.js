import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import SkillRange from "../../SkillRange";
import "./about.scss";
import PageTitle from "../../PageTitle";

const About = () => {
  useEffect(() => {
    // Aos.init({duration: 2000});
  }, []);
  return (
    <div className='about-page' id='about'>
      <PageTitle title='About' />
      <div className='about-container'>
        <div className='about-left'>
          <div className='about-image'></div>
          <div className='about-description'>
            <h2>who I am?</h2>
            <div>
              A Full Stack Web Developer with endless curiosity looking for a
              challenging development position as a full stack web developer.
            </div>
          </div>
        </div>
        <div className='about-right'>
          <div className='skill-range-container'>
            <SkillRange size='85' delay='0' />
            <SkillRange size='75' delay='.1' />
            <SkillRange size='90' delay='.2' />
            <SkillRange size='65' delay='.3' />
            <SkillRange size='95' delay='.4' />
            <SkillRange size='70' delay='.5' />
            <SkillRange size='80' delay='.6' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
