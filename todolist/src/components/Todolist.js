import React from 'react';
import Tododate from './Tododate';
 
function Todolist(props) {


  return (
    <div>

        <Tododate tododate={props.date}/>
        <div>{props.title}</div><br></br>
       
        
        
        

    </div>
  )
}

export default Todolist