import React from 'react'

const Meetupitem = (props) => {
  return (
    <div>
      <div><h3>{props.title}</h3></div>
      <div>{props.place}</div>
      <div><img src={props.image} alt={props.title}/></div>
      <div><button>Add to Favourites</button></div>
    </div>
  )
}

export default Meetupitem