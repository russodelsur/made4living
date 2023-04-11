import React, { Component } from 'react';
import { div, Button, Form, Card, Col, Image } from "react-bootstrap";

class Home extends Component {
    render() {
        return (
                <div className='intro-image'>
                <div className='intro-fade'>
                <div className='container-intro'>
                <img className='logo-image' alt="logo" src={require('../img/logo-full.png')}/>
                <h2>Smart design and property solutions. All in one place.</h2>
                <h4>When design combines innovative tech, real estate know-how, dedicated experts and tailored services.</h4>
                </div>
                </div>
                </div>
        );
    }
}

export default Home;
