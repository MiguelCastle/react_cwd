import React from 'react';
import IconTitleDesc from '../../../components/cards/iconTitleDesc';
import {HeartBeat, BroadcastScreen, UnfoldingMap} from '../../../components/icons';
import data from '../../../assets/data/homeIntro.json';

const HomeIntro: React.FC<{}> = () => {
    return (
        <section id="hintro-section">
            <div className="hi-header-wrp">
                <p>your partner in</p>
                <p> web development</p>
            </div>
            <ul>
                <li>
                    <IconTitleDesc icon={<HeartBeat/>} title={data[0].title} desc={data[0].desc}/>
                </li>
                <li>
                    <IconTitleDesc icon={<BroadcastScreen />} title={data[1].title} desc={data[1].desc}/>
                </li>
                <li>
                    <IconTitleDesc icon={<UnfoldingMap/>} title={data[2].title} desc={data[2].desc}/>
                </li>
            </ul>
        </section>
      );
}
 
export default HomeIntro;