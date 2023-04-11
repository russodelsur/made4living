import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Col, Row } from 'react-bootstrap';

const ProjectSingle = ({projects}) => {

    const { slug } = useParams();
    const project = projects.projects.find(p => p.slug === slug)

    return (
    <Container className="project-individual">
    <h1>{project?.name}</h1>
    <p className='project-description'>{project?.body}</p>
    <Row xs={1} md={3} className="g-4">
                    {project.images.map((image, index) => (
                    <Col>
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