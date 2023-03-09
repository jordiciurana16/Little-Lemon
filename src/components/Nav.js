import React from 'react';
import '../styles/Nav.css'
import logo from '../assets/img/logo.png';

function Nav() {
  return (
    <nav>
        <img src={logo} alt='Little Lemon'/>
        <ul className='lead-text'>
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Menu</a></li>
            <li><a>Reservations</a></li>
            <li><a>Order online</a></li>
            <li><a>Log in</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
