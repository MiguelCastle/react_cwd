import ImgbckDesc from "../../../components/cards/imgbckDesc";
import diamondhall from "../../../assets/images/compressed/backgrounds/seattlediamondhall_screenshot.webp";
import bagel from "../../../assets/images/compressed/backgrounds/bagelbundance_screenshot.webp";
import bck from '../../../assets/images/compressed/placeholders/coming-soon.webp';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useMemo, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

interface HomePortfolioProps {
    
}
 
const HomePortfolio: React.FC<HomePortfolioProps> = () => {
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
                  trigger: "#hproject-section", 
                  start: "top-=300 top",
                //   endTrigger:"footer",
                //   end:"bottom top",
                //   markers: true,
                  once: true,
                  toggleClass: {targets: h4Ref.current, className: "appearRight"}
              },
          }
      )
      .to(h2Ref.current, 
        {
        scrollTrigger: 
            {
                trigger: "#hproject-section", 
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
                trigger: "#hproject-section", 
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
        console.log(el)
      fadeEffectsTimeline.to(el, 
        {
          scrollTrigger: 
              {
                  trigger: "#hproject-section", 
                  start: "top-=300 top",
                //   endTrigger:"footer",
                //   end:"bottom top",
                //   markers: true,
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
        <section id="hproject-section">
            <h4 ref={h4Ref} className="theme-gradient left-100">What I can do for you</h4>
            <h2 ref={h2Ref} className="right-100">Some of our Recent Works</h2>
            <p ref={pRef} className="up-30">
                If I am not working with a company I are developing prototype web apps. Take a look at company websites currently in development.
            </p>
            <ul>
                <li className="up-30" ref={addToRefs}>
                    <a href="https://main.d20v9o8umiztc0.amplifyapp.com/" target="_blank" rel="noreferrer" aria-label="A project for a venue rental place">
                        <ImgbckDesc title1={"Venue Rental"} title2={"Seattle Diamond Hall"} desc={"A demo website that has the basic foundation for a venue rental business to show off their space."} bck={diamondhall}/>
                    </a>
                </li>
                <li className="up-30" ref={addToRefs}>
                    <a href='http://34.209.6.144/' target="_blank" rel="noreferrer" aria-label="A project for a small bagel vendor">
                        <ImgbckDesc title1={"Basic eCommerce"} title2={"Bagel Bundance"} desc={"A simple eCommerce website to order home made bagels."}  bck={bagel}/>
                    </a>
                </li>
                <li className="up-30" ref={addToRefs}>
                    <ImgbckDesc title1={"Coming Soon"} title2={"Course Management"} desc={"As a programming instructor I am developing an app that will help teach and quiz students live in class."}  bck={bck}/>
                </li>
            </ul>
        </section>
     );
}
 
export default HomePortfolio;