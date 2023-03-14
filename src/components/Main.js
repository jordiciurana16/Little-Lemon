import React from 'react';
import '../styles/Main.css'
import restaurantfood from '../assets/img/restaurantfood.jpg';
import greeksalad from '../assets/img/greeksalad.jpg';
import bruchetta from '../assets/img/bruchetta.jpg';
import lemondessert from '../assets/img/lemondessert.jpg';
import marioadriana from '../assets/img/marioadriana.jpg';
import marioadrianb from '../assets/img/marioadrianb.jpg';
import reviewer1 from '../assets/img/reviewer1.jpg';
import reviewer2 from '../assets/img/reviewer2.jpg';
import reviewer3 from '../assets/img/reviewer3.jpg';
import reviewer4 from '../assets/img/reviewer4.jpg';

function Main() {
  return (
    <main>
      <section className='hero'>
        <h1 className='primary'>Little Lemon</h1>
        <h2 className='highlight'>Chicago</h2>
        <p className='lead-text highlight'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <img className='img-hero' src={restaurantfood}/>
        <button>Reserve a table</button>
      </section>
      <section className='specials'>
        <div className='specials-header'>
          <h1>This week specials!</h1>
          <button>Online Menu</button>
        </div>
        <div className="card-container">
          <div className="card">
            <img src={greeksalad} alt="Imatge de la carta"/>
            <div className='card-text'>
              <div className='card-header'>
                <h3>Greek salad</h3>
                <h5>$12.99</h5>
              </div>
              <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
            </div>
          </div>
          <div className="card">
            <img src={bruchetta} alt="Imatge de la carsta"/>
            <div className='card-text'>
              <div className='card-header'>
                <h3>Bruchetta</h3>
                <h5>$12.99</h5>
              </div>
              <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
            </div>
          </div>
          <div className="card">
            <img src={lemondessert} alt="Imatge de la cartass"/>
            <div className='card-text'>
              <div className='card-header'>
                <h3>Lemon dessert</h3>
                <h5>$4.99</h5>
              </div>
              <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
            </div>
          </div>
        </div>
      </section>
      <section className='testimonials'>
        <h1 className='title-center'>Testimonials</h1>
        <div className='review-card-container'>
          <div className='review-card'>
            <div className="rating">
              <span>&#x1F7CA;</span>
              <span>&#x1F7CA;</span>
              <span>&#x1F7CA;</span>
              <span>&#x1F7CA;</span>
              <span>&#x1F7CA;</span>
            </div>
            <div className="info">
              <div>
                <img  className="img-review" src={reviewer1} alt="Example" />
              </div>
              <p className="name">John</p>
            </div>
            <p className="description">Excellent food!</p>
          </div>
          <div className='review-card'>
            <div className="rating">
              <span>&#x1F7CA;</span>
              <span>&#x1F7CA;</span>
              <span>&#x1F7CA;</span>
              <span>&#x1F7CA;</span>
            </div>
            <div className="info">
              <div>
                <img  className="img-review" src={reviewer2} alt="Example" />
              </div>
              <p className="name">William</p>
            </div>
            <p className="description">Nice place and views, good prices.</p>
          </div>
          <div className='review-card'>
            <div className="rating">
              <span>&#x1F7CA;</span>
              <span>&#x1F7CA;</span>
              <span>&#x1F7CA;</span>
              <span>&#x1F7CA;</span>
              <span>&#x1F7CA;</span>
            </div>
            <div className="info">
              <div>
                <img  className="img-review" src={reviewer3} alt="Example" />
              </div>
              <p className="name">Chelsea</p>
            </div>
            <p className="description">Very cheap prices!</p>
          </div>
          <div className='review-card'>
            <div className="rating">
              <span>&#x1F7CA;</span>
              <span>&#x1F7CA;</span>
              <span>&#x1F7CA;</span>
              <span>&#x1F7CA;</span>
            </div>
            <div className="info">
              <div>
                <img  className="img-review" src={reviewer4} alt="Example" />
              </div>
              <p className="name">Harry</p>
            </div>
            <p className="description">Incredibly fast service!</p>
          </div>
        </div>
      </section>
      <section className='about'>
        <h1>About us</h1>
        <h2>Mario and Adrian</h2>
        <div className='text-about'>
          <p>We met in college and bonded over our love for Mediterranean cuisine.</p>
          <p>After years of discussing our dream of opening a restaurant, we finally took the leap and created Little Lemon. Our menu is inspired by our travels to Greece, Turkey, and Lebanon. </p>
          <p>We hope you enjoy our delicious food and cozy atmosphere!</p>
        </div>
        <div container="image-container">
          <img className='img-about-a' src={marioadriana}/>
          <img className='img-about-b' src={marioadrianb}/>
        </div>
      </section>
    </main>
  );
}

export default Main;
