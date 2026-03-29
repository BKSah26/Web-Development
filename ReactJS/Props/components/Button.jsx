import React from 'react'
import './Button.css'

const Button = (props) => {
  return (
    <div className='btn-container'>
        {props.children}
        <button className = 'btn' onClick={props.click}>
            ZINDABAD
        </button>
    </div>
  )
}

export default Button
