import React from 'react';
import Todolist from './Todolist'

function Todo(props) {
  return (
   <div>{
         props.list.map(newtodo=>(
         <Todolist
          name= {newtodo.title}
           date={newtodo.date}/>
           )
           )
        }
    
   </div>
   );
}

export default Todo;