import {React} from 'react';
import { Container, Image } from 'react-bootstrap';
import {motion} from 'framer-motion';
// import LondonModel from '../Three/AboutusModel';

function Contact() {
    // const ref = useRef()

        return (
            <motion.div className='effect-wrapper'
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            >
            <Container className='container-contactus'>
                {/* <div id='canvas-london' ref={ref}>
                     <LondonModel ref={ref}/>
                </div> */}
                <div className='contact-info'>
                    <p className='para-contact-light'>Thank you for considering Made4Living for your architectural and interior design needs. We are here to help you transform your space into a beautiful, functional and inspiring environment.</p> 
                    <p className='para-contact-light'>To get started, please use the email below to contact us with your name, email address, phone number and a brief description of your project. Alternatively, feel free to call us or arrange a meeting. We offer a free initial consultation, during which we will discuss your needs and preferences, offer some ideas and suggestions, and provide you with an estimated budget and timeline. We will also explain our design process, fees and terms of service. At Made4Living, we pride ourselves on our communication skills, transparency, creativity and attention to detail. We will keep you informed and involved during every phase of the project, and we will work hard to exceed your expectations.</p> 
                    <p className='para-contact'>Thank you for your interest in Made4Living. We look forward to hearing from you soon.</p>                
                    <p className='para-contact'>Email: info@made4living.com </p>
                    <p className='para-contact'>Phone: +44 7490462682 </p>
                    <p className='para-contact'>Business Hours: Monday to Friday, 9am to 6pm.</p>
                </div>
                <Image className="img-aboutus" alt="sketch" src={require("../../img/contactus.jpg")} />
            </Container>
            </motion.div>
        );
    }

export default Contact;
