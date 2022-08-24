import React,{useState} from 'react';
import Tododate from './Tododate';

function Todolist(props) {
    const[state,setstate]=useState('')

  return (
    <div>

        <Tododate tododate={props.date}/>
        <div>{props.name}</div><br></br>
        <div><input type="text"></input></div>
        <div><button>Add to do</button></div>
        
        

    </div>
  )
}

export default Todolist