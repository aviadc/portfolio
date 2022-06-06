import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa"
import { Link } from "react-scroll"
import "./navbar.scss";

const Navbar = () => {

  const [hamburgerClick, setHamburgerClick] = useState(false)

  return (
    <nav className='navbar-container'>
      <div className={hamburgerClick ? "nav-menu active" : "nav-menu"}>
        <div>
          <Link to="intro" spy={true} smooth={true} offset={0} duration={0} className="nav-link">Home</Link>
        </div>
        <div>
          <Link to="about" spy={true} smooth={true} offset={0} duration={0} className="nav-link">About</Link>
        </div>
        <div>
          <Link to="work" spy={true} smooth={true} offset={0} duration={0} className="nav-link">Work</Link>
        </div>
        <div>
          <Link to="contact" spy={true} smooth={true} offset={0} duration={0} className="nav-link">Contact</Link>
        </div>
      </div>
      <div className='navbar-hamburger' onClick={() => setHamburgerClick(!hamburgerClick)}>
        {hamburgerClick ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
          : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
      </div>
    </nav>
  );
};

export default Navbar;
