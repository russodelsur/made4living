import React, { useState, useEffect } from 'react';
import { Container,NavLink, Navbar,Offcanvas } from 'react-bootstrap';
import {Link, useNavigate, useLocation} from "react-router-dom";


const NavMobile = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [backColor, setBackColor] = useState("white")
    const [color, setColor] = useState("white")
    const [pos, setPos] = useState("relative")

    const navigate = useNavigate();
      const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
      }
      const handleClose = () => setMenuOpen(false)

      useEffect(() => {
        if (location.pathname === "/") {
            setColor("none")
            setPos("fixed")
            setBackColor("var(--reseda)")
          } else {
            setColor("white")
            setPos("relative")
            setBackColor("var(--black)")
          }
      }, [location])

    return(
    <>
        <header style={{background:color, position:pos, padding:"1rem"}}>
        <Navbar key={false} expand={false}>
        <Container fluid id="nav">
            <Link to="/" id="logo" >
              <picture>
              <img alt='m4llogo' src={require('../../img/logo-single.png')} className="logo-long"></img>
              </picture>
            </Link>
              {/* <p style={{color:colorRef.color}} >Hello</p> */}
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
                    <NavLink ><img className="logo-mobile" alt='m4llogo-mobile' src={require('../../img/logo-single-white.png')} onClick={()=>(navigate("/"))}></img></NavLink>                                     
                    <Offcanvas.Header closeButton/>
                  </div>
                    <div className='header-group-mobile'>
                      <h4><Link className="header-title-mobile" to="/" id="home" onClick={()=>toggleMenu()}>Home</Link></h4>
                      <ul className='header-mobile'>
                        <li className='li-header'></li>
                      </ul>
                    </div>
                    <div className='header-group-mobile'>
                      <h4><Link className="header-title-mobile" to="/about" id="about" onClick={()=>toggleMenu()}>About us</Link></h4>
                      <ul className='header-mobile'>
                        <li className='li-header'></li>
                      </ul>
                    </div>
                    <div className='header-group-mobile'>
                      <h4><a className="header-title-mobile">Practice</a></h4>
                      <ul className='header-mobile'>
                        <li><Link className='li-header-mobile' to="/services" id="services" onClick={()=>toggleMenu()}>Services</Link></li>
                        <li><Link  className='li-header-mobile' to="/work" id="work" onClick={()=>toggleMenu()}>Work</Link></li>
                      </ul>
                    </div>
                    <div className='header-group-mobile'>
                      <h4><Link className="header-title-mobile" to="/contact" id="contact" onClick={()=>toggleMenu()}>Contact</Link></h4>
                      <ul className='header-mobile'>
                        <li className='li-header'></li>
                      </ul>
                    </div>
                </Navbar.Offcanvas>
              </Container>
          </Navbar>
      </header>
  </>
    )
};

export default NavMobile;