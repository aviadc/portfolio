import React from 'react'
import PageTitle from "../../PageTitle"
import ProjectItem from "../../ProjectItem"
import me2 from "../../../assets/me2.jpeg"
import "./work.scss"

const Work = () => {
  return (
    <div className='work-page' id='work'>
      <PageTitle title='Projects' style={{color: "black"}} />
      <div className='work-container'>
        <ProjectItem img ={me2}/>
        <ProjectItem img ={me2}/>
        <ProjectItem img ={me2}/>
        <ProjectItem img ={me2}/>
        
      </div>
    </div>
  )
}

export default Work