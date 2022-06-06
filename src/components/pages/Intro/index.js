import React , {useState} from 'react'
import ParticlesIntro from '../../ParticlesIntro'
import { FiArrowRight , FiArrowDown } from 'react-icons/fi';

import "./intro.scss"

const Intro = () => {
  // const [isHover, setIsHover] = useState(false);

  return (
    <>
      <div className='particles-intro'>
        <ParticlesIntro />
      </div>
      <div className='intro-container' id='intro'>
        <div className='intro-inner'>
          <div>Hello, I'm  <span>Aviad Cohen.</span></div>
          <div>I'm a Full-Stack Web Developer.</div>
         <a href='#work'> <div className='intro-mywork-button'>
             {/* onMouseEnter={() => setIsHover(true)}
             onMouseLeave={() => setIsHover(false)}> */}
          view my work <span><FiArrowRight /></span></div> </a>
        </div>
      </div>
    </>
  )
}

export default Intro