import React, { useEffect, useMemo, useRef, useState } from 'react';
import CardIconDesc from '../../../components/cards/iconTitleDesc';
import { CheckCircle, Clock, Heart, Medal } from '../../../components/icons';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IconTitleDescAnim from '../../../components/cards/iconTitleDescAnim';
gsap.registerPlugin(ScrollTrigger); 
   
interface HomeGrowthProps {
    
}
 
const HomeGrowth: React.FC<HomeGrowthProps> = () => {
    const r = useRef<HTMLElement>(null!);
    const [anim, setAnim] = useState(false)

    const fadeEffectsTimeline = useMemo(() => gsap.timeline(), []);
    
    const onEnterFunc = () => {
        setAnim(true)
    }
    useEffect(() => {
		// const start_pos = "-" + (height * .5) + " top"
		// const end_props = "-" + (height* .25)
        fadeEffectsTimeline
        .addLabel("start")
       
		.to(r.current!, {
            scrollTrigger: {
                trigger: r.current!, 
                start: 'top',
                onEnter: onEnterFunc,
                // onLeave: myLeaveFunc,
                onEnterBack: onEnterFunc,
                // onLeaveBack: myLeaveFunc,
                // markers: true 
			}
        })
    }, []);

    return ( 
        <section id="hgrowth-section" ref={r}>
            <h4 className="theme-gradient">The Benefits</h4>
            <h2>why have a website?</h2>
            <p>
               Let's look at a few reasons why you should have a website.
            </p>
            <ul>
                <li>
                    <IconTitleDescAnim desc={'statisfied customers'} icon={<Heart/>} extraClass={'cid-lgt'} anim={anim} num={199} />
                </li>
                <li>
                    <IconTitleDescAnim  desc={'days of operation'} icon={<Clock/>} extraClass={'cid-lgt'} color={'blue'} anim={anim} num={575}/>
                </li>
                <li>
                    <IconTitleDescAnim  desc={'complete project'} icon={<CheckCircle/>} extraClass={'cid-lgt'} color={'lightblue'} anim={anim} num={49}/>
                </li>
                <li>
                    <IconTitleDescAnim  desc={'win awards'} icon={<Medal/>} extraClass={'cid-lgt'} color={'purple'} anim={anim} num={55}/>
                </li>
            </ul>
        </section>
     );
}
 
export default HomeGrowth;