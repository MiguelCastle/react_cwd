import React from 'react';
import CardIconDesc from '../../../components/cards/iconTitleDesc';
import { ApiIntegration, BroadcastScreen, DjangoIcon, DoubleBox, Email, HostingConfiguration, Monitor, NodeIcon, ReactIcon } from '../../../components/icons';
import data from "../../../assets/data/homeservices.json";
interface HomeServiceProps {
    
}
 
const HomeService: React.FC<HomeServiceProps> = () => {
    return ( 
        <section id="hservices-section">
          <h4 className="theme-gradient">Web Development</h4>
          <h2>tools we use</h2>
          <p>
            To provide fast, reliable, and secure web applications I use trusted technologies for development. Here is a list of the core development tools I may use for a given project.
          </p>
          <ul>
              <li>
                  <CardIconDesc icon={<BroadcastScreen/>} title={data[0].title} desc={data[0].descript} extraClass={'left-align'}/>
              </li>
              <li>
                <CardIconDesc icon={<ReactIcon/>} title={data[1].title} desc={data[1].descript} extraClass={'left-align'} color={'blue'}/>
              </li>
              <li>
                <CardIconDesc icon={<NodeIcon/>} title={data[2].title} desc={data[2].descript} extraClass={'left-align'} color={'lightblue'}/>
              </li>
              <li>
                <CardIconDesc icon={<DjangoIcon/>}title={data[3].title} desc={data[3].descript} extraClass={'left-align'} color={'lightgreen'}/>
              </li>
              <li>
                <CardIconDesc icon={<ApiIntegration/>} title={data[4].title} desc={data[4].descript} extraClass={'left-align'} color={'purple'}/>
              </li>
              <li>
                <CardIconDesc icon={<HostingConfiguration/>}title={data[5].title} desc={data[5].descript} extraClass={'left-align'} color={'blue'}/>
              </li>
          </ul>
        </section>
     );
}
 
export default HomeService;