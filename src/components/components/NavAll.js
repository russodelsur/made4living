import React, { useState, useEffect } from 'react';
import { Container, Navbar} from 'react-bootstrap';
import {Link} from "react-router-dom";
import NavMobile from './NavMobile';

function NavAll() {
  const [windowSize, setWindowSize] = useState(null);

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
    // Set window width/height to state
    if (window.innerWidth <= 900) {
      setWindowSize(false)
    } else {
      setWindowSize(true)
      }
    }
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount

  return (
    <>
    { 
        windowSize ?
        <header style={{background:"white", position:"relative"}}>
        <Navbar key={"sm"} expand={"sm"}>
          <Container  className='header-regular'>
                    <div className='header-group'>
                      <h4><Link to="/" id="home">Home</Link></h4>
                    </div>
                    <div className='header-group'>
                      <h4><Link to="/about" id="about">About us</Link></h4>
                    </div>
                    <div className='header-group'>     
                      <Link to="/" id="logo" >
                        <picture>
                         <img alt='m4llogo' src={require('../../img/logo-single.png')} className="logo"></img>
                        </picture>
                      </Link>    
                    </div>
                    <div className='header-group'>
                      <h4><Link to="/work" id="work">Work</Link></h4>
                    </div>
                    <div className='header-group'>
                      <h4><Link  to="/contact" id="contact">Contact</Link></h4>
                    </div>
              </Container>
          </Navbar>
      </header>
        :
        <NavMobile/>
    }
  </>
  )
};

export default NavAll;