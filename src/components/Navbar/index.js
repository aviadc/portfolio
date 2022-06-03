import React, { useState } from "react";
import {FaTimes, FaBars } from "react-icons/fa"
import "./navbar.scss";

const Navbar = () => {

    const [hamburgerClick,setHamburgerClick] = useState(false)
     
  return (
    <nav className='navbar-container'>
      <ul className={hamburgerClick? "nav-menu active": "nav-menu" }>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='about'>About</a>
        </li>
        <li>
          <a href='work'>Work</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li>
      </ul>
      <div className='navbar-hamburger' onClick={()=>setHamburgerClick(!hamburgerClick)}>
      {hamburgerClick ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
      </div>
    </nav>
  );
};

export default Navbar;
