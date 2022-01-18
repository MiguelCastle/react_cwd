import React from 'react';
import IconTitleDesc from '../../../components/cards/iconTitleDesc';
import {HeartBeat, BroadcastScreen, UnfoldingMap} from '../../../components/icons';

const HomeIntro: React.FC<{}> = () => {
    return (
        <section id="hintro-section">
            <h1 className='theme-gradient'>your partner in web development</h1>
            <ul>
                <li>
                    <IconTitleDesc icon={<HeartBeat/>} title={"Fast"} desc={"One of our goals is make a fast website. Lorem ipsum dolor, sit amet consectetur adipisicing elit."}/>
                </li>
                <li>
                    <IconTitleDesc icon={<BroadcastScreen />} title={"Reliable"} desc={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut similique tempora quidem ducimus, dolores ipsum!"}/>
                </li>
                <li>
                    <IconTitleDesc icon={<UnfoldingMap/>} title={"Secure"} desc={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut similique tempora quidem ducimus, dolores ipsum!"}/>
                </li>
            </ul>
        </section>
      );
}
 
export default HomeIntro;