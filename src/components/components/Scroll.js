import { Link as ScrollLink } from 'react-scroll';
import { ReactComponent as Scroll } from "../../img/scroll.svg";
import React, {useState, useEffect } from 'react';

function ScrollIcon(){
    const [currentSection, setSection] = useState(null)
    const [nextSection, setNextSection] = useState("/")

    useEffect(() => {
        // Define a handler for scroll events
        const handleScroll = () => {
        // Get all your scrollable sections
        const sections = document.querySelectorAll('.scrollable-section');
        let sectionsId = []
        sections.forEach(section => {
            sectionsId.push(section.id)
        })
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();

            // Check if section is at top of the viewport, you might want to add some tolerance
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            // Update the current section state
            setSection(section.getAttribute('id'));
            // You could also update your navigation highlighting here, based on the current section
            }
            });
        };
        
        // Add and remove the scroll event listener
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
        }, []);

        useEffect(() => {
            const sections = document.querySelectorAll('.scrollable-section');
            let sectionsId = []
            sections.forEach(section => {
                sectionsId.push(section.id)
            })
            if (currentSection === sectionsId[3]) {
                setNextSection(sectionsId[0])

            } else{
            for (let i = 0; i < sectionsId.length; i++) {
                if (sectionsId[i] === currentSection) {
                    setNextSection(sectionsId[i+1])
                }
            }}
        }, [currentSection]);
    return(
        <div className="scroll-div">        
        <button style={{height:"0px"}}>
        <ScrollLink
            to={nextSection}
            spy={true}
            smooth={true}
            offset={0}
            duration={300}
            delay={0}
            >
        <Scroll className='scroll'/>
        </ScrollLink>
        </button>    
    </div>
    );
}
export default ScrollIcon;