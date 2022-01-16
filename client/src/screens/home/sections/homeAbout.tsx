import React from 'react'
import { PaperPlane } from '../../../components/icons';

const HomeAbout: React.FC<{}> = () => {
    return ( 
        <section id="habout-section">
            <img src='/assets/images/about/about-1.png' alt="filler" width="100%"/>
            <div id="ha-content">
                <div className="icon-circle">
                    <PaperPlane />
                </div>
                <h2>refreshingly unique company about</h2>
                <p>
                    Far far away, behind the word mountains, far from the countries
                    Vokalia and Consonantia, there live the blind texts. Separated they
                    live in Bookmarksgrove right at the coast of the Semantics, a large
                    language ocean.
                </p>
                <p>
                    A small river named Duden flows by their place and supplies it with
                    the necessary regelialia. It is a paradisematic country, in which
                    roasted parts of sentences
                </p>
                <a href="/#" className="btn-transparent theme-gradient">
                    purchase imroz
                </a>

            </div>
        </section>
     );
}
 
export default HomeAbout;