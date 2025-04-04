import React from 'react';
import { Container } from 'react-bootstrap';
import SEO from '../components/SEO';

function NotFound() {
        return (
            <Container className='container-404'>
                <SEO title="404 - Made4Living" description="404 - Page not found" url="*"/> 
                <div className='contact-info'>
                    <p>"404" error</p>
                    <p>Page not found</p>
                </div>
            </Container>
        );
    }

export default NotFound;
