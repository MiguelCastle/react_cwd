import React, { useRef } from 'react';
import Header from '../../components/header';
import { Facebook, Instagram, LinkedIn, Twitter } from '../../components/icons';
import About from './sections/homeAbout';
import HomeGrowth from './sections/homeGrowth';
import Intro from './sections/homeIntro';
import HomePortfolio from './sections/homeProfile';
import Service from './sections/homeService';
import ImgbckDesc from '../../components/cards/imgbckDesc';
import brand from '../../assets/images/bck/brand/brand-01.png';
import HomeStaff from './sections/homeStaff';

const Home: React.FC<{}> = () => {
    // 
    // const isInViewport = (offset = 0) => {
    //     console.log('calling is inViewport')
    //     if (!r) return false;
    //     const top = r.current.getBoundingClientRect().top;
    //     console.log(top)
    //     return (top + offset) >= 0 && (top - offset) <= window.innerHeight;
    // }
    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    // }, [])
    // const handleScroll = () => {
    //     isInViewport()
    // }
    return (
      <div id="home-container">
        <Header />
        <Intro />
        <About />
        <Service />
        <HomePortfolio />
        <HomeGrowth />
        <HomeStaff/>
        <section id="hlastest-news-section">
          <h4 className="theme-gradient">what's stories on</h4>
          <h2>latest news</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alternation.
          </p>
          <ul>
            <li>
              <ImgbckDesc
                title1={"app development"}
                title2={"What is the difference between Web and Brand."}
                desc={
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, veritatis."
                }
              />
            </li>
            <li>
              <ImgbckDesc
                title1={"react app"}
                title2={"A big ticket gone to be an interesting look New York"}
                desc={
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, veritatis."
                }
              />
            </li>
            <li>
              <ImgbckDesc
                title1={"photoshop"}
                title2={"Getting tickets to the big show have a closer look"}
                desc={
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, veritatis."
                }
              />
            </li>
          </ul>
        </section>
        <section id="htop-clients-section">
          <h4 className="theme-gradient">top clients</h4>
          <h2>we worked with brands</h2>
          <ul>
            <li>
              <img src={brand} alt="" />
            </li>
            <li>
              <img src={brand} alt="" />
            </li>
            <li>
              <img src={brand} alt="" />
            </li>
            <li>
              <img src={brand} alt="" />
            </li>
            <li>
              <img src={brand} alt="" />
            </li>
            <li>
              <img src={brand} alt="" />
            </li>
            <li>
              <img src={brand} alt="" />
            </li>
            <li>
              <img src={brand} alt="" />
            </li>
            <li>
              <img src={brand} alt="" />
            </li>
          </ul>
        </section>
        <footer>
          <div id="footer-upper">
            <h2>enough talk, let's build somerthing together</h2>
            <button>read our now</button>
          </div>
          <div id="footer-lcw">
              <img
                src="/assets/images/logo/logo-light.png"
                alt="logo of castillo webdevelopment"
              />
              <p>
                Copyright 2021 Imroz React Template. Built with love in Bangladesh
                All rights reserved.
              </p>
          </div>
          <ul id="fquick-link">
              <h4>quick link</h4>
              <li><a href="/#">Portfolio</a></li>
              <li><a href="/#">About</a></li>
              <li><a href="/#">our blog</a></li>
              <li><a href="/#">our team</a></li>
              <li><a href="/#">contact</a></li>
          </ul>
          <ul id="fcompany-links">
              <h4>company</h4>
              <li><a href="/#">Portfolio</a></li>
              <li><a href="/#">About</a></li>
              <li><a href="/#">our blog</a></li>
              <li><a href="/#">our team</a></li>
              <li><a href="/#">contact</a></li>
          </ul>
          <ul id="fcontact-info">
              <h4>say hello</h4>
              <li>Email: admin@example.com</li>
              <li>Email: hr@example.com</li>
              <li>Phone: 0195748123</li>
          </ul>
          <ul id="icons-list">
              <li><Facebook/></li>
              <li><LinkedIn/></li>
              <li><Instagram/></li>
              <li><Twitter/></li>
          </ul>
        </footer>
      </div>
    );
}
 
export default Home;