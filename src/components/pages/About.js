import React from 'react';
import { Container, Image } from 'react-bootstrap';

function About() {
        return (
            <Container className="container-aboutus">
                <Image className="img-aboutus" alt="sketch" src={require("../../img/aboutus.jpg")} />
                <h1>Made4Living design studio</h1>
                <p className="para-aboutus">
                Welcome to Made4Living, an architectural and interior design studio based in the heart of London. Our mission is to help individuals, families and businesses find, develop and refurbish properties with ease, turning their spaces into beautiful, functional and inspiring environments. We understand that the process of designing and renovating a property can be daunting, stressful and expensive. That’s why we’ve made it our goal to simplify it and offer cost-effective solutions that suit the unique needs and preferences of each client. Our team is composed of highly-skilled, experienced and certified architects, interior designers and project managers who work collaboratively to ensure every detail is given the attention it deserves. We use advanced technology and the latest design trends to create tailor-made solutions that blend functionality, aesthetics and sustainability. We see design as a tool to enhance people’s well-being, productivity and satisfaction. That’s why we take a holistic approach that considers the social, cultural, economic and environmental context of each project. Whether you need a complete refurbishment, an extension, a loft conversion or a simple redecoration, we are here to guide you through the process and exceed your expectations. At Made4Living, we value transparency, integrity, creativity and excellence. We believe that every project is a unique opportunity to express our passion for design and help our clients achieve their dreams. We are committed to delivering high-quality, affordable and timely services that meet local regulations and standards. If you are looking for a reliable, innovative and friendly partner to transform your property into a masterpiece, Made4Living is the right choice. Contact us today to schedule a free consultation and let’s make your vision a reality.
                </p> 
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
                {/* <h2 className='subtitle-aboutus'>Our Blog</h2>
                <p className="para-aboutus">
                Design, Architecture, Real Estate, Interiors. Cost-effective & Investment: finding the best deal for the seller, property acquires value and is shaped on the buyer’s dreams.
                MADE4LIVING, everything you need.
                </p> */}
            </Container>
        );
    }

export default About;
