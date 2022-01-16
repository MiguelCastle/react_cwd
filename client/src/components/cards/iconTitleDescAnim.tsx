import gsap from 'gsap/all';
import React, { useEffect, useRef } from 'react'
interface IconTitleDescAnimProps {
    desc: string,
    icon: JSX.Element,
    extraClass?: string,
    color?: string,
    anim: boolean,
    num: number
}

const IconTitleDescAnim: React.FC<IconTitleDescAnimProps> = ({icon, desc, extraClass, color, anim, num}) => {
    const titleRef = useRef<HTMLHeadingElement>(null!);

    useEffect(() => {
        if(anim){
            gsap.to(titleRef.current!, {innerText: num,duration:2, snap:"innerText"})
        }
    }, [anim])

    return ( 
        <article className={extraClass ? `cid-container ${extraClass}` : 'cid-container'}>
        <div className={color? color: ''}>
            {icon}
        </div>
        <h3 ref={titleRef}>1</h3>
        <p>
          {desc}
        </p>
      </article>
     );
}
 
export default IconTitleDescAnim;
