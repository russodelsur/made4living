import { ReactComponent as Scroll } from "../../img/scroll.svg";
import React from 'react';

function ScrollIcon({onParentClick}){

    const handleChildClick = () => {
        // You could stop the native event propagation if you need to:
        onParentClick();
        }
    return(
        <>
            <Scroll onClick={handleChildClick} className='scroll'/>
        </>    
    );
}
export default ScrollIcon;