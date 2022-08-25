import Todo from './components/Todo';
import './App.css';
import Todoform from './components/Todoform'



function App() {
 let mylist=[
  {id:"l1", name:"school fee",date:new Date(2021, 2,11)},
  {id:"l2", name:"car wash",date:new Date(2021, 3,10)},
  {id:"l3", name:"react",date:new Date(2021, 13,11)},
 ]
  const receiveform = (received) =>{

  }
  return (
    <div className="App">
    <Todoform  recievedata={receiveform }/>
    <Todo list={mylist}/>
    </div>
  );
}

export default App;

