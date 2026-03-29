import React from 'react'

const Card = (props) => {
  return (
    <div>
        <input type="text" onChange={(e)=> props.nameSet(e.target.value)}/>
        <p>Name: {props.name}</p>
        <p>{props.title}</p>
    </div>
  )
}

export default Card
