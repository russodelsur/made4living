import React, { Component } from 'react';
import { Container, Button, Form, Card, Col, Image } from "react-bootstrap";

class Home extends Component {
    render() {
        return (
                <Container className='intro-image'>
                <div className='intro-fade'>
                <div className='container-intro'>
                <img className='logo-image' alt="logo" src={require('../img/logo-full.png')}/>
                <h2>Smart design and property solutions. All in one place.</h2>
                <h4>When design combines innovative tech, real estate know-how, dedicated experts and tailored services.</h4>
                </div>
                </div>
                </Container>
        );
    }
}

export default Home;
