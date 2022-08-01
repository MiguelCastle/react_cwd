import React, { useEffect, useMemo, useRef } from 'react'
import brand from '../../../assets/images/compressed/brand/logo-placeholder.webp';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const HomeClients = () => {
    const fadeEffectsTimeline = useMemo(() => gsap.timeline(), []);
    const h4Ref = useRef<HTMLHeadingElement>(null);
    const h2Ref = useRef<HTMLHeadingElement>(null);
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
                    trigger: "#htop-clients-section", 
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
                  trigger: "#htop-clients-section", 
                  start: "top-=300 top",
                //   endTrigger:"footer",
                //   end:"bottom top",
                //   markers: true,
                  once: true,
                  toggleClass: {targets: h2Ref.current, className: "appearLeft"}
              },
          }
        )

        revealRefs.current.forEach((el:HTMLLIElement) => { 
          console.log(el)
        fadeEffectsTimeline.to(el, 
          {
            scrollTrigger: 
                {
                    trigger: "#htop-clients-section", 
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
        <section id="htop-clients-section">
            <h4 ref={h4Ref} className="theme-gradient left-100">top clients</h4>
            <h2 ref={h2Ref} className="right-100">Be An Our Early Client!</h2>
            <ul>
                <li className="up-30" ref={addToRefs}>
                    <img src={brand} alt="placeholder brand" />
                </li>
                <li className="up-30" ref={addToRefs}>
                    <img src={brand} alt="placeholder brand" />
                </li>
                <li className="up-30" ref={addToRefs}>
                    <img src={brand} alt="placeholder brand" />
                </li>
                <li className="up-30" ref={addToRefs}>
                    <img src={brand} alt="placeholder brand" />
                </li>
                <li className="up-30" ref={addToRefs}>
                    <img src={brand} alt="placeholder brand" />
                </li>
                <li className="up-30" ref={addToRefs}>
                    <img src={brand} alt="placeholder brand" />
                </li>
                <li className="up-30" ref={addToRefs}>
                    <img src={brand} alt="placeholder brand" />
                </li>
                <li className="up-30" ref={addToRefs}>
                    <img src={brand} alt="placeholder brand" />
                </li>
                <li className="up-30" ref={addToRefs}>
                    <img src={brand} alt="placeholder brand" />
                </li>
            </ul>
        </section>
    )
}

export default HomeClients;