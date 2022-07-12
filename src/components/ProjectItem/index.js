import React from 'react'
import "./projectItem.scss"

const ProjectItem = (props) => {
  return (
    <div className='project-item-container'>
      <button className='button-code'>see code</button>
      <div className='project-item-inner'>
        <img src={props.img} alt='project' />
      </div>
      <button className='button-website'>go to website</button>
    </div>
  )
}

export default ProjectItem