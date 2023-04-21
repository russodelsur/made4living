import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Col, Row } from 'react-bootstrap';

const ProjectSingle = ({projects}) => {

    const { slug } = useParams();
    const project = projects.projects.find(p => p.slug === slug)

    return (
    <Container className="containe-project-individual">
    <Row xs={1} md={3} className="g-4">
        <Card className="card-single-project"> 
            <div style={{padding:".5rem"}}>
            <h1>{project?.name}</h1>
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
    )
}

export default ProjectSingle;