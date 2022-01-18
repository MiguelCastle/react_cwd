import React from 'react';
import bck from '../../assets/images/placeholders/blog-04.jpg';

interface ImgbckDescProps {
    title1: string,
    title2: string,
    desc: string,
}
 
const ImgbckDesc: React.FC<ImgbckDescProps> = ({title1,title2,desc}) => {
    return (  
        <article className="img-background-desc-container">
            <img src={bck} alt="filler" />
            <div>
                <h4>{title1}</h4>
                <h3>{title2}</h3>
                <p>{desc}</p>
            </div>
        </article> 
    );
}
 
export default ImgbckDesc;