import React from 'react';
import logo from '../assets/logo.png';

function Nav() {
  return (
    <nav>
        <img src={logo} alt='Little Lemon'/>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Contact Us</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
