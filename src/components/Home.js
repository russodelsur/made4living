import { Button } from 'react-bootstrap';
import React, {useState } from 'react';
import { Link } from "react-router-dom";
// import Landing from './Landing';


function Home() {
    const [isShown, setIsShown] = useState(false);
    const [localMousePos, setLocalMousePos] = useState({});

    const div = document.querySelector('.intro-image');
    const handleMouseMove = (event) => {
      const localX = event.pageX - event.target.offsetLeft;
      const localY = event.pageY - event.target.offsetTop;
      setLocalMousePos({ x: localX, y: localY });
      if (isShown){div.style.setProperty('--x', localMousePos.x + 'px');div.style.setProperty('--y', localMousePos.y + 'px')}
    };
        return (
            <div className='container-home'>
                {/* <Landing/> */}
                <div className='container-intro'>
                    {/* <img className='logo-image' alt="logo" src={require('../img/logo-full.png')}/>           */}
                    <h1>Smart design and property solutions. All in one place.</h1>
                    <h5 className='slogan'>When design combines innovative tech, real estate know-how, dedicated experts and tailored services.</h5>
                    <h6>Tell us more about your project.</h6>
                    <Link className="button-questionnaire-link"  to="/tellusmore"><Button className="button-questionnaire" variant="dark">Get Started</Button></Link>
                </div>
                <div 
                onMouseOver={() => setIsShown(true)}
                onMouseOut={() => setIsShown(false)}
                onMouseMove={(e)=>handleMouseMove(e)}
                className='intro-image'>
                </div>
            </div>
        );
    }

export default Home;
