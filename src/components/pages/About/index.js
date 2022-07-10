import React, { useEffect, useRef } from "react";
import SkillItem from "../../SkillItem";
import "./about.scss";
import PageTitle from "../../PageTitle";
import gsap from "gsap";

const About = () => {
  const tl = useRef();
  const el = useRef();
  const q = gsap.utils.selector(el);
  useEffect(() => {
    tl.current = gsap.timeline().to(q(".about-right"), {
      y: 100,
    }).to(q(".skill-progress"), {
      width: '100%',
    });
  }, []);
  return (
    <div className='about-page' id='about' ref={el}>
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
          <SkillItem size='85' delay='0' />
          <SkillItem size='85' delay='0' />
          <SkillItem size='85' delay='0' />
        </div>
      </div>
    </div>
  );
};

export default About;
