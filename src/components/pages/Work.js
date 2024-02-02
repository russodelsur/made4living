import React from 'react';
// , {useEffect, useState} 
import { Container, Card, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import data from "../../data.json"
import {motion} from 'framer-motion';
// import ModelStart from '../Three/Three';
import SEO from '../components/SEO';

function Work() {
// const [currentService, setService] = useState(data.services[1])
// const [click, setClick] = useState(1);

// useEffect(() => {
// let serviceList = data.services;
// for (let i = 0; i < serviceList.length; i++) {
//     const element = serviceList[i].service;
//     let li = document.getElementById("work"+i.toString());
//     if (currentService.service === element) {
//         li.style.background = "var(--black)";
//         li.children[0].style.color = "var(--white)"
//     } else {
//         li.style.background = "none";
//         li.children[0].style.color = "black"
//     }
// }
// }, [currentService]); // Add any other dependencies if needed

return (
    <motion.div className='effect-wrapper'
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
        <Container>
            <SEO title="Work" description="Explore our variety of services and projects." url="work"/>    
            <h2 className='work-title'>Our Clients</h2>

            <Row xs={1} md={1} lg={2} xl={2} xxl={3} className="g-4">
                    <div className="project-container">
                        <Card className='card-projects' style={{borderRadius:"1rem"}}>
                            <Card.Img variant="top" alt="btr" className='service-image'src={require("../../img/btr.jpg")}/>
                            <Card.Body className='card-body'>
                                <h3 className='project-title'>BTR | Built-to-Rent</h3>
                                <span></span>
                                <p className="project-type">Made4Living adopts a market-aware approach, emphasizing functional design that enhances living experiences in BTR projects. We analyze market data to refine our designs and maintain budgets. Our interiors align with your brand, enhancing marketing efforts.</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="project-container">
                        <Card className='card-projects' style={{borderRadius:"1rem"}}>
                            <Card.Img variant="top" alt="btr" className='service-image'src={require("../../img/multi.jpg")}/>
                            <Card.Body className='card-body'>
                                <h3 className='project-title'>Multi-Unit Apartments</h3>
                                <span></span>
                                <p className="project-type">Our experience lies in multi-unit projects, skilled in conversions and new builds alike. We capture the developer's idea and brand essence, guaranteeing impactful projects. We focus on details and design coherence for enhanced ROI.</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="project-container">
                        <Card className='card-projects' style={{borderRadius:"1rem"}}>
                            <Card.Img variant="top" alt="btr" className='service-image'src={require("../../img/homes.jpg")}/>
                            <Card.Body className='card-body'>
                                <h3 className='project-title'>Luxury Homes</h3>
                                <span></span>
                                <p className="project-type">Our bespoke designs cater to the unique architecture and aspirations of future residents. We craft distinctive identities for each development through careful integration of interior specifications and cohesive branding.</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="project-container">
                        <Card className='card-projects' style={{borderRadius:"1rem"}}>
                            <Card.Img variant="top" alt="btr" className='service-image'src={require("../../img/super.jpg")}/>
                            <Card.Body className='card-body'>
                                <h3 className='project-title'>Super Prime</h3>
                                <span></span>
                                <p className="project-type">In the Super Prime market, we offer meticulous attention to design. Our expert team delivers personalized service, focusing on sophisticated tastes to create exceptional homes that stand as a testament to luxury living.</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="project-container">
                        <Card className='card-projects' style={{borderRadius:"1rem"}}>
                            <Card.Img variant="top" alt="btr" className='service-image'src={require("../../img/office.jpg")}/>
                            <Card.Body className='card-body'>
                                <h3 className='project-title'>Offices</h3>
                                <span></span>
                                <p className="project-type">Our team delivers custom design solutions that merge function and innovation for the modern office. We craft spaces that boost productivity and reflect a company's brand.</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="project-container">
                        <Card className='card-projects' style={{borderRadius:"1rem"}}>
                            <Card.Img variant="top" alt="btr" className='service-image'src={require("../../img/workspace.jpg")}/>
                            <Card.Body className='card-body'>
                                <h3 className='project-title'>Commercial</h3>
                                <span></span>
                                <p className="project-type">Optimize your commercial space with practical design solutions that boost customer engagement while reflecting your brand's unique value. Enhance your property's functionality to elevate the overall experience.</p>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>

            <h2 className='work-title' style={{paddingTop:"3rem"}}>Selected Projects</h2>
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

            {/* <h2 className='work-title' style={{paddingTop:"3rem"}}>Our Services</h2>
                <div style={{background:"none", minHeight:"60vh"}} className='services-box'>
                    <div className='display-services'>
                          <ModelStart class={"model-canvas"} url={currentService?.name} click={click} />
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
            </div> */}
        </Container>
        </motion.div>
    );
}

export default Work;
