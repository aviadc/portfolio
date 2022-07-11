import React, { useEffect, useRef } from "react";
import SkillItem from "../../SkillItem";
import "./about.scss";
import PageTitle from "../../PageTitle";
import { FaHtml5 , FaCss3, FaReact , FaJsSquare, FaNodeJs, FaVuejs } from "react-icons/fa";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import me2 from "../../../assets/me2.jpeg"

const About = () => {
  const tl = useRef();
  const el = useRef();
  const q = gsap.utils.selector(el);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".skill-progress", {
      scrollTrigger: {
        trigger: "contact-container",
        toggleActions: "restart none none none"
      },
      width: '90%',
    });
  }, []);
  return (
    <div className='about-page' id='about' ref={el}>
      <PageTitle title='About' style={{color: "black"}} />
      <div className='about-container'>
        <div className='about-left'>
          <div className='about-image'>
            <img src={me2} alt='profile-image'/>
          </div>
          <div className='about-description'>
            <h2>who I am?</h2>
            <div>
              A Full Stack Web Developer with endless curiosity looking for a
              challenging development position as a full stack web developer.
            </div>
          </div>
        </div>
        <div className='about-right'>
          <SkillItem skillIcon={<FaHtml5 style={{fill: '#e34c26'}} />} skillName="HTML" precentage="90%"/>
          <SkillItem skillIcon={<FaCss3 style={{fill: '#264de4'}} />} skillName="CSS3"  precentage=""/>
          <SkillItem skillIcon={<FaJsSquare style={{fill: '#f0db4f'}} />} skillName="JAVASCRIPT" precentage=""/>
          <SkillItem skillIcon={<FaReact style={{fill: '#00d8ff'}} />} skillName="REACT" precentage=""/>
          <SkillItem skillIcon={<FaNodeJs style={{fill: '#509941'}} />} skillName="Node.js" precentage=""/>
          <SkillItem skillIcon={<FaVuejs style={{fill: '#42b883'}} />} skillName="Vue.js" precentage=""/>
        </div>
      </div>
    </div>
  );
};

export default About;
