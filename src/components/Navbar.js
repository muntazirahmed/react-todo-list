import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
         
           <li><Link to ="/">Allmeetups</Link></li>
           <li><Link to ="/Newmeetups">Newmeetups</Link></li> 
           <li> <Link to ="/Favourites">Favourites</Link></li>
        
        </ul>
      </nav>
    </div>
  )
}

export default Navbar