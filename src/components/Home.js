import React, {useState } from 'react';

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
                <div className='container-intro'>
                    {/* <img className='logo-image' alt="logo" src={require('../img/logo-full.png')}/>           */}
                    <h2>Smart design and property solutions. All in one place.</h2>
                    <h5 className='slogan'>When design combines innovative tech, real estate know-how, dedicated experts and tailored services.</h5>
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
