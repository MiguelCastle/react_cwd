import React from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header';
import ToTop from '../../components/toTop/toTop';
import ContactForm from './sections/ContactForm';
import Intro from './sections/ContactIntro';
import QuickContactInfo from './sections/ContactQuick';

const Contact: React.FC<{}> = () => {

    return (
        <div id="container">
            <Header />
            <Intro/>
            <QuickContactInfo/>
            <ContactForm/>
            <Footer/>
            <ToTop/>
        </div>
    )
}

export default Contact;