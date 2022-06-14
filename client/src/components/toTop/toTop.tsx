import React from 'react';
import { Arrow } from '../icons';

interface ToTopProps {
    
}
 
const ToTop: React.FC<ToTopProps> = () => {
    const handleToTopClick = () => {
        window.scrollTo(0, 0)
    }
    return ( 
        <button id="totop-btn" onClick={handleToTopClick}>
            <Arrow/>
        </button>
     );
}
 
export default ToTop;