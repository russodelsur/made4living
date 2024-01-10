import {React, useEffect, useRef} from 'react';
import { ReactComponent as Logo } from "../../img/logo.svg";
import gsap from 'gsap';

function Loading() {
    let svg = useRef(null);
 
    useEffect(() => {
        let logo = svg.current;
        gsap.set(logo, { opacity: 0 });
        const tl = gsap.timeline();
        tl.delay(0.1) // add delay before animation starts
        .to(logo, { opacity: 1, duration: .3 }) // fade in logo
        .fromTo(logo, { strokeDasharray: "4400px" }, { strokeDasharray: "0px", duration: .2, ease: "power4.out" }) // animate logo drawing itself
        // Add rotation and scaling animation
        .to(logo, {
        rotation: 360,
        scale: 1.5, // Scales up slightly
        ease: "power2.inOut",
        repeat: -1, // Repeat the animation indefinitely
        yoyo: true, // Make the animation reverse on every other repeat for scaling effect
        transformOrigin: "center center", // Set the origin of transformation to the center of the logo for proper rotation
        duration: 2,
    });
        
    }, []);
        
    return (
        <div style={{
        position: 'fixed', // ensure it covers the entire screen without scrolling
        top: 0,
        left: 0,
        zIndex: 1000,
        margin: 0, // override any default margins
        padding: 0, // override any default padding
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'var(--white)',
        }}>
            <Logo ref={svg}
            style={{ width: '100px', height: '100px' }}
            // Add any additional props or styles if necessary
            />
        </div>
);
}

export default Loading;
