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
        <ProjectItem img ='https://images.unsplash.com/photo-1652521887861-5ec257b41e0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'/>
        <ProjectItem img ='https://images.unsplash.com/photo-1652521887861-5ec257b41e0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'/>
        <ProjectItem img ='https://images.unsplash.com/photo-1652521887861-5ec257b41e0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'/>
        <ProjectItem img ='https://images.unsplash.com/photo-1652521887861-5ec257b41e0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'/>
        <ProjectItem img ='https://images.unsplash.com/photo-1652521887861-5ec257b41e0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'/>
        <ProjectItem img ='https://images.unsplash.com/photo-1652521887861-5ec257b41e0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'/>
        <ProjectItem img ={me2}/>
        <ProjectItem img ={me2}/>
        <ProjectItem img ={me2}/>
        
      </div>
    </div>
  )
}

export default Work