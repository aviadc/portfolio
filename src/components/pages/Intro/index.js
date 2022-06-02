import React from 'react'
import ParticlesIntro from '../../ParticlesIntro'
import "./intro.scss"

const Intro = () => {
  return (
    <>
      <div className='particles-intro'>
        <ParticlesIntro />
      </div>
      <div className='intro-container'>
        <div className='intro-inner'>
          <h2>hei' my name is Aviad </h2>
        </div>
      </div>
    </>
  )
}

export default Intro