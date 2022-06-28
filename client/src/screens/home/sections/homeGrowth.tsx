import React, { useEffect, useMemo, useRef, useState } from 'react';
import CardIconDesc from '../../../components/cards/iconTitleDesc';
import { Announcement, CheckCircle, Clock, HandShake, Heart, Medal, Open, Search, Smiley } from '../../../components/icons';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IconTitleDescAnim from '../../../components/cards/iconTitleDescAnim';
import data from '../../../assets/data/reasonsWhy.json';
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
                <CardIconDesc title={data[0].title} desc={data[0].descript} icon={<Announcement />} extraClass={'why-card'}/>
                </li>
                <li>
                <CardIconDesc title={data[1].title} desc={data[1].descript} icon={<HandShake/>} extraClass={'why-card'}/>
                </li>
                <li>
                <CardIconDesc title={data[2].title} desc={data[2].descript} icon={<Search/>} extraClass={'why-card'}/>
                </li>
                <li>
                <CardIconDesc title={data[3].title} desc={data[3].descript} icon={<Smiley/>} extraClass={'why-card'}/>
                </li>
                <li>
                <CardIconDesc title={data[4].title} desc={data[4].descript} icon={<Open/>} extraClass={'why-card'}/>
                </li>
            </ul>
        </section>
     );
}
 
export default HomeGrowth;