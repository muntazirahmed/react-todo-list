import React from 'react';
import {useRef} from 'react';

const Newmeetupform = (props) => {
const titleinputref=useRef();
const placeinputref=useRef();
const imageinputref=useRef();


    const submithandler =(event)=>{
       event.preventDefault();
       const enteredtitle=titleinputref.current.value;
       const enteredplace=placeinputref.current.value;
       const enteredimage=imageinputref.current.value;
        
       const meetupdata={
          title:enteredtitle,
          place:enteredplace,
          image:enteredimage
        };

        props.onaddata(meetupdata);
       

    }
  return (
    <div>
        <form onSubmit={submithandler}>
        <label htmlFor="title">Meetup title</label>
        <input type ="text"required id="title"ref={titleinputref}></input>

        <label htmlFor="place">place</label>
        <input type ="text"required id="place"ref={placeinputref}></input>

        <label htmlFor="image">image</label>
        <input type ="url"required id="image" ref={imageinputref}></input>
        <button>add meetup</button>

        
        </form></div>
  )
}

export default Newmeetupform