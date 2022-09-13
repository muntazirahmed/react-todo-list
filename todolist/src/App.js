import React from 'react';
import  './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Allmeetups from './components/Allmeetups';
import Newmeetups from './components/Newmeetups';
import Favourites from './components/Favourites';
import Navbar from './components/Navbar'


const App = () => {

  
  return (
    <div>
 <Router>
  <Navbar/>
  <Routes>
       <Route path="/"element={<Allmeetups/>}/>
       <Route path="/Newmeetups"element={<Newmeetups/>}/>
       <Route path="/Favourites"element={<Favourites/>}/>
  </Routes>

 </Router>
     
     
    </div>
    

  )
}

export default App