import React, { useRef } from 'react';
import Header from '../../components/header';
import HomeGrowth from './sections/homeGrowth';
import Intro from './sections/homeIntro';
import HomePortfolio from './sections/homeProfile';
import Service from './sections/homeService';
import brand from '../../assets/images/compressed/brand/logo-placeholder.webp';
import Footer from '../../components/footer/footer';
import ToTop from '../../components/toTop/toTop';
// image
import img from '../../assets/images/compressed/backgrounds/heroBackground.webp';
import HomeClients from './sections/homeClients';

const Home: React.FC<{}> = () => {
    return (
      <div id="container">
        <div id="parralex-img" />
        <Header />
        <main>
          <Intro />
          <Service />
          <HomePortfolio />
          <HomeGrowth />
          <HomeClients/>
        </main>
        <Footer/>
        <ToTop/>
      </div>
    );
}
 
export default Home;