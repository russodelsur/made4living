import React, {useEffect, useState} from 'react';
import { Container, Card, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import data from "../../data.json"
import {motion} from 'framer-motion';
import ModelStart from '../Three/Three';
import SEO from '../components/SEO';

function Work() {
const [currentService, setService] = useState(data.services[1])
const [click, setClick] = useState(1);
const [isClient, setIsClient] = useState(false)

useEffect(() => {
    setIsClient(true)
  }, [])

useEffect(() => {
let serviceList = data.services;
for (let i = 0; i < serviceList.length; i++) {
    const element = serviceList[i].service;
    let li = document.getElementById("work"+i.toString());
    if (currentService.service === element) {
        li.style.background = "var(--black)";
        li.children[0].style.color = "var(--white)"
    } else {
        li.style.background = "none";
        li.children[0].style.color = "black"
    }
}
}, [currentService]); // Add any other dependencies if needed

return (
    <motion.div className='effect-wrapper'
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
        <Container>
            <SEO title="Work" description="Explore our variety of services and projects." url="work"/>    
            <h2 className='work-title'>Our Services</h2>
                <div style={{background:"none", minHeight:"60vh"}} className='services-box'>
                    <div className='display'>
                        {isClient ? 
                          <ModelStart class={"model-canvas"} url={currentService?.name} click={click} />
                        :
                            <div id='check' className='model-canvas'>            
                                <canvas className='render-item'/>
                            </div>
                        }
                        <p className='para-services'>{currentService?.copy}</p>
                    </div>
                    <ul style={{marginLeft:"2rem", flexDirection:"column"}} className='services-list'>
                        {data.services.map((service, index) => (
                            <li className="service-icon" id={"work"+index} key={index} index={index} onClick={()=>setClick(index)}>
                                    <p className='p-service-home' 
                                    onClick={()=>setService(service)}>{service.service}</p>
                            </li>
                        ))}
                    </ul>
            </div>
            <h2 className='work-title'>Selected Work</h2>

            <Row xs={1} md={1} className="g-4">
                    {data.projects.map((project, index) => (
                    <div className="project-container" key={index}>
                        <Link className='card-project' to={`/projects/${project?.slug}`} id={project.name}>
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
