import React from 'react';
import { Container, Card, Col, Row } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import projects from "../../data.json"
import {motion} from 'framer-motion';

function Work() {
    return (
        <motion.div className='effect-wrapper'
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
            <Container>                
                <Row xs={1} md={2} className="g-4">
                    {projects.projects.map((project, index) => (
                    <Col key={index}>
                        <Link to={`/projects/${project.slug}`} id={project.name}>
                        <Card className='card-projects' bg='light'>
                            <Card.Img  variant="top" className='service-image'src={require("../../img/"+project.image+".jpg")} />
                            <Card.Body>
                                <Card.Title>{project.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{project.type}</Card.Subtitle>
                            </Card.Body>
                        </Card>
                        </Link>
                    </Col>
                    ))}
                </Row>
            </Container>
            </motion.div>
        );
    }

export default Work;
