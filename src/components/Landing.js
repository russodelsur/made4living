import {React, useEffect, useRef } from 'react';
import gsap, { Linear } from 'gsap';
// import DrawSVGPlugin from 'gsap';

function Landing() {

    let top = useRef(null);  
    let bottom = useRef(null);

    let tl = gsap.timeline({ });
    useEffect(() => {
        let svg = document.getElementById("top-logo");
        console.log(svg,top)
        let obj = {length:10, pathLength:top.current.getTotalLength()};
        console.log(obj)
        tl.to(obj, 7, {length: top.current.pathLength, duration: 4, onUpdate:drawLine , ease:Linear.easeNone })

        function drawLine() {
            top.current.style.strokeDasharray =
             [obj.length,obj.pathLength].join(' '); 
          }
          tl.restart();
      }, [tl]);

        return (
            <div className='container-landing'>
                <svg className='landing-logo' 
                version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="2834.000000pt" height="2834.000000pt" viewBox="0 0 2834.000000 2834.000000"
                preserveAspectRatio="xMidYMid meet">
                <metadata>
                Made4living logo
                </metadata>
                <g transform="translate(0.000000,2834.000000) scale(0.100000,-0.100000)"
                fill="#000000" stroke="black" >
                <path 
                ref={top}
                id="top-logo"
                className="top-logo"
                d="M14060 28329 c-116 -11 -264 -50 -368 -97 -66 -29 -10955 -6317
                -11351 -6555 -287 -172 -482 -434 -568 -765 -34 -132 -43 -373 -19 -512 58
                -332 243 -626 506 -806 66 -45 11492 -6646 11677 -6746 130 -71 274 -83 401
                -36 30 11 2188 1255 4797 2763 2608 1509 4756 2750 4773 2759 17 9 44 16 60
                16 35 0 92 -37 109 -70 10 -20 13 -1180 13 -5695 l0 -5670 1246 -720 c686
                -396 1250 -721 1255 -723 5 -2 9 3236 9 7646 0 6735 -2 7660 -15 7735 -104
                599 -617 1029 -1225 1028 -212 0 -372 -37 -550 -125 -47 -24 -2409 -1388
                -5250 -3031 -2841 -1644 -5192 -3000 -5225 -3014 -80 -33 -232 -36 -311 -4
                -89 35 -8343 4806 -8361 4832 -26 40 -28 95 -5 133 17 28 606 372 3554 2077
                2335 1351 3545 2045 3569 2048 46 7 94 -18 119 -60 19 -31 20 -61 20 -1352 l1
                -1320 1202 -693 c661 -381 1226 -706 1255 -723 l52 -31 -3 3329 c-2 3164 -3
                3332 -21 3403 -62 261 -175 461 -358 636 -266 254 -628 380 -988 343z"/>
                <path 
                ref={bottom}
                className="bottom-logo"
                id="bottom-logo" 
                d="M1750 12247 c0 -5159 -6 -4722 66 -4937 19 -57 54 -139 76 -182 88
                -165 245 -340 394 -441 123 -82 11316 -6539 11406 -6579 236 -105 523 -130
                782 -69 471 112 830 482 933 961 17 81 18 253 18 4045 l0 3960 -1240 717
                c-682 394 -1246 717 -1252 717 -10 1 -13 -704 -13 -3495 0 -2048 -4 -3494 -9
                -3492 -5 2 -1953 1126 -4330 2498 l-4321 2495 -2 3504 -3 3505 -1235 713
                c-679 393 -1243 718 -1252 724 -17 9 -18 -215 -18 -4644z"/>
                </g>
                </svg>
                {/* <svg className='landing-logo' src={Svg}></svg> */}
            </div>
        );
    }

export default Landing;
