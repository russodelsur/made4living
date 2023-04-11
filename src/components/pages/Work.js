import React from 'react';
import { Container, Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import projects from "../../data.json"

function Work() {

    const navigate = useNavigate();
        return (
            <Container>                
                <Row xs={1} md={2} className="g-4">
                    {projects.projects.map((project, index) => (
                    <Col>
                        <Card onClick={()=>{navigate(`/projects/${project.slug}`)}} className='card-projects' bg='light'>
                        <Card.Img  variant="top" className='service-image'src={require("../../img/"+project.image+".jpg")} />
                        <Card.Body>
                            <Card.Title>{project.name}</Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>
                    ))}
                </Row>
            </Container>
        );
    }

export default Work;
