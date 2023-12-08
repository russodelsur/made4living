import React from 'react';
import { Container } from 'react-bootstrap';

function NotFound() {
        return (
            <Container className='container-404'>
                <div className='contact-info'>
                    <p>404</p>
                    <p>Page not found</p>
                </div>
            </Container>
        );
    }

export default NotFound;
