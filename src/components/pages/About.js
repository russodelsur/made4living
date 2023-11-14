import React from 'react';
import { Container, Image } from 'react-bootstrap';
import {motion} from 'framer-motion';

function About() {
        return (
            <motion.div className='effect-wrapper'
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            >
            <Container className="container-aboutus">
                <Image className="img-aboutus" alt="sketch" src={require("../../img/aboutus.jpg")} />
                <div>
                    <h3 className='title-aboutus'>Made4Living design studio</h3>
                    <p className="para-aboutus">
                    Made4Living is a design and architecture studio in London that offers affordable and stress-free renovation and property design services. Our team of professionals work together to create custom designs that are functional, sustainable, and aesthetically pleasing while considering the social, cultural, economic, and environmental context of each project. We offer complete overhauls and simple renovations to exceed expectations. Our values include integrity, creativity, and excellence. Contact us now for a free consultation.                    </p> 
                    <h3 className='title-aboutus'>Our Services</h3> 
                    <p className="para-aboutus">
                    When design combines innovative tech, dedicated experts and tailored services – Concept Design, Bespoke furniture design, Architectural Design, 3D Visualization, Bespoke Property search, Property Report,  and more. 
                    </p>
                    <h3 className='title-aboutus'>Our Product</h3> 
                    <p className="para-aboutus">
                    The easiest way to quote, appoint, track and manage your project. Take off the hassle that characterizes the house research if you have no time to search, or you are moving to a new area, or you simply don’t want to waste time in viewing houses that are not suitable. 
                    Know-how to give concrete ideas to build the property of your dream: we can offer design and architectural solutions that our clients cannot necessarily see. 
                    One unique point of contact: all type of enquires from house finding to personal shopping. 
                    </p>
                </div>
            </Container>
            </motion.div>
        );
    }

export default About;
