import React from 'react'

const CardBasic = (props) => {
  return (
    <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>{props.title}</h5>
          <p className='card-text'>{props.text}</p>
          <p className='card-text'>{props.text2}</p>
          <a href='#' className='card-link btn'>{props.btn}</a>
        </div>
    </div>
  )
}

export default CardBasic