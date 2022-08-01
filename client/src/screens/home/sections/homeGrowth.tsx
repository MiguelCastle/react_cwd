import React, { useEffect, useMemo, useRef } from 'react';
import CardIconDesc from '../../../components/cards/iconTitleDesc';
import { Announcement,HandShake, Open, Search, Smiley } from '../../../components/icons';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import data from '../../../assets/data/reasonsWhy.json';
gsap.registerPlugin(ScrollTrigger); 
   
interface HomeGrowthProps {
    
}
 
const HomeGrowth: React.FC<HomeGrowthProps> = () => {

    const fadeEffectsTimeline = useMemo(() => gsap.timeline(), []);
    const h4Ref = useRef<HTMLHeadingElement>(null);
    const h2Ref = useRef<HTMLHeadingElement>(null);
    const pRef = useRef<HTMLParagraphElement>(null);
    const revealRefs = useRef<HTMLLIElement[]>([]);

    revealRefs.current = [];

    const addToRefs = (el:HTMLLIElement) => {
        console.log('adding to ref')
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };

    useEffect(() => {
        fadeEffectsTimeline
        .to(h4Ref.current, 
            {
            scrollTrigger: 
                {
                    trigger: "#hgrowth-section", 
                    start: "top-=300 top",
                    // endTrigger:"footer",
                    // end:"bottom top",
                    // markers: true,
                    once: true,
                    toggleClass: {targets: h4Ref.current, className: "appearRight"}
                },
            }
        )
        .to(h2Ref.current, 
          {
          scrollTrigger: 
              {
                  trigger: "#hgrowth-section", 
                  start: "top-=300 top",
                //   endTrigger:"footer",
                //   end:"bottom top",
                //   markers: true,
                  once: true,
                  toggleClass: {targets: h2Ref.current, className: "appearLeft"}
              },
          }
        )
        .to(pRef.current, 
          {
          scrollTrigger: 
              {
                  trigger: "#hgrowth-section", 
                  start: "top-=300 top",
                //   endTrigger:"footer",
                //   end:"bottom top",
                //   markers: true,
                  once: true,
                  toggleClass: {targets: pRef.current, className: "appearUp"}
              },
          }
        )
        revealRefs.current.forEach((el:HTMLLIElement) => { 
          console.log(el)
        fadeEffectsTimeline.to(el, 
          {
            scrollTrigger: 
                {
                    trigger: "#hgrowth-section", 
                    start: "top-=300 top",
                    // endTrigger:"footer",
                    // end:"bottom top",
                    // markers: true,
                    once: true,
                    onEnter() {
                      el.classList.remove('up-30');
                    },
                    toggleClass: {targets: el, className: "appearUp"}
                },
            }
          );
      });
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

    return ( 
        <section id="hgrowth-section">
            <h4 className="theme-gradient left-100" ref={h4Ref} >The Benefits</h4>
            <h2 className='right-100' ref={h2Ref}>why have a website?</h2>
            <p className='up-30' ref={pRef}>
               Let's look at a few reasons why you should have a website.
            </p>
            <ul>
                <li className="up-30" ref={addToRefs}>
                    <CardIconDesc title={data[0].title} desc={data[0].descript} icon={<Announcement />} extraClass={'why-card'}/>
                </li>
                <li className="up-30" ref={addToRefs}>
                    <CardIconDesc title={data[1].title} desc={data[1].descript} icon={<HandShake/>} extraClass={'why-card'}/>
                </li>
                <li className="up-30" ref={addToRefs}>
                    <CardIconDesc title={data[2].title} desc={data[2].descript} icon={<Search/>} extraClass={'why-card'}/>
                </li>
                <li className="up-30" ref={addToRefs}>
                    <CardIconDesc title={data[3].title} desc={data[3].descript} icon={<Smiley/>} extraClass={'why-card'}/>
                </li>
                <li className="up-30" ref={addToRefs}>
                    <CardIconDesc title={data[4].title} desc={data[4].descript} icon={<Open/>} extraClass={'why-card'}/>
                </li>
            </ul>
        </section>
     );
}
 
export default HomeGrowth;