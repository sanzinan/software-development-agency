import React from 'react';
import './Footer.css';
import FooterCol from './FooterCol';
import { FaFacebook,FaGooglePlus, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    const noNamed = [
        {name: "Emergency Dental Care" , link: "/"},
        {name: "Check Up" , link: "/"},
        {name: "Treatment of Personal Diseases" , link: "/"},
        {name: "Tooth Extraction" , link: "/"}
    ]
    const ourAddress = [
        {name: "New York - 101010 Hudson" , link: "/google.com/map"},
        {name: "Yards" , link: "/google.com/map"},
       
    ]
    const oralHealth = [
        {name: "Emergency Dental Care" , link: "/"},
        {name: "Check Up" , link: "/"},
        {name: "Treatment of Personal Diseases" , link: "/"},
        {name: "Tooth Extraction" , link: "/"}
    ]
    const services = [
        {name: "Emergency Dental Care" , link: "/"},
        {name: "Check Up" , link: "/"},
        {name: "Treatment of Personal Diseases" , link: "/"},
        {name: "Tooth Extraction" , link: "/"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5 back-img">
                <div className="row">
                    <FooterCol key={1} menuTitle={""} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Comprehensive Features" menuItems={oralHealth}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FaFacebook className="icon active-icon"/></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FaGooglePlus className="icon" /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FaInstagramSquare className="icon"  /></a></li>
                        </ul>
                        <div className="mt-5 text-white">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+2025550295</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center text-white">
                    <small>Copyright {(new Date()).getFullYear()} All Rights Reserved</small>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;