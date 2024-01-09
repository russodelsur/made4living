import {React} from 'react';
import { Container} from 'react-bootstrap';
import {motion} from 'framer-motion';
import City from '../Three/Cities';
// import { SocialIcon } from 'react-social-icons';
import { PopupWidget } from "react-calendly";
import SEO from '../components/SEO';

function Contact() {
    // const ref = useRef()
        return (
            <motion.div className='effect-wrapper'
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
            >
            <Container className='container-contactus'>
            <SEO title="Contact us" description="Reach out to us or schedule a meeting using the bottom in the contact page." url="contact"/> 
                {/* <div id='canvas-london' ref={ref}>
                     <LondonModel ref={ref}/>
                </div> */}
                <div className='contact-info'>
                    <p className='para-contact'>Thank you for your interest in Made4Living. We look forward to hearing from you soon.</p>                
                    <p className='para-contact'>Contact us with your name, contact details, and a short description of your project or call us to set up a meeting. We provide a free first meeting to talk about your needs, give advice, and estimate costs and time. At Made4Living, we value clear communication, openness, creativity, and precision. We'll keep you updated and included throughout the project and aim to surpass your expectations.</p> 
                    <p className='para-contact'>Email: info@made4living.co.uk </p>
                    <p className='para-contact'>Phone: +44 7490462682 </p>
                    <p className='para-contact'>Business Hours: Monday to Friday, 9am to 6pm.</p>
                    {/* <ul style={{padding:"1rem", margin:"auto",  justifyContent:"space-evenly"}}>
                        <SocialIcon bgColor="var(--gentian)" url="https://www.linkedin.com/company/made-4-living/about/" />
                        <SocialIcon bgColor="var(--orange)" url="https://www.instagram.com/m4living/" />
                        <SocialIcon bgColor="var(--greyblue)" url="mailto:info@made4living.co.uk" />
                    </ul> */}
                    <PopupWidget
                                    url="https://calendly.com/d/4yb-jb2-qnt/introductory-consultation"
                                    /*
                                    * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                                    * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                                    */
                                    rootElement={document.getElementById("root")}
                                    text="Click here to schedule a meeting"
                                    textColor="#ffffff"
                                    color="var(--black)"
                                />
                </div>
                <h3 style={{padding:"1rem"}}>We are based in</h3>
                <div className='cities'>
                    <div className='london-div'>
                        <h3>London</h3>
                        <City preset="apartment" url={"/london.gltf"}/>
                    </div>
                    <div className='london-div'>
                        <h3>Madrid</h3>
                        <City preset="park" url={"/madrid.gltf"}/>
                    </div>
                    <div className='london-div'>
                            <h3>Rome</h3>
                        <City preset="forest" url={"/rome.gltf"}/>
                    </div>
                </div>
            </Container>
            </motion.div>
        );
    }

export default Contact;
