import React from 'react';
import Meetuplist from './Meetuplist'
const dummydata=[
  {
  id:"a1",
  title:"Samir",
  image:'https://th.bing.com/th/id/OIP.y7XPzjE6dkuP3STU-9KV7QHaHa?w=208&h=208&c=7&r=0&o=5&dpr=1.25&pid=1.7',
  place:"kolkata"
},
{
  id:"a2",
  title:"Abcd",
  image:"https://th.bing.com/th/id/OIP.y7XPzjE6dkuP3STU-9KV7QHaHa?w=208&h=208&c=7&r=0&o=5&dpr=1.25&pid=1.7",
  place:"kolkata"
},
]

const Allmeetups = () => {
  return (
    <div>
      <div><Meetuplist meetups={dummydata}/></div>
    </div>
  )
}

export default Allmeetups