import React from 'react';
import Todolist from './Todolist'

function Todo(props) {
  return (<div> 
   <div> <Todolist name= {props.list[0].name} date={props.list[0].date}/></div>
    <Todolist name={props.list[1].name} date={props.list[1].date}/>
    <Todolist name={props.list[2].name} date={props.list[2].date}/></div>)
}

export default Todo