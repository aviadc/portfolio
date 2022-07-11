import React from "react";

import "./skillItem.scss";

const SkillItem = (props) => {
  return (
    <div className='skill-container'>
      <div className='skill-left' >
        {props.skillIcon}
      </div>
      <div className='skill-right'>
        <div className='skill-name'>{props.skillName}</div>
        <div className='skill-bar'>
          <div className='skill-progress'></div>
        </div>
      </div>
    </div >
  );
};

export default SkillItem;
