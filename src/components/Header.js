import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/" id="logo" ><img src={require('../img/logo-full.png')} className="logo"></img></Link>
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

export default Layout;