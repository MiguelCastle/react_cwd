import React from 'react';
import IconTitleDesc from '../../../components/cards/iconTitleDesc';
import {HeartBeat, BroadcastScreen, UnfoldingMap} from '../../../components/icons';

const HomeIntro: React.FC<{}> = () => {
    return (
        <section id="hintro-section">
            <h1 className='theme-gradient'>design driven development your web products.</h1>
            <ul>
                <li>
                    <IconTitleDesc icon={<HeartBeat/>} title={"awarded design"} desc={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut similique tempora quidem ducimus, dolores ipsum!"}/>
                </li>
                <li>
                    <IconTitleDesc icon={<BroadcastScreen />} title={"design & creative"} desc={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut similique tempora quidem ducimus, dolores ipsum!"}/>
                </li>
                <li>
                    <IconTitleDesc icon={<UnfoldingMap/>} title={"app development"} desc={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut similique tempora quidem ducimus, dolores ipsum!"}/>
                </li>
            </ul>
        </section>
      );
}
 
export default HomeIntro;