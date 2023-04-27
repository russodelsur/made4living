import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/" id="logo" >
              <picture>
              <source media="(max-width: 900px)" srcSet={require('../img/logo-single.png')}></source>
              <img alt='m4llogo' src={require('../img/logo-full.png')} className="logo"></img>
              </picture>
            </Link>
          </li>
         </ul> 

         <ul className='header-links'>
          <li>
            <Link to="/services" id="services">Services</Link>
          </li>
          <li>
            <Link to="/work" id="work">Work</Link>
          </li>
          <li>
            <Link to="/about" id="about" >About</Link>
          </li>
          <li>
            <Link to="/contact" id="contact" >Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
    <Outlet />
  </>
  )
};

export default Header;