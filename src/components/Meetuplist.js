import React from 'react';
import Meetupitem from './Meetupitem'

const Meetuplist = (props) => {
  return (
    <ul>
      {props.meetups.map(meetup =><Meetupitem key={meetup.id} id={meetup.id} title={meetup.title} place={meetup.place} image={meetup.image}/>)}
    </ul>
  )
}

export default Meetuplist