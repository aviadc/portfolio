import React from 'react'
import ParticlesIntro from '../../ParticlesIntro'
import { FiArrowRight  } from 'react-icons/fi'
import videoBg from "../../../assets/videos/background-video.mp4"

import "./intro.scss"

const Intro = () => {
  // const [isHover, setIsHover] = useState(false);

  return (
    <>
      <div className='intro-container' id='intro'>
        <video className='video-bg' autoPlay muted loop>
          <source src={videoBg} type='video/mp4' />
        </video>
        <div className='intro-inner'>
          <div>Hello, I'm  <span>Aviad Cohen.</span></div>
          <div>I'm a Full-Stack Web Developer.</div>
         <a href='#work'> <div className='intro-mywork-button'>
          view my work <span><FiArrowRight /></span></div> </a>
        </div>
      </div>
    </>
  )
}

export default Intro