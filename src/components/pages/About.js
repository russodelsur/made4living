import React from 'react';
import { Container, Image } from 'react-bootstrap';

function About() {
        return (
            <Container className="container-aboutus">
                <Image className="img-aboutus" alt="sketch" src={require("../../img/aboutus.jpg")} />
                <h1>Made4Living design studio</h1>
                <p className="para-aboutus">
                    Our founders started MADE4LIVING out of deep frustration. Coming from the design and real estate worlds, they were amazed by the lack of solutions to make designs and property searches simply and accessible. 
                    Who is ready to pay 40% extra costs for unexpected house upgrades? In the Amazon age, who can wait months before finding the right property or the right professionals? 
                    That gave them drive to build a design and property solutions company suited for the 21st century, offering all-in service from bespoke house searches to design the place of your dreams. 
                </p> 
                <h2 className='subtitle-aboutus'>Our Services</h2> 
                <p className="para-aboutus">
                When design combines innovative tech, dedicated experts and tailored services – Bespoke Property search, Property Report, Concept Design, Bespoke furniture design, Architectural Design, 3D Visualization and more. 
                </p>
                <h2 className='subtitle-aboutus'>Our Product</h2> 
                <p className="para-aboutus">
                The easiest way to quote, appoint, track and manage your project. Take off the hassle that characterizes the house research if you have no time to search, or you are moving to a new area, or you simply don’t want to waste time in viewing houses that are not suitable. 
                Know-how to give concrete ideas to build the property of your dream: we can offer design and architectural solutions that our clients cannot necessarily see. 
                One unique point of contact: all type of enquires from house finding to personal shopping. 
                </p>
                <h2 className='subtitle-aboutus'>Our Blog</h2>
                <p className="para-aboutus">
                Design, Architecture, Real Estate, Interiors. Cost-effective & Investment: finding the best deal for the seller, property acquires value and is shaped on the buyer’s dreams.
                MADE4LIVING, everything you need.
                </p>
            </Container>
        );
    }

export default About;
