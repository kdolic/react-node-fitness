import React from "react";
import {Nav} from "react-bootstrap";
import logo from '../../assets/images/Logo.png';
import '../../css/Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <Nav className='footer-navbar'>
                    <Nav.Link className='footer-nav' href="/">Home</Nav.Link>
                    <Nav.Link className='footer-nav' href="#features">Features</Nav.Link>
                    <Nav.Link className='footer-nav' href="#about">About</Nav.Link>
                    <Nav.Link className='footer-nav' href="#gallery">Gallery</Nav.Link>
                    <Nav.Link className='footer-nav' href="#team">Team</Nav.Link>
                    <Nav.Link className="footer-nav" href="#contact">Contact</Nav.Link>
            </Nav>
            <div className='nav-row'>
            <Nav className='nav-items'> 
            <div className='inner'>
                <Nav.Link className='nav-links' href='#'><span className='footer-span'>Support</span></Nav.Link>
                <Nav.Link className='nav-links' href='#'>Pricing</Nav.Link>
                <Nav.Link className='nav-links' href='#'>Guides</Nav.Link>
                <Nav.Link className='nav-links' href='#'>Training</Nav.Link>
                <Nav.Link className='nav-links' href='#'>Customer Service</Nav.Link>
            </div>
                <br/>
            <div className='inner'>
                <Nav.Link className='nav-links' href='#'><span className='footer-span'>Members</span></Nav.Link>
                <Nav.Link className='nav-links' href='#'>The DEV.FIT App</Nav.Link>
                <Nav.Link className='nav-links' href='#'>Store</Nav.Link>
                <Nav.Link className='nav-links' href='#'>FAQS</Nav.Link>
            </div>
                <br/>
            </Nav>
            <div className='middle'>
            <img src={logo} alt='logo' className='logoFooter' />
                <p>Develop Yourself, Develop Your Fit</p>
            </div>
            <Nav className='nav-items'>
            <div className='inner'>
                <Nav.Link className='nav-links' href='#'><span className='footer-span'>Legal</span></Nav.Link>
                <Nav.Link className='nav-links' href='#'>Claim</Nav.Link>
                <Nav.Link className='nav-links' href='#'>Privacy</Nav.Link>
                <Nav.Link className='nav-links' href='#'>Terms</Nav.Link>
            </div>
                <br/>
            <div className='inner'>
                <Nav.Link className='nav-links' href='#'><span className='footer-span'>Solutions</span></Nav.Link>
                <Nav.Link className='nav-links' href='#'>Marketing</Nav.Link>
                <Nav.Link className='nav-links' href='#'>Analytics</Nav.Link>
                <Nav.Link className='nav-links' href='#'>Commerce</Nav.Link>
                <Nav.Link className='nav-links' href='#'>Insights</Nav.Link>
            </div>
            </Nav>
            </div>
            <div className='bottom'>
                <p>© 2021 DEV.FIT, Inc. All rights reserved.</p>
                <div className='social'>
                    <div className="icons8-facebook"></div>
                    <div className="icons8-twitter"></div>
                    <div className="icons8-instagram"></div>
                    <div className="icons8-play-button"></div>
                    <div className="icons8-tiktok"></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
