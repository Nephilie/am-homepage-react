import React from 'react'

const HeadingLeft = (props) => {
  return (
    <div className='heading-left mt-5'>
        <h2 className='text-uppercase fw-bold'>{props.heading}<span className='heading-span'>{props.spanHeading}</span></h2>
    </div>
  )
}

export default HeadingLeft