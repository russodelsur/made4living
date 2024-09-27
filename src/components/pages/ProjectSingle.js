import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Col, Row } from 'react-bootstrap';
import {motion} from 'framer-motion';
import { Helmet } from 'react-helmet';

const ProjectSingle = ({projects}) => {

    const { slug } = useParams();
    const project = projects.projects.find(p => p.slug === slug)

    return (
    <motion.div className='effect-wrapper'
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
        <Container className='content'>
        <Helmet>
            <title>{project?.name}</title>
            <meta name="description" content={project.body} />
            <link rel="canonical" href={"https://made4living.co.uk/projects/"+project.slug} />
        </Helmet> 
        <Row xs={1} md={3} className="g-4">
            <Card className="card-single-project"> 
                <div style={{padding:".5rem"}}>
                <h1>{project?.name}</h1>
                <h5>Location - {project?.location}</h5>
                <h5>{project?.type}</h5>
                <p className='project-description'>{project?.body}</p>
                </div>
            </Card>
                        {project.images.map((image, index) => (
                        <Col key={index}>
                            <Card className='card-project-individual'>
                            <Card.Img variant="top" className='service-image'src={require("../../img/"+image+".jpg")} />
                            </Card>
                        </Col>
        ))}
        </Row>
        </Container>
    </motion.div>
    )
}

export default ProjectSingle;