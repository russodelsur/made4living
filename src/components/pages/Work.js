import {React, useEffect, useState, useRef} from 'react';
import { Container, Card, Row } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import data from "../../data.json"
import {motion} from 'framer-motion';
import ModelStart from '../Three/Three';

function Work() {

    const [currentService, setService] = useState(data.services[0])
    const [currentIndex, setIndex] = useState(1);
    const ref = useRef();

    useEffect(() => {
        let serviceList = data.services;
        for (let i = 0; i < data.services.length; i++) {
            const element = serviceList[i].service;
            if (currentService.service === element) {
               let li =  document.getElementById(i);
                li.style.background ="var(--white)";
                setIndex(i);
            } else {
                let li =  document.getElementById(i);
                 li.style.background ="none";
            }
        }
    }, [currentService])

    return (
        <motion.div className='effect-wrapper'
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
            <Container>     
            <div style={{marginBottom:"5rem"}}>
                <h2 className='work-title'>Our Services</h2>
                 <div style={{background:"none", height:"60vh"}} className='services-box'>
                    <div className='display'>
                        {/* <img alt="service-image" className='home-service-image' variant="top" 
                        src={require("../../img/"+currentService.image)} /> */}
                        <div className='model-canvas' ref={ref} id={currentIndex+10}><ModelStart ref={ref} name={currentService.name} i={currentIndex} /></div>
                        <p className='para-services'>{currentService?.copy}</p>
                    </div>
                    <ul style={{marginLeft:"2rem"}} className='services-list'>
                    {data.services.map((service, index) => (
                        <li className="service-icon" id={index} key={index} index={index}>
                                <p className='p-service-home' 
                                onClick={()=>setService(service)}>{service.service}</p>
                        </li>
                    ))}
                    </ul>
                    </div>
            </div>

            <h2 className='work-title'>Selected Work</h2>
             <Row xs={1} md={1} className="g-4">
                    {data.projects.map((project, index) => (
                    <div className="project-container" key={index}>
                        <Link className='card-project' to={`/projects/${project.slug}`} id={project.name}>
                        <Card className='card-projects' style={{borderRadius:"1rem"}}>
                            <Card.Img variant="top" alt={project.name} className='service-image'src={require("../../img/"+project.image+".jpg")} />
                            <Card.Body className='card-body'>
                                <h3 className='project-title'>{project.name}</h3>
                                <span></span>
                                <p className="project-type">{project.type}</p>
                            </Card.Body>
                        </Card>
                        </Link>
                    </div>
                    ))}
                </Row>
            </Container>
            </motion.div>
        );
    }

export default Work;
