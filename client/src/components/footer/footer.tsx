import React from 'react';
import { useNavigate } from "react-router-dom";
import logoLight from '../../assets/images/logo/logo.webp';
import { Facebook, Instagram, LinkedIn, Twitter } from '../icons';
const Footer: React.FC<{}> = () => {
    let navigate = useNavigate()
    return (
        <footer>
            <div id="footer-upper">
            <h2>enough talk, let's build something together</h2>
            <button onClick={() => navigate('/contact')} >Hire Me</button>
            </div>
            <div id="footer-lcw">
                <img
                src={logoLight}
                alt="logo of castillo webdevelopment"
                />
                <p>
                Copyright ©2021 Castillo Webdevelopment
                </p>
            </div>
            <ul id="fquick-link">
                <h4>quick link</h4>
                <li><a href="/">Home</a></li>
                <li><a href="/#hproject-section">Portfolio</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
           
            <ul id="fcontact-info">
                <h4>say hello</h4>
                <li>Email: admin@example.com</li>
            </ul>
            <ul id="icons-list">
                <li><Facebook/></li>
                <li><LinkedIn/></li>
                <li><Instagram/></li>
                <li><Twitter/></li>
            </ul>
      </footer>
    )
}

export default Footer;