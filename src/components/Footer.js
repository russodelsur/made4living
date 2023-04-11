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
          <p className="light-text">1 Hull close</p>
          <p className="light-text">SE16 6BY, London</p>
        </ul>
        <ul className="social">
        <a href="https://www.linkedin.com/company/made-4-living/about/" target={"blank"}>Linkedin</a>
        <a href="mailto:info@made4living.co.uk" target={"blank"}>Email</a>
        <a href="https://github.com/russodelsur" target={"blank"}>Instagram</a>
        <button className="privacy-button" onClick={function Clicked(){console.log("clicked"); navigate("/privacy-policy")} }> Privacy Policy </button>
        </ul>
        <p>@made4living {year}</p>
      </footer>
    );
}

export default Footer;