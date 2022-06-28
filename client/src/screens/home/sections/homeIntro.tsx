import React from 'react';
import IconTitleDesc from '../../../components/cards/iconTitleDesc';
import {HeartBeat, BroadcastScreen, UnfoldingMap} from '../../../components/icons';

const HomeIntro: React.FC<{}> = () => {
    return (
        <section id="hintro-section">
            <h1 className='theme-gradient'>your partner in web development</h1>
            <ul>
                <li>
                    <IconTitleDesc icon={<HeartBeat/>} title={"Fast"} desc={"One of our goals is make a fast website. We do not want you to lose out on customers because of a slow loading site."}/>
                </li>
                <li>
                    <IconTitleDesc icon={<BroadcastScreen />} title={"Responsive"} desc={"Mobile web searches now out number desktop searches. We make it a priority to make sure your mobile site looks good as well as for all other devices."}/>
                </li>
                <li>
                    <IconTitleDesc icon={<UnfoldingMap/>} title={"Friendly Support"} desc={"You're not just a number to me. You can reach out to me and expect to hear from me and not a robot."}/>
                </li>
            </ul>
        </section>
      );
}
 
export default HomeIntro;