import React from 'react';
import CardIconDesc from '../../../components/cards/iconTitleDesc';
import { BroadcastScreen, DoubleBox, Email, Monitor, People, Stack } from '../../../components/icons';

interface HomeServiceProps {
    
}
 
const HomeService: React.FC<HomeServiceProps> = () => {
    return ( 
        <section id="hservices-section">
          <h4 className="theme-gradient">What we can do for you</h4>
          <h2>Services we provide for you.</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
          <ul>
              <li>
                  <CardIconDesc icon={<BroadcastScreen/>} title='business strategy' desc='Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut.' extraClass={'left-align'}/>
              </li>
              <li>
                <CardIconDesc icon={<Stack/>} title='website development' desc='Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut.' extraClass={'left-align'} color={'blue'}/>
              </li>
              <li>
                <CardIconDesc icon={<People/>} title='marketing & reporting' desc='Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut.' extraClass={'left-align'} color={'lightblue'}/>
              </li>
              <li>
                <CardIconDesc icon={<Monitor/>} title='mobile development' desc='Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut.' extraClass={'left-align'} color={'lightgreen'}/>
              </li>
              <li>
                <CardIconDesc icon={<Email/>} title='email marketing' desc='Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut.' extraClass={'left-align'} color={'purple'}/>
              </li>
              <li>
                <CardIconDesc icon={<DoubleBox/>} title='copywriting' desc='Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut.' extraClass={'left-align'} color={'blue'}/>
              </li>
          </ul>
        </section>
     );
}
 
export default HomeService;