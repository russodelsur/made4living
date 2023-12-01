// My footer with my links below
import { useNavigate, useLocation } from "react-router-dom";
import {React, useState, useEffect } from "react";
import { SocialIcon } from 'react-social-icons';
import { Container } from "react-bootstrap";

const d = new Date();
let year = d.getFullYear()

function Footer() {
  const [color, setColor] = useState("white")
  const [pos, setPos] = useState("relative")
  const [height, setHeight] = useState("")


  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
        setColor("var(--black)")
        setPos("relative")
        setHeight("100vh")
      } else {

      }
  }, [location])
    return(
      <Container>
      <footer style={{height:height, background:color, position:pos, scrollSnapStop:"start"}} className="footer">
        <ul className="footer-content">
          <p>London office</p>
          <p className="light-text">71-75 Shelton Street</p>
          <p className="light-text">London, United Kingdom</p>
        </ul>
        <ul className="footer-content">
          <p>Social</p>
          <ul>
            <SocialIcon bgColor="#1a1a1a" url="https://www.linkedin.com/company/made-4-living/about/" />
            <SocialIcon bgColor="#1a1a1a" url="https://www.instagram.com/m4living/" />
            <SocialIcon bgColor="#1a1a1a" url="mailto:info@made4living.co.uk" />
          </ul>
          {/* <a href="https://www.linkedin.com/company/made-4-living/about/" target={"blank"}>Linkedin</a>
          <a href="mailto:info@made4living.co.uk" target={"blank"}>Email</a>
          <a href="https://www.instagram.com/m4living/" target={"blank"}>Instagram</a> */}
        </ul>
        <ul className="footer-content">
          <p>Support and information</p>
          <button className="privacy-button" onClick={function Clicked(){navigate("/privacy-policy")} }> Privacy Policy </button>
          <button className="privacy-button" onClick={function Clicked(){navigate("/contact")} }> Contact us </button>
        </ul>
        <ul className="footer-content">
          <p className="light-text">@made4living {year}</p>
          <p className="light-text">MADE 4 LIVING DESIGN LIMITED</p>
          <p className="light-text">Company Number 14492468</p>
        </ul>
      </footer>
      </Container>
    );
}

export default Footer;