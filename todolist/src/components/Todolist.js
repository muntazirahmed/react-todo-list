import React,{useState} from 'react';
import Tododate from './Tododate';
 
function Todolist(props) {
    const[state,setstate]=useState('');
    const[title,settitle]=useState('props.title')

    const clickhandler =()=>{ 
        settitle(state)
    }
    const changehandler =(event)=>{ 
        setstate(event.target.value)
    }

  return (
    <div>

        <Tododate tododate={props.date}/>
        <div>{title}</div><br></br>
        <div><input onChange={changehandler} type="text" ></input></div>
        <div><button onClick={clickhandler} >Add to do</button></div>
        
        

    </div>
  )
}

export default Todolist