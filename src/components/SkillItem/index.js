import React from "react";
import { FaHtml5 } from "react-icons/fa";
import "./skillItem.scss";

const SkillItem = () => {
  return (
    <div className='skill-container'>
      <div className='skill-left'>
        <FaHtml5 />
      </div>
      <div className='skill-right'>
        <div className='skill-name'>HTML</div>
        <div className='skill-bar'>
          <div className='skill-progress'></div>
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
