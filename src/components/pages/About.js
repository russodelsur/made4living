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
                <h1>Made4Living design studio</h1>
                <p className="para-aboutus">
                Made4Living is an architecture and design studio located in London. We aim to make the process of renovating and designing properties easy, affordable, and stress-free. Our team of experienced designers, architects, and project managers work together to create custom designs that are functional, sustainable, and visually appealing. We take a holistic approach to design that considers the social, cultural, economic, and environmental context of each project. Whether you need a complete overhaul or a simple renovation, we are here to exceed your expectations. At Made4Living, we value integrity, creativity, and excellence. Contact us today to schedule a free consultation and turn your vision into a reality.                </p> 
                <h2 className='subtitle-aboutus'>Our Services</h2> 
                <p className="para-aboutus">
                When design combines innovative tech, dedicated experts and tailored services – Concept Design, Bespoke furniture design, Architectural Design, 3D Visualization, Bespoke Property search, Property Report,  and more. 
                </p>
                <h2 className='subtitle-aboutus'>Our Product</h2> 
                <p className="para-aboutus">
                The easiest way to quote, appoint, track and manage your project. Take off the hassle that characterizes the house research if you have no time to search, or you are moving to a new area, or you simply don’t want to waste time in viewing houses that are not suitable. 
                Know-how to give concrete ideas to build the property of your dream: we can offer design and architectural solutions that our clients cannot necessarily see. 
                One unique point of contact: all type of enquires from house finding to personal shopping. 
                </p>
            </Container>
            </motion.div>
        );
    }

export default About;
