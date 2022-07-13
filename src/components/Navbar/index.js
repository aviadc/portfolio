import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-scroll";
import "./navbar.scss";

const Navbar = () => {
  const offsetInPixels = (window.innerHeight / 100) * 8;
  // console.log(offsetInPixels, "offset");
  // console.log(8vh)

  const [hamburgerClick, setHamburgerClick] = useState(false);

  return (
    <nav className='navbar-container'>
      <div className={hamburgerClick ? "nav-menu active" : "nav-menu"}>
        <div>
          <Link
            to='intro'
            spy={true}
            smooth={true}
            offset={0}
            duration={0}
            className='nav-link'
            onClick={() => setHamburgerClick(!hamburgerClick)}
          >
            Home
          </Link>
        </div>
        <div>
          <Link
            to='about'
            spy={true}
            smooth={true}
            offset={-offsetInPixels}
            duration={0}
            className='nav-link'
            onClick={() => setHamburgerClick(!hamburgerClick)}
          >
            About
          </Link>
        </div>
        <div>
          <Link
            to='work'
            spy={true}
            smooth={true}
            offset={-offsetInPixels}
            duration={0}
            className='nav-link'
            onClick={() => setHamburgerClick(!hamburgerClick)}
          >
            Work
          </Link>
        </div>
        <div>
          <Link
            to='contact'
            spy={true}
            smooth={true}
            offset={-offsetInPixels}
            duration={0}
            className='nav-link'
            onClick={() => setHamburgerClick(!hamburgerClick)}
          >
            Contact
          </Link>
        </div>
      </div>
      <div
        className='navbar-hamburger'
        onClick={() => setHamburgerClick(!hamburgerClick)}
      >
        {hamburgerClick ? (
          <FaTimes size={30} style={{ color: "#ffffff" }} />
        ) : (
          <FaBars size={30} style={{ color: "#ffffff" }} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
