import React from 'react';
import '../styles/Footer.css'
import restaurant from '../assets/img/restaurant.jpg'

function Footer() {
  return (
    <footer>
      <div className='footer-container'>
        <img className='img-footer' src={restaurant} />
        <div className='footer-nav'>
          <ul>
            <li>Navigation</li>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>
        <div className='footer-nav'>
        <ul>
            <li>Contact</li>
            <li>Adress</li>
            <li>Phone number</li>
            <li>Email</li>
          </ul>
        </div>
        <div className='footer-nav'>
          <ul>
            <li>Social Media</li>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>You Tube</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
    </footer>

  );
};

export default Footer;