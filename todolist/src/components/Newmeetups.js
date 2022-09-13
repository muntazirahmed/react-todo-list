import React from 'react';
import Newmeetupform from './Newmeetupform';


const Newmeetups = () => {
  function addmeetuphandler(meetupdata){
    fetch('https://meet-up-project-557ae-default-rtdb.firebaseio.com/meetups.json', {
      method:'POST',
      body: JSON.stringify(meetupdata),
      headers:{
        'content-type': 'application/json'
      }
    }
    );
  }
  return (

<div><Newmeetupform onaddata={addmeetuphandler}/></div>
  )
}

export default Newmeetups