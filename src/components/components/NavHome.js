import React, { useState, useEffect } from 'react';
import { Container, Navbar, Offcanvas } from 'react-bootstrap';
import {Link} from "react-router-dom";
import NavMobile from './NavMobile';

const NavHome = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [windowSize, setWindowSize] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  const handleClose = () => setMenuOpen(false)

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
          <header style={{background:"none", position:"fixed"}}>
          <Navbar key={false} expand={false}>
          <Container fluid>
              <Link to="/" id="logo" >
                <picture>
                <img alt='m4llogo' src={require('../../img/logo-full.png')} className="logo-long"></img>
                </picture>
              </Link>
                <Navbar.Toggle style={{color:"red"}} aria-controls={`offcanvasNavbar-expand-${false}`} onClick={toggleMenu} />
                  <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${false}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
                    restoreFocus={false}
                    show={menuOpen}
                    onHide={handleClose}
                    placement="end"
                  >
                      <div className='header-group'>
                        <h4>
                          <Link className="header-title" to="/" id="home" onClick={()=>toggleMenu()}>Home
                          </Link>
                        </h4>
                      </div>
                      <div className='header-group'>
                        <h4><Link className="header-title" to="/about" id="about" onClick={()=>toggleMenu()}>About us</Link></h4>
                      </div>
                      <div className='header-group'>     
                      <Link to="/" id="logo" >
                        <picture>
                         <img alt='m4llogo' src={require('../../img/logo-single-white.png')} onClick={()=>toggleMenu()} className="logo"></img>
                        </picture>
                      </Link>                        
                      <Offcanvas.Header closeButton/>
                      </div>
                      <div className='header-group'>
                        <h4><Link className="header-title" to="/work" id="work" onClick={()=>toggleMenu()}>Work</Link></h4>
                      </div>
                      <div className='header-group'>
                        <h4><Link className="header-title" to="/contact" id="contact" onClick={()=>toggleMenu()}>Contact</Link></h4>
                      </div>
                  </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </header>

        :

        <NavMobile/>
      }
  </>
  )
};

export default NavHome;