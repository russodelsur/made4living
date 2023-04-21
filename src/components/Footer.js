// My footer with my links below
import { useNavigate } from "react-router-dom";
import React from "react";



const d = new Date();
let year = d.getFullYear()

function Footer() {
  const navigate = useNavigate();
    return(
      <footer className="footer">
        <ul className="address">
          <p>LONDON STUDIO</p>
          <p className="light-text">224b Walm Lane</p>
          <p className="light-text">NW2 3BS, London</p>
        </ul>
        <ul className="social">
          <a href="https://www.linkedin.com/company/made-4-living/about/" target={"blank"}>Linkedin</a>
          <a href="mailto:info@made4living.co.uk" target={"blank"}>Email</a>
          <a href="https://www.instagram.com/m4living/" target={"blank"}>Instagram</a>
          <button className="privacy-button" onClick={function Clicked(){console.log("clicked"); navigate("/privacy-policy")} }> Privacy Policy </button>
        </ul>
        <ul className="address">
        <p className="light-text">@made4living {year}</p>
        <p className="light-text">MADE 4 LIVING DESIGN LIMITED</p>
        <p className="light-text">Company Number 14492468</p>
        </ul>
      </footer>
    );
}

export default Footer;