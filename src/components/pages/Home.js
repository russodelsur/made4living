import { Button } from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
// import Landing from '../components/Landing';
import { Carousel } from 'react-bootstrap';
import data from "../../data.json";
import ScrollIcon from '../components/Scroll';
import { Element } from 'react-scroll';
import ModelStart from '../Three/Three';

function Home() {
const [isShown, setIsShown] = useState(false);
const [localMousePos, setLocalMousePos] = useState({});
// const [loaded, turnOffLanding] = useState(true)
const [currentService, setService] = useState(data.services[0]);
const [currentIndex, setIndex] = useState(0);
const [click, setClick] = useState(0);
const [marginTop, setMargin] = useState("100px");

// useEffect(() => {
//     const visitedBefore = sessionStorage.getItem("visitedBefore")
//     if (visitedBefore) {
//         turnOffLanding(false);
//     } else {
//         sessionStorage.setItem("visitedBefore", "true");
//         setTimeout(()=>{turnOffLanding(false)}, 4000)
//     }  
// }, []);

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
                {/* {
                    loaded ?
                    <Landing/>
                    : */}
                    <div className='wrapper'>
                    <ScrollIcon />
                        <section className='page01'>
                        <Element id="section1" className="scrollable-section"/>
                            <div 
                            onMouseOver={() => setIsShown(true)}
                            onMouseOut={() => setIsShown(false)}
                            onMouseMove={(e)=>handleMouseMove(e)}
                            className='intro-image'>
                            </div>
                        </section>
                        
                        <section className='page02'>
                            <Element id="section2" className="scrollable-section"/>
                            <div className='container-intro'>
                                <h1>Smart design and property solutions. All in one place.</h1>
                                <h5 className='slogan'>When design combines innovative tech, real estate know-how, dedicated experts and tailored services.</h5>
                                <h6>Tell us more about your project.</h6>
                                <Link className="button-questionnaire-link" to="/tellusmore"><Button className="button-questionnaire" variant="dark">Get Started</Button></Link>
                            </div>
                        </section>

                        <section className='page03' >
                        <Element id="section3" className="scrollable-section"/>
                            <div className='container-page03'>
                                    <div style={{marginTop:{marginTop}}} className='services-box'>
                                        <div className='display'>
                                            <ModelStart url={currentService?.name} i={currentIndex} click={click} />
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
                        <Element id="section4" className="scrollable-section"/>
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
                {/* } */}
            </>
        );
    };

export default Home;
