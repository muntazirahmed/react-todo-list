import React,{useState} from 'react'

function Todoform(props) {

  const [newtitle,settitle]=useState('');
  const [tododate,settododate]=useState('');



  function inputhandler(event){
settitle(event.target.value)
  }


  function datehandler (event){
    settododate(event.target.value)
  }
  
const submithandler =(event) => {
  event.preventDefault();

  const  tododata={
    title:newtitle,
    date:new Date(tododate)
  }

  props.recievedata(tododata);
 settitle('');
 settododate('');
};


  return (
    <form onSubmit={submithandler}><div>
        <label>item :  </label>
        <input onChange={inputhandler} type="text"value={newtitle}></input>     
        <label>date  :  </label>
        <input onChange={datehandler}type="date"value={tododate}></input>
        
        
        
        </div>
        <button  type="submit">add new data </button> </form>
  )
}

export default Todoform