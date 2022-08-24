import Todo from './components/Todo';
import './App.css';



function App() {
 let mylist=[
  {id:"l1", name:"school fee",date:new Date(2021, 2,11)},
  {id:"l2", name:"car wash",date:new Date(2021, 3,10)},
  {id:"l3", name:"react",date:new Date(2021, 13,11)},
 ]
  return (
    <div className="App">
    
   <Todo list={mylist}/>
    </div>
  );
}

export default App;

