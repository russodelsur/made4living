import {React, useRef, useEffect} from 'react';
import { Container, Image } from 'react-bootstrap';
import {motion} from 'framer-motion';
import LondonModel from '../Three/AboutusModel';

function About() {
        const ref = useRef()

        return (
            <motion.div className='effect-wrapper'
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            >
            <Container >
                <div className='aboutus-block'>
                    <h3 className='title-aboutus'>Made4Living design studio</h3>
                    <p className="para-aboutus">
                        Welcome to Made4Living, the premier design and architecture studio nestled in the heart of London, where your vision for the perfect living space transforms into reality with absolute elegance and efficiency. At Made4Living, we embrace the art of creating harmonious designs that not only encapsulate the essence of sophistication but also integrate functionality, sustainability, and the unique facets of each client's lifestyle.                    
                    </p> 
                </div>
                <div id='canvas-london' ref={ref}>
                     <LondonModel ref={ref}/>
                </div>
                <div className='aboutus-block' id='our-approach'>
                    <h3 className='title-aboutus'>Our Approach</h3> 
                    <p className="para-aboutus">
                    At Made4Living, we understand that renovation and design are not merely about altering spaces but reinventing the way you experience home and leisure. With a commitment to delivering a seamless renovation experience, our dedicated team of seasoned professionals thoughtfully converges on every project, offering tailor-made solutions that reflect our core values: unyielding integrity, boundless creativity, and an unwavering commitment to excellence.                    
                    </p>
                </div>
                <Image className="img-aboutus" alt="sketch" src={require("../../img/aboutus.jpg")} />
                <div className='aboutus-block' >
                    <h3 className='title-aboutus'>Our Expertise</h3> 
                    <p className="para-aboutus">
                    Elevating the ordinary to the extraordinary is our forte. Our comprehensive array of services encompasses the entirety of your design needs:

                    - Concept Design: Breathing life into your initial ideas with imaginative and innovative designs.
                    - Bespoke Furniture Design: Crafting customized furniture pieces tailored to your tastes and the demands of your space.
                    - Architectural Design: Merging technical precision with artistic vision to shape the structural integrity and visual impact of your property.
                    - 3D Visualization: Bringing your future space to life before your eyes through high-definition renders and immersive visualizations.
                    - Bespoke Property Search: Streamlining your house-hunting process with personalized searches that align with your unique preferences and location requirements.
                    - Property Report: Providing a comprehensive assessment of potential properties to make informed decisions with confidence.
                    - Project Management: Offering you the luxury of a single point of contact as we manage and drive your project from inception to completion, including all types of inquires from house finding to personal shopping.
                    </p>
                </div>

            </Container>
            </motion.div>
        );
    }

export default About;
