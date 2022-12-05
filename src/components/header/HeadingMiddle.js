import React from 'react'
import './HeadingStyles.css'

const HeadingMiddle = ({heading}) => {
  return (
    <div className='my-5'>
        <h2 className='text-center text-uppercase fw-bold'>{heading}</h2>
        <div className='c-line'></div>
    </div>
  )
}

export default HeadingMiddle