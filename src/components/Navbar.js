import React from 'react'
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';

export default function Navbar() {

  const items=useSelector((state)=>state.cart);


  const toggleMenu = () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  };

  return (
    <div>
      <nav className="navbar">
    <div className="logo">
     
      <h2>Logo</h2>
    </div>
    
    <div className="nav-links">
     
      <Link to="/cart"><img src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png" alt="Cart"/><sup>
      <span className="float-end">{items.length}</span></sup></Link>
    </div>
    <div className="toggle-button" onClick={toggleMenu}>
      
    </div>
  </nav>
  
    </div>
  )
}
