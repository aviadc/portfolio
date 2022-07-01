import React from 'react'
import StyledSkillRange from '../styledComponents/StyledSkillRange'
import "./skillRange.scss"

const SkillRange = (props) => {
  return (
    <div className='skill-range-container'>
      <div className='skill-range-name'>
        {props.skillName}
      </div>
      <div className='skill-range-size'>
        <StyledSkillRange size={props.size} delay={props.delay}></StyledSkillRange>
        <h4>{props.size}%</h4>
      </div>
    </div>
  )
}

export default SkillRange