import React from 'react'

const Cards = (props) => {
  return (
    <div className="card">
        <img src={props.img} alt="" />
        <h1>{props.user}</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <button>View Profile</button>
      </div>
  )
}

export default Cards
