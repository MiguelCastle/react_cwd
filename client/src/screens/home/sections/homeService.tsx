import React, { useEffect, useMemo, useRef } from 'react';
import CardIconDesc from '../../../components/cards/iconTitleDesc';
import { ApiIntegration, BroadcastScreen, DjangoIcon, DoubleBox, Email, HostingConfiguration, Monitor, NodeIcon, ReactIcon } from '../../../components/icons';
import data from "../../../assets/data/homeservices.json";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface HomeServiceProps {
    
}
 
const HomeService: React.FC<HomeServiceProps> = () => {
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
                trigger: "#hservices-section", 
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
              trigger: "#hservices-section", 
              start: "top-=300 top",
              // endTrigger:"footer",
              // end:"bottom top",
              // markers: true,
              once: true,
              toggleClass: {targets: h2Ref.current, className: "appearLeft"}
          },
      }
    )
    .to(pRef.current, 
      {
      scrollTrigger: 
          {
              trigger: "#hservices-section", 
              start: "top-=300 top",
              // endTrigger:"footer",
              // end:"bottom top",
              // markers: true,
              once: true,
              toggleClass: {targets: pRef.current, className: "appearUp"}
          },
      }
    )
    revealRefs.current.forEach((el:HTMLLIElement) => { 
    fadeEffectsTimeline.to(el, 
      {
        scrollTrigger: 
            {
                trigger: "#hservices-section", 
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
  }, [])

    return ( 
        <section id="hservices-section">
          <h4 ref={h4Ref} className="theme-gradient left-100">Web Development</h4>
          <h2 ref={h2Ref} className="right-100">tools we use</h2>
          <p ref={pRef} className="up-30">
            To provide fast, reliable, and secure web applications I use trusted technologies for development. Here is a list of the core development tools I may use for a given project.
          </p>
          <ul>
              <li className="up-30" ref={addToRefs}>
                  <CardIconDesc icon={<BroadcastScreen/>} title={data[0].title} desc={data[0].descript} extraClass={'left-align'}/>
              </li>
              <li className="up-30" ref={addToRefs}>
                <CardIconDesc icon={<ReactIcon/>} title={data[1].title} desc={data[1].descript} extraClass={'left-align'} color={'blue'}/>
              </li>
              <li className="up-30" ref={addToRefs}>
                <CardIconDesc icon={<NodeIcon/>} title={data[2].title} desc={data[2].descript} extraClass={'left-align'} color={'lightblue'}/>
              </li>
              <li className="up-30" ref={addToRefs}>
                <CardIconDesc icon={<DjangoIcon/>}title={data[3].title} desc={data[3].descript} extraClass={'left-align'} color={'lightgreen'}/>
              </li>
              <li className="up-30" ref={addToRefs}>
                <CardIconDesc icon={<ApiIntegration/>} title={data[4].title} desc={data[4].descript} extraClass={'left-align'} color={'purple'}/>
              </li>
              <li className="up-30" ref={addToRefs}>
                <CardIconDesc icon={<HostingConfiguration/>}title={data[5].title} desc={data[5].descript} extraClass={'left-align'} color={'blue'}/>
              </li>
          </ul>
        </section>
     );
}
 
export default HomeService;