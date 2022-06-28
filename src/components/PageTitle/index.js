import React from 'react'
import "./pageTitle.scss"

const PageTitle = ({title}) => {
  return (
    <div className='title-container'>
      <div className='title'>{title}</div>
      <div className='title-bottom'></div>
    </div>
  )
}

export default PageTitle