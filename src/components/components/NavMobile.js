import React, { useState } from 'react';
import { Container, Navbar, Offcanvas } from 'react-bootstrap';
import {Link, useLocation} from "react-router-dom";


const NavMobile = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation();

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
      };
    const handleClose = () => setMenuOpen(false);
      
    // Calculate the styles directly based on the location
    const isHomePage = location.pathname === "/";
    const backColor = isHomePage ? "var(--reseda)" : "var(--black)";
    const color = isHomePage ? "none" : "white";
    const pos = isHomePage ? "fixed" : "relative";

    return(
    <>
        <header style={{background:color, position:pos, padding:"1rem", top:"0",width: "100%"}}>
        <Navbar key={false} expand={false}>
        <Container fluid id="nav">
              <Link to="/" id="logo" >
                <picture>
                <img id='nav-mobile-logo' alt='Made4Living - Home' src={require('../../img/logo-single.png')} className="logo-long"></img>
                </picture>
              </Link>
              <Navbar.Toggle style={{color:"black"}} aria-controls={`offcanvasNavbar-expand-${false}`} onClick={toggleMenu} />
                <Navbar.Offcanvas
                  style={{backgroundColor:backColor}}
                  className='nav-mobile'
                  id={`offcanvasNavbar-expand-${false}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
                  restoreFocus={false}
                  show={menuOpen}
                  onHide={handleClose}
                  placement="end"
                >
                  <div className="mobile-main-div" >
                      <Link to="/" id="logo" >
                        <picture>
                         <img alt='Made4Living - Home' src={require('../../img/logo-single-white.png')} onClick={()=>toggleMenu()} className="logo-mobile"></img>
                        </picture>
                      </Link>    
                    <Offcanvas.Header closeButton/>
                  </div>
                    <div className='header-group-mobile'>
                      <h4><Link className="header-title-mobile" to="/" id="home" onClick={()=>toggleMenu()}>Home</Link></h4>
                  </div>
                  <div className='header-group-mobile'>
                    <h4><Link className="header-title-mobile" to="/about" id="about" onClick={()=>toggleMenu()}>About us</Link></h4>
                  </div>
                    <div className='header-group-mobile'>
                      <h4>
                        <Link className='header-title-mobile' 
                        to="/work" id="work" 
                        onClick={()=>toggleMenu()}>
                        Work
                        </Link>
                      </h4>
                    </div>
                    <div className='header-group-mobile'>
                      <h4>
                        <Link className="header-title-mobile" to="/contact" id="contact" onClick={()=>toggleMenu()}>
                          Contact
                        </Link>
                      </h4>
                    </div>
                </Navbar.Offcanvas>
              </Container>
          </Navbar>
      </header>
  </>
    )
};

export default NavMobile;