import {React, useEffect, useState} from 'react';
import { Container} from 'react-bootstrap';
import {motion} from 'framer-motion';
import ReactPlayer from 'react-player';
import SEO from '../components/SEO';

function About() {
    const [widthValue, setWidth] = useState("50%");

    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
      // Set window width/height to state
      if (window.innerWidth <= 900) {
        setWidth("100%")
      } else {
        setWidth("50%")
        }
      }
      
      // Add event listener
      window.addEventListener('resize', handleResize);
      
      // Call handler right away so state gets updated with initial window size
      handleResize();
      
      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize);
      }, [widthValue]); // Empty array ensures that effect is only run on mount and unmount
       
      return (
            <motion.div className='effect-wrapper'
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            >
            <Container >
            <SEO title="About" description="Learn about our practice, expertise and approach." url="about"/>    
                <div className='aboutus-block'>
                    <h5
                    style={{position:'relative', marginTop:'0',marginLeft:'0',fontSize:'1.2rem',fontWeight:'bold',color:'var(--reseda)'}}>
                        OUR PRACTICE
                    </h5>
                    <div
                    style={{width:widthValue}}
                    >
                        <h2 
                        className='title-aboutus'>
                        Transforming properties through outstanding design innovation.
                        </h2>
                        <p 
                        className="para-aboutus">
                        The design, development, and architecture studio where your vision for the perfect living space transforms into reality with absolute elegance and efficiency. At Made4Living, we embrace the art of creating harmonious designs that not only encapsulate the essence of elegance but also integrate functionality, sustainability, and the unique facets of each client's lifestyle.                    </p> 
                    </div>
                </div>
                <div 
                style={{ pointerEvents: 'none'}}
                id='canvas-video'>
                 <ReactPlayer 
                className="react-player"
                 url={require("../../img/video01.mp4")} 
                 muted={true} autoPlay={true}
                 playing={true} loop={true} 
                 controls={false}
                 playsinline={true} // Add the playsinline attribute
                 width={"100%"} height={"auto"}/>
                </div>
                <div className='aboutus-block' id='our-approach'>
                    <h5
                        style={{position:'relative', marginTop:'0',marginLeft:'0',fontSize:'1.2rem',fontWeight:'bold',color:'var(--reseda)'}}>
                        OUR APPROACH
                    </h5>
                    <div
                    style={{width:widthValue}}
                    >
                        <h2 
                            className='title-aboutus'>
                                At our practice, we are convinced that embracing creativity is the key to unlocking superior design outcomes.
                        </h2>
                        <p className="para-aboutus">
                        At Made4Living, we understand that renovation and design are not merely about altering spaces but reinventing the way you experience home and leisure. With a commitment to delivering a seamless renovation experience, our dedicated team of specialists mindfully merges on every project, offering tailor-made solutions that reflect our core values: unyielding integrity, boundless creativity, and an unwavering commitment to excellence.                    
                        </p>
                    </div>
                </div>
                <div 
                style={{ pointerEvents: 'none'}}
                id='canvas-video'>
                 <ReactPlayer 
                className="react-player"
                url={require("../../img/video02.mp4")} 
                 muted={true} autoPlay={true}
                 playing={true} loop={true} 
                 controls={false}
                 playsinline={true} // Add the playsinline attribute
                 width={"100%"} height={"auto"}/>
                </div>
                <div className='aboutus-block'>
                    <h5
                        style={{position:'relative', marginTop:'0',marginLeft:'0', fontSize:'1.2rem',fontWeight:'bold',color:'var(--reseda)'}}>
                        OUR EXPERTISE
                    </h5>
                    <div
                    style={{width:widthValue}}
                    >
                        <h2 
                        className='title-aboutus'>
                        Our comprehensive array of services encompasses the entirety of your design needs.
                        </h2>
                        <div className='our-expertise'>
                            <h5 className='expertise'>Architectural Design</h5>
                                <p>Discover the perfect balance of engineering and artistry with our architectural design services. We craft the structure and soul of your property with great attention to detail, combining robust functionality with an aesthetic that tells your unique story.</p>

                            <h5 className='expertise'>Inspired Interior Spaces</h5>
                                <p>We bring life into your vision with our interior design expertise. From concept to creation, we curate environments that reflect your personality while catering to your needs, making every space speak of innovation and individuality.</p>

                            <h5 className='expertise'>Effortless Project Navigation</h5>
                                <p>Benefit from our comprehensive project management. As your singular touchpoint, we guide your venture flawlessly from the blueprint to the delivery, overseeing everything from site selection to bespoke procurement, all with the utmost care.</p>

                            <h5 className='expertise'>Tailored Property Discovery</h5>
                                <p>Your ideal property awaits, and we make the search effortless. Our personalized services match your aspirations to the ideal location. Our in-depth reports then ensure you make your property decision with confidence and ease.</p>

                            <h5 className='expertise'>Custom Crafted Furnishings</h5>
                                <p>Unleash the potential of your space with furniture that fits like a glove. Our bespoke design and manufacturing services promise pieces that not only echo your vision but also elevate your environment.</p>

                            <h5 className='expertise'>Immersive 3D Previews</h5>
                                <p>Step into the future of your space with our advanced 3D visualizations. Offering a window into what’s to come, these immersive experiences ensure that the space you've imagined is the space we deliver.</p>
                        </div>
                    </div>
                </div>

            </Container>
            </motion.div>
        );
    }

export default About;
