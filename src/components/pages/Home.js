import { Button } from 'react-bootstrap';
import React, {useState, useEffect, useLayoutEffect, useRef} from 'react';
import {Link} from "react-router-dom";
import { Carousel } from 'react-bootstrap';
import data from "../../data.json";
import ScrollIcon from '../components/Scroll';
import ModelStart from '../Three/Three';
import ReactPlayer from 'react-player';
import introVideo from '../../img/intro-video.mp4';

function Home() {
const [isShown, setIsShown] = useState(false);
const [localMousePos, setLocalMousePos] = useState({});
const [currentService, setService] = useState(data.services[0]);
const [currentIndex, setIndex] = useState(0);
const [click, setClick] = useState(0);
const [marginTop, setMargin] = useState("100px");


const containerRef = useRef(null);
const translateY = useRef(0);
const sections = 4; // the number of sections
const isScrolling = useRef(false);
const [sectionHeight, setHeight] = useState(window.innerHeight);
const [next, setNext] = useState(1);
const excludedDivRef = useRef(null); // Ref for the div you want to exclude

useEffect(() => {
    const handleResize = () => {
        setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
        window.removeEventListener("resize", handleResize);
    };
}, []);

useEffect(() => {
    const container = containerRef.current;
    container.style.transform = `translate3d(0,-${translateY.current}px,0)`;
}, []);

const isFirstRender = useRef(true);

useEffect(() => {
    const container = containerRef.current;
    if (isFirstRender.current) {
        isFirstRender.current = false;
        return;
    }
    if (sectionHeight*sections-sectionHeight === translateY.current) {
        translateY.current = 0
        container.style.transform = `translate3d(0,-${translateY.current}px,0)`;
    } else {
    translateY.current = translateY.current + sectionHeight;
    container.style.transform = `translate3d(0,-${translateY.current}px,0)`;
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [next]);

useLayoutEffect(() => {
    const container = containerRef.current;
    let startTouchY = 0;

    // Define helper function for snap scrolling
    const snapScroll = (nextSectionIndex) => {
        translateY.current = nextSectionIndex * sectionHeight;
        containerRef.current.style.transform = `translate3d(0,-${translateY.current}px,0)`;
        // setProp(translateY.current); // call your setProp function (whatever it does)
    };

    
    // Create an event handler for touchstart
    const handleTouchStart = (event) => {
        // Check to see if the event target is the excluded div or a descendant of it
        if (excludedDivRef.current && excludedDivRef.current.contains(event.target)) {
        return; // Do nothing, as the touch started within the excluded div
        }
        startTouchY = event.touches[0].clientY;
        };
    
    // Create an event handler for touchmove
    const handleTouchMove = (event) => {
        // Check to see if the event target is the excluded div or a descendant of it
        if (excludedDivRef.current && excludedDivRef.current.contains(event.target)) {
            return; // Allow the default touch behavior within the excluded div
        }
        event.preventDefault(); // Prevent default behavior for touches outside excluded div
        // Don't do anything if we're currently animating a scroll
        if (isScrolling.current) {
          return;
        }
        const touchY = event.touches[0].clientY;
        const deltaY = startTouchY - touchY;
        handleScrollLogic(deltaY);
    };
    
    // Create an event handler for the 'wheel' event
    const handleWheel = (event) => {
        event.preventDefault();
        handleScrollLogic(event.deltaY);
    };
    
    // Create a shared scroll logic function
    const handleScrollLogic = (deltaY) => {
        if (isScrolling.current) {
        return;
        }
        isScrolling.current = true;
        
        // Calculate the current section index
        const currentSectionIndex = Math.round(translateY.current / sectionHeight);
        
        let nextSectionIndex = currentSectionIndex + (deltaY > 0 ? 1 : -1); // Increase or decrease depending on scroll direction
        nextSectionIndex = Math.min(Math.max(0, nextSectionIndex), sections - 1); // Prevent scrolling beyond the first and last section
        
    // If we've scrolled into another section, snap to it
        if (nextSectionIndex !== currentSectionIndex) {
        snapScroll(nextSectionIndex);
        }
        
    // Ensure smooth animations and prevent overlapping animations
    setTimeout(() => {
    isScrolling.current = false;
    }, 500);
    };
    
    // Add event listeners for wheel and touch events
    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchstart', handleTouchStart, { passive: false });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    
    // Clean up event listeners
    return () => {
    container.removeEventListener('wheel', handleWheel);
    container.removeEventListener('touchstart', handleTouchStart);
    container.removeEventListener('touchmove', handleTouchMove);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sectionHeight, sections, excludedDivRef.current]); // Dependencies for the effect

useEffect(() => {
let serviceList = data.services;
for (let i = 0; i < serviceList.length; i++) {
    const element = serviceList[i].service;
    let li = document.getElementById("home"+i.toString());
    if (currentService.service === element) {
        li.style.background = "var(--black)";
        setIndex(i);
    } else {
        li.style.background = "none";
    }
    }
}, [currentService]); // Add any other dependencies if needed

useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
    // Set window width/height to state
    if (window.innerWidth <= 900) {
        setMargin("0px")
        } 
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
}, []); // Empty array ensures that effect is only run on mount and unmount

const div = document.querySelector('.intro-image');
const handleMouseMove = (event) => {
    const localX = event.pageX - event.target.offsetLeft;
    const localY = event.pageY - event.target.offsetTop;
    setLocalMousePos({ x: localX, y: localY });
    if (isShown){div.style.setProperty('--x', localMousePos.x + 'px');div.style.setProperty('--y', localMousePos.y + 'px')}
};
    return (
                <>
                    <main className='home'>
                        <ScrollIcon onParentClick={() => setNext(next+1)} />
                    <div ref={containerRef} id='fullpage' className="fullpage-wrapper">
                        <section className='page01'>
                            <div 
                            onMouseOver={() => setIsShown(true)}
                            onMouseOut={() => setIsShown(false)}
                            onMouseMove={(e)=>handleMouseMove(e)}
                            className='intro-image'>
                            </div>
                        </section>
                        
                        <section className='page02'>
                            <div className='container-intro'>
                                <h1>Smart design and property solutions. All in one place.</h1>
                                <h5 className='slogan'>When design combines innovative tech, real estate know-how, dedicated experts and tailored services.</h5>
                                <h6>Tell us more about your project.</h6>
                                <Link className="button-questionnaire-link" to="/tellusmore"><Button className="button-questionnaire" variant="dark">Get Started</Button></Link>
                            </div>
                            <div className='video-background'></div>
                            <ReactPlayer
                            url={introVideo}
                            muted={true}
                            autoPlay={true}
                            playing={true}
                            loop={true}
                            width={"100%"}
                            height={"100%"}
                            style={{ position: "absolute", zIndex: "5" }}
                            controls={false} // Explicitly set controls to false
                            playsinline // Add the playsinline attribute
                            />
                        </section>

                        <section className='page03' >
                            <div className='container-page03'>
                                    <div style={{marginTop:{marginTop}}} className='services-box'>
                                        <div ref={excludedDivRef}  className='display'>
                                            <ModelStart class={"model-canvas"} url={currentService?.name} i={currentIndex} click={click} />
                                            <p id='white' className='para-services'>{currentService?.copy}</p>
                                        </div>
                                            <div className='list'>
                                                <Link to="/work" className='white-text'>
                                                    <h3 className='service-title' >Our services</h3>
                                                </Link>
                                            <ul className='services-list'>
                                            {data.services.map((service, index) => (
                                                <li className="service-icon" id={"home"+index} key={index} index={index} onClick={()=>setClick(index)}>
                                                        <p id='white' className='p-service-home' 
                                                        onClick={()=>setService(service)}>{service.service}</p>
                                                </li>
                                            ))}
                                            </ul>
                                        </div>
                                    </div>
                            </div>
                        </section>
                        
                        <section className='page04' >
                            <Carousel  id="carousel-container">
                            {data.projects.map((project, index) => (
                                    <Carousel.Item key={index} index={index} interval={3000}>
                                        <img alt="carouselimage" className='carousel-image'src={require("../../img/"+project.image+".jpg")} />
                                        <Carousel.Caption>
                                            <Link to="/work" id={project.name}>
                                                <h3>Selected Projects</h3>
                                            </Link>
                                            <Link to={`/projects/${project.slug}`} id={project.name}>
                                                <h3>{project.name}</h3>
                                            </Link>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    ))}
                            </Carousel>
                        </section>
                        </div>
                    </main>
            </>
        );
    };

export default Home;
