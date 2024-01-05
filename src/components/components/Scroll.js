import { ReactComponent as Scroll } from "../../img/scroll.svg";
import React from 'react';

function ScrollIcon({onParentClick}){

    const handleChildClick = () => {
        // You could stop the native event propagation if you need to:
        onParentClick();
        }
    return(
        <button className='arrow'>
            <Scroll onClick={handleChildClick} className='scroll'/>
        </button>    
    );
}
export default ScrollIcon;