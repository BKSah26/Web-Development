import React from 'react'
import "./UserCard.css"

const UserCard = (props) => {
  return (
    <div className='container'>
      <h1 id = "user-heading">{props.name}</h1>
      <img id = 'user-img' src={props.img}/>
      <p id='user-desc'>{props.desc}</p>
    </div>
  )
}

export default UserCard
