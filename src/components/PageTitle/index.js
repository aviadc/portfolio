import React from "react";
import "./pageTitle.scss";

const PageTitle = ({ title }) => {
  return (
    <div className='title-container'>
      <div className='title-inner'>
        <div className='title'>{title}</div>
        <div className='title-bottom'></div>
      </div>
    </div>
  );
};

export default PageTitle;
