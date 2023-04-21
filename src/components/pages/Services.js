import React from 'react';
import { Container, Card, Col, Row } from 'react-bootstrap';
import services from "../../data.json"

function Services() {
        return (
            <Container>
            <h3 className='service-title' >From bespoke house searches to creating your dream space, we offer all-in-one design and property solutions for individuals and businesses.</h3>
                <Row xs={1} md={3} className="g-4">
                    {services.services.map((service, index) => (
                    <Col key={index} index={index}>
                        <Card className='card-service'>
                            <Card className='container-services-description'>
                                <p className='para-services'>{service.copy}</p>
                            </Card>
                            <Card.Img className='service-image' variant="top" src={require("../../img/"+service.image)} />
                            <Card.Body>
                                <Card.Title>{service.service}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    ))}
                </Row>
            </Container>
        );
    }

export default Services;
