import {React} from 'react';
import { Container} from 'react-bootstrap';
import {motion} from 'framer-motion';
import ReactPlayer from 'react-player';

function About() {

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
                    Welcome to Made4Living, the premier design and architecture studio where your vision for the perfect living space transforms into reality with absolute elegance and efficiency. At Made4Living, we embrace the art of creating harmonious designs that not only encapsulate the essence of sophistication but also integrate functionality, sustainability, and the unique facets of each client's lifestyle.                    </p> 
                </div>
                <div id='canvas-video'>
                 <ReactPlayer className="video" url={require("../../img/video01.webm")} playing={true} loop={true} width={"100%"} height={"auto"}/>
                </div>
                <div className='aboutus-block' id='our-approach'>
                    <h3 className='title-aboutus' id='our-approach-title'>Our Approach</h3> 
                    <p className="para-aboutus">
                    At Made4Living, we understand that renovation and design are not merely about altering spaces but reinventing the way you experience home and leisure. With a commitment to delivering a seamless renovation experience, our dedicated team of seasoned professionals thoughtfully converges on every project, offering tailor-made solutions that reflect our core values: unyielding integrity, boundless creativity, and an unwavering commitment to excellence.                    
                    </p>
                </div>
                <div id='canvas-video'>
                 <ReactPlayer className="video" url={require("../../img/video02.webm")} playing={true} loop={true} width={"100%"} height={"auto"}/>
                </div>
                <div className='aboutus-block' id='our-expertise' >
                    <h3 className='title-aboutus'>Our Expertise</h3> 
                    <p className="para-aboutus">
                    Elevating the ordinary to the extraordinary is our forte. Our comprehensive array of services encompasses the entirety of your design needs:
                    </p>
                    <div className='our-expertise'>
                        <h5 className='expertise'>Architectural Excellence</h5>
                        <p>Discover the perfect balance of engineering and artistry with our architectural design services. We craft the structure and soul of your property with unwavering attention to detail, marrying robust functionality with an aesthetic that tells your unique story.</p>

                        <h5 className='expertise'>Inspired Interior Spaces</h5>
                        <p>We breathe life into your vision with our interior design expertise. From concept to creation, we curate environments that reflect your personality while catering to your needs, making every space speak of innovation and individuality.</p>

                        <h5 className='expertise'>Effortless Project Navigation</h5>
                        <p>Benefit from our all-encompassing project management. As your singular touchpoint, we guide your venture flawlessly from the blueprint to the final flourish, overseeing everything from site selection to bespoke procurement, all with the utmost care.</p>

                        <h5 className='expertise'>Tailored Property Discovery</h5>
                        <p>Your dream property awaits, and we make the search effortless. Our personalized services match your aspirations to the ideal location. Our in-depth reports then ensure you make your property decision with confidence and ease.</p>

                        <h5 className='expertise'>Custom Crafted Furnishings</h5>
                        <p>Unleash the potential of your space with furniture that fits like a glove. Our bespoke design and manufacturing services promise pieces that not only echo your vision but also elevate your environment.</p>

                        <h5 className='expertise'>Immersive 3D Previews</h5>
                        <p>Step into the future of your space with our advanced 3D visualizations. Offering a window into what’s to come, these immersive experiences ensure that the space you've imagined is the space we deliver.</p>
                    </div>
                    <p className="para-aboutus">
                    Embrace a partnership with a team whose work speaks volumes—manifest in spaces constructed in collaboration for renowned entities such as Soho House, Samsung, Armani, and Fulham Football Club.              
                    </p>
                </div>

            </Container>
            </motion.div>
        );
    }

export default About;
