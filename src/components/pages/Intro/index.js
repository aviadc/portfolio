import React from 'react'
import { Link } from "react-scroll";
import { FiArrowRight } from 'react-icons/fi'
import videoBg from "../../../assets/videos/background-video.mp4"

import "./intro.scss"

const Intro = () => {
  const offsetInPixels = (window.innerHeight / 100) * 8;

  return (
    <>
      <div className='intro-container' id='intro'>
        <video className='video-bg' autoPlay muted loop>
          <source src={videoBg} type='video/mp4' />
        </video>
        <div className='intro-inner'>
          <div>Hello, I'm  <span>Aviad Cohen.</span></div>
          <div>I'm a Full-Stack Web Developer.</div>
          <Link
            to='about'
            spy={true}
            smooth={true}
            offset={-offsetInPixels}
            duration={0}
            className='nav-link'
          ><div className='intro-mywork-button'>
              view my work <span><FiArrowRight /></span></div> </Link>
          {/* <a href='#about'> <div className='intro-mywork-button'>
          view my work <span><FiArrowRight /></span></div> </a> */}
        </div>
      </div>
    </>
  )
}

export default Intro