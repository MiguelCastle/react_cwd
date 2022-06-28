import React from 'react'
import data from '../../../assets/data/contactInfo.json';
import CardIconDesc from '../../../components/cards/iconTitleDesc';
import { BroadcastScreen, Email, Phone, Pin} from '../../../components/icons';

const ContactQuick: React.FC<{}> = () => {
    return (
        <section id="hservices-section">
        <h4 className="theme-gradient">Our Contact Information</h4>
          <h2>Quick Contact</h2>
          <p>
              Don't want to start the project just yet? Jot down my information so its readily avaialable when it's time.
          </p>
          <ul id="cinfo-list">
              <li>
                <CardIconDesc icon={<Phone/>} title={data[0].title} desc={data[0].descript} extraClass={'left-align'} color={'sm-icon'}/>
              </li>
              <li>
                <CardIconDesc icon={<Email/>} title={data[1].title} desc={data[1].descript} extraClass={'left-align'} color={'sm-icon'}/>
              </li>
              <li>
                <CardIconDesc icon={<Pin/>} title={data[2].title} desc={data[2].descript} extraClass={'left-align'} color={'sm-icon'}/>
              </li>
          </ul>
        </section>
    )
}

export default ContactQuick;