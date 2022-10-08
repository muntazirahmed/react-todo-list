import React ,{useState,useEffect} from 'react';
import Meetuplist from './Meetuplist'


const Allmeetups = () => {
  const[loading,setloading]=useState(true);
  const[loadedmeetup,setloadedmeetup]=useState([]);

   useEffect (()=>{
    setloading(true);
    fetch('https://meet-up-project-557ae-default-rtdb.firebaseio.com/meetups.json'
  ).then(response=>{
    return response.json();
  }).then(data=>{
    const  meetups=[];
    for (const key in data){
      const meetup={
        id:key,...data[key]
      };
      meetups.push(meetup);
    }
    setloading(false);
    setloadedmeetup(meetups);
  });
  },[])
  if(loading){
    return <section><h1>loading........</h1></section>
  }
  return (
    <div>
      <div><Meetuplist meetups={loadedmeetup}/></div>
    </div>
  )
}

export default Allmeetups